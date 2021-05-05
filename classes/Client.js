const WebSocket = require('ws')
const Events = require('./Events.js')

var connectionData = {
    op: 2,
    d: {
        token: null,
        intents: 513,
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
var latency;
var heartbeatloop = true;

class Client{
    static APIUrl = 'https://discord.com/api/v9/';
    APIUrl = 'https://discord.com/api/v9/';
    sessionID;
    heartbeatInterval;
    _events = {};

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
     */
    constructor(token){
        if(typeof token != 'string') throw new Error('Token has to be string.')
        this.token = token;
    }

    /**
     * 
     * @param {String} [token] - Your bot token.
     */
    start(token){
        var token = token || this.token; 
        con = new WebSocket('wss://gateway.discord.gg')

        con.on('message', (raw) => {
            var raw_json = JSON.parse(raw);
            var data = raw_json.d;
            var type = raw_json.op;
            var event = raw_json.t;
            if(raw_json.s) sequenceNumber = raw_json.s;
            let ping = new Date().getTime();
            //console.log(type)

            if(type == 7){
                con.send(JSON.stringify({ token: this.token, session_id: this.sessionID, seq: sequenceNumber }))
            }
            else if(type == 11) console.log(`Heartbeat active. Latency: ${(ping-latency).toString()} ms`);
            else if(type == 10) {
                this.heartbeatInterval = data.heartbeat_interval;
                console.log('Started to ping every', (this.heartbeatInterval/1000).toString(), 'seconds.')
                connectionData.d.token = token;
                con.send(JSON.stringify(connectionData));
                this.#heartbeatLoop()
            }
            else if(type == 0){
                console.log('Event:', event);
                if(event == 'GUILD_CREATE'){
                    this.storage._guilds[data.id] = data;
                    if(Events.GUILD in this._events) this._events[Events.GUILD](data);
                }
                else if(event == 'READY') {
                    this.sessionID = data.session_id;
                    for(let guild of data.guilds){
                        this.storage._guilds[guild.id] = guild;
                    }
                    if(Events.READY in this._events) this._events[Events.READY](data.user);
                }
                else if(event == 'INTERACTION_CREATE'){
                    //console.log(data.token)
                    let interactions_id = data.id;
                    let interactions_token = data.token;
                    let command_data = data.data;
                    if(Events.SLASH_COMMAND in this._events) this._events[Events.SLASH_COMMAND](interactions_id, interactions_token, command_data, data)
                }
            }
        })
    }

    #heartbeat = () => {
        if(sequenceNumber === undefined){
            sequenceNumber = null;
        }
        con.send(JSON.stringify({op: 1, d: sequenceNumber}));
        latency = new Date().getTime();
        if(heartbeatloop) this.#heartbeatLoop();
    }
    
    #heartbeatLoop = () => {
        setTimeout(this.#heartbeat, this.heartbeatInterval)
    }

    /**
     * 
     * @param {String} event - The event that is going to be called.
     * @param {Function} callback 
     */
    on(event, callback){
        this._events[event] = callback;
    }
}

module.exports = Client;