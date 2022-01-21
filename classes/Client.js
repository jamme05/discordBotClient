const WebSocket = require('./WebSocketClient.js')
const Events = require('./Events.js')
const SlashCommandInteraction = require('./SlashCommand.js')
const MessageComponent = require('./MessageComponent.js')
const HeartBeatLoop = require('./HeartBeatLoop.js');


var connectionData = {
    op: 2,
    d: {
        token: null,
        intents: 32767,
        properties: {
            '$os': 'linux',
            '$browser': 'disco',
            '$device': 'disco'
        },
        "presence": {
            "activities": [
                {
                    "name": "Discord API",
                    "type": 0
                },
                {
                    "name": "Detta går ganska bra skulle jag påstå.",
                    "emoji": {
                        "name": ":stuck_out_tongue:"
                    },
                    "type": 4
                }
            ]
        }
    }
}

var sequenceNumber;
var con;
//var latency;

class Client{
    static APIUrl = 'https://discord.com/api/v9/';
    APIUrl = 'https://discord.com/api/v9/';
    sessionID;
    heartbeatInterval;
    _events = {};
    heartBeat;
    reconnect = false;

    storage = {
        _users: {},
        _guilds: {},
        _channels: {},
        _messages: {},
        getUser: (id) => {
            return this.storage._users[id];
        },
        getGuild: (id) => {
            return this.storage._guilds[id];
        },
        getChannel: (id) => {
            return this.storage._channels[id];
        },
        getMessage: (id) => {
            return this.storage._messages[id];
        }
    }
    /**
     * 
     * @param {String} token - Your bot token.
     * @param {Object} opt - Extra settings.
     * @param {number} opt.intents - Your intents.
     */
    constructor(token, opt){
        if(typeof token != 'string') throw new Error('Token has to be string.')
        this.token = token;
        connectionData.d.intents = opt.intents;
    }

    /**
     * 
     * @param {String} [token] - Your bot token.
     */
    start(token){
        var token = token || this.token;
        con = new WebSocket();
        con.open('wss://gateway.discord.gg');

        this.webSocketSetup(token);
    }
    

    /**
     * 
     * @callback messageComponentCallback
     * @param {MessageComponent} messageComponent - The incoming message component.
     * @param {object} raw - The raw message component data.
     */

    /**
     * 
     * @callback slashCommandCallback
     * @param {SlashCommandInteraction} command - The incoming command.
     * @param {object} raw - The raw command data.
     */

    /**
     * 
     * @param {String} event - The event that is going to be called.
     * @param {slashCommandCallback} callback 
     */
    on(event, callback){
        this._events[event] = callback;
    }

    /**
     * 
     * @param {slashCommandCallback} callback - The callback needed to recive the command data.
     */
    onCommand(callback){
        this._events[Events.SLASH_COMMAND] = callback;
    }

    /**
     * 
     * @param {messageComponentCallback} callback - The callback needed to recive the message component data.
     */
    onMessageComponent(callback){
        this._events[Events.BUTTON_INTERACTION] = callback;
    }

    webSocketSetup(token){
        /*con.on('close', () => {
            heartbeatloop = false;
            try{
                console.log('Reconnecting...')
                var i = 0;
                setTimeout(() => {
                    try{
                        con = new WebSocket('wss://gateway.discord.com')
                    }catch{
                        con = null;
                    }
                    con.on('open', () => {
                        con.send(JSON.stringify({ op: 6, d: {token: this.token, session_id: this.sessionID, seq: sequenceNumber} }))
                    })
                    this.webSocketSetup(this.token)
                    }, 20000)
            }catch(err){
                console.log(err)
                console.log('Unable to reconnect.')
            }
            
            
        })*/
        con.onclose = (e) => {
            this.heartBeat.Stop();
            this.heartBeat = null;
            this.reconnect = true;
        }

        con.onopen = (e) => {
            console.log('Connection to discord API.')
        }
    
        con.onmessage = (raw, flags, number) => {
            var raw_json = JSON.parse(raw);
            var data = raw_json.d;
            var type = raw_json.op;
            var event = raw_json.t;
            if(raw_json.s) {
                this.heartBeat.newData(raw_json.s)
            }
            //let ping = new Date().getTime();
            //console.log(type)
            //console.log(this.heartBeat)
            if(type == 7){
                con.send(JSON.stringify({ op: 6, d: {token: this.token, session_id: this.sessionID, seq: sequenceNumber}}))
            }
            
            else if(type == 11) this.heartBeat._callback(new Date().getTime());
            else if(type == 10) {
                this.heartbeatInterval = data.heartbeat_interval;
                console.log('Started to ping every', (this.heartbeatInterval/1000).toString(), 'seconds.')
                connectionData.d.token = token; 
                con.send(JSON.stringify(connectionData));
                this.heartBeat = new HeartBeatLoop(con, this.heartbeatInterval)
                this.heartBeat.Start()
            }
            else if(type == 0){
                console.log('Event:', event);
                if(event == 'GUILD_CREATE'){
                    this.storage._guilds[data.id] = data;
                    if(Events.GUILD in this._events) this._events[Events.GUILD](data);
                }
                else if(event == 'READY') {
                    this.user = data.user;
                    this.sessionID = data.session_id;
                    for(let guild of data.guilds){
                        this.storage._guilds[guild.id] = guild;
                    }
                    if(Events.READY in this._events) this._events[Events.READY](data.user);
                }
                else if(event == 'INTERACTION_CREATE'){
                    //console.log(data.token)
                    if(data.type == 2){
                        let callback = this._events[Events.SLASH_COMMAND]
                        if(typeof callback == 'function') callback(new SlashCommandInteraction(data), data)
                    }
                    else{
                        let callback = this._events[Events.BUTTON_INTERACTION]
                        if(typeof callback == 'function') callback(new MessageComponent(data), data)
                    }
                    
                }
                else if(event == 'MESSAGE_REACTION_ADD'){
                    if(Events.REACTION_ADD in this._events) this._events[Events.REACTION_ADD](data)
                }
                else if(event == 'MESSAGE_REACTION_REMOVE'){
                    if(Events.REACTION_REMOVE in this._events) this._events[Events.REACTION_REMOVE](data)
                }
                else if(event == 'MESSAGE_CREATE'){
                    if(Events.MESSAGE in this._events) this._events[Events.MESSAGE](data)
                }
            }
            else if(type == 7) console.log('Trying to disconnect.')
        }
    }
}

module.exports = Client;