const WebSocket = require('./WebSocketClient.js')
const Events = require('./Events.js')
const SlashCommandInteraction = require('./SlashCommand.js')
const MessageComponent = require('./MessageComponent.js')
const HeartBeatLoop = require('./HeartBeatLoop.js');


var connectionData = {
    op: 2,
    d: {
        token: null,
        intents: 0,
        properties: {
            '$os': 'linux',
            '$browser': 'disco',
            '$device': 'disco'
        }
    }
}

var sequenceNumber;
var con;
//var latency;

class Client{
    sessionID;
    heartbeatInterval;
    _events = {};
    heartBeat;
    reconnect = false;
    debug = false;

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
     * @param {boolean} [opt.debug=false] - If the client should show the heartbeat. Defaults to false.
     */
    constructor(token, opt){
        if(typeof token != 'string') throw new Error('Token has to be string.')
        this.token = token;
        connectionData.d.intents = opt.intents;
        this.debug = opt.debug;
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
     * @callback baseCallback
     * @param {Object} data - The data.
     * @param {object} raw - The raw gateway data.
     * @returns {Promise}
     */
    /**
     * 
     * @callback readyCallback
     * @param {User} user - Your bots user.
     * @param {object} raw - The raw gateway data.
     * @returns {Promise}
     */
    /**
     * 
     * @callback messageComponentCallback
     * @param {MessageComponent} messageComponent - The incoming message component.
     * @param {object} raw - The raw gateway data.
     * @returns {Promise}
     */
    /**
     * @callback slashCommandCallback
     * @param {SlashCommandInteraction} command - The incoming command.
     * @param {object} raw - The raw gateway data.
     * @returns {Promise}
     */
    /**
     * 
     * @typedef {'SLASH_COMMAND'|'MESSAGE_COMPONENT'|'HELLO'|'READY'|'RESUMED'|'RECONNECT'|'INVALID_SESSION'|'APPLICATION_COMMAND_PERMISSION_UPDATE'|'CHANNEL_CREATE'|'CHANNEL_UPDATE'|'CHANNEL_DELETE'|'CHANNEL_PINS_UPDATE'|'THREAD_CREATE'|'THREAD_UPDATE'|'THREAD_DELETE'|'THREAD_LIST_SYNC'|'THREAD_MEMBER_UPDATE'|'THREAD_MEMBERS_UPDATE'|'GUILD_CREATE'|'GUILD_UPDATE'|'GUILD_DELETE'|'GUILD_BAN_ADD'|'GUILD_BAN_REMOVE'|'GUILD_EMOJIS_UPDATE'|'GUILD_STICKERS_UPDATE'|'GUILD_INTEGRATIONS_UPDATE'|'GUILD_MEMBER_ADD'|'GUILD_MEMBER_REMOVE'|'GUILD_MEMBER_UPDATE'|'GUILD_MEMBERS_CHUNK'|'GUILD_ROLE_CREATE'|'GUILD_ROLE_UPDATE'|'GUILD_ROLE_DELETE'|'GUILD_SCHEDULED_EVENT_CREATE'|'GUILD_SCHEDULED_EVENT_UPDATE'|'GUILD_SCHEDULED_EVENT_DELETE'|'GUILD_SCHEDULED_EVENT_USER_ADD'|'GUILD_SCHEDULED_EVENT_USER_REMOVE'|'INTEGRATION_CREATE'|'INTEGRATION_UPDATE'|'INTEGRATION_DELETE'|'INTERACTION_CREATE'|'INVITE_CREATE'|'INVITE_DELETE'|'MESSAGE_CREATE'|'MESSAGE_UPDATE'|'MESSAGE_DELETE'|'MESSAGE_DELETE_BULK'|'MESSAGE_REACTION_ADD'|'MESSAGE_REACTION_REMOVE'|'MESSAGE_REACTION_REMOVE_ALL'|'MESSAGE_REACTION_REMOVE_EMOJI'|'PRESENCE_UPDATE'|'STAGE_INSTANCE_CREATE'|'STAGE_INSTANCE_DELETE'|'STAGE_INSTANCE_UPDATE'|'TYPING_START'|'USER_UPDATE'|'VOICE_STATE_UPDATE'|'VOICE_SERVER_UPDATE'|'WEBHOOKS_UPDATE'} EventTypes
     * 
     * @typedef {object} callbackTypes
     * @property {slashCommandCallback} SLASH_COMMAND
     * @property {messageComponentCallback} MESSAGE_COMPONENT
     * @property {asyncbaseCallback} HELLO
     * @property {readyCallback} READY
     * @property {baseCallback} RESUMED
     * @property {baseCallback} RECONNECT
     * @property {baseCallback} INVALID_SESSION
     * @property {baseCallback} APPLICATION_COMMAND_PERMISSION_UPDATE
     * @property {baseCallback} CHANNEL_CREATE
     * @property {baseCallback} CHANNEL_UPDATE
     * @property {baseCallback} CHANNEL_DELETE
     * @property {baseCallback} CHANNEL_PINS_UPDATE
     * @property {baseCallback} THREAD_CREATE
     * @property {baseCallback} THREAD_UPDATE
     * @property {baseCallback} THREAD_DELETE
     * @property {baseCallback} THREAD_LIST_SYNC
     * @property {baseCallback} THREAD_MEMBER_UPDATE
     * @property {baseCallback} THREAD_MEMBERS_UPDATE
     * @property {baseCallback} GUILD_CREATE
     * @property {baseCallback} GUILD_UPDATE
     * @property {baseCallback} GUILD_DELETE
     * @property {baseCallback} GUILD_BAN_ADD
     * @property {baseCallback} GUILD_BAN_REMOVE
     * @property {baseCallback} GUILD_EMOJIS_UPDATE
     * @property {baseCallback} GUILD_STICKERS_UPDATE
     * @property {baseCallback} GUILD_INTEGRATIONS_UPDATE
     * @property {baseCallback} GUILD_MEMBER_ADD
     * @property {baseCallback} GUILD_MEMBER_REMOVE
     * @property {baseCallback} GUILD_MEMBER_UPDATE
     * @property {baseCallback} GUILD_MEMBERS_CHUNK
     * @property {baseCallback} GUILD_ROLE_CREATE
     * @property {baseCallback} GUILD_ROLE_UPDATE
     * @property {baseCallback} GUILD_ROLE_DELETE
     * @property {baseCallback} GUILD_SCHEDULED_EVENT_CREATE
     * @property {baseCallback} GUILD_SCHEDULED_EVENT_UPDATE
     * @property {baseCallback} GUILD_SCHEDULED_EVENT_DELETE
     * @property {baseCallback} GUILD_SCHEDULED_EVENT_USER_ADD
     * @property {baseCallback} GUILD_SCHEDULED_EVENT_USER_REMOVE
     * @property {baseCallback} INTEGRATION_CREATE
     * @property {baseCallback} INTEGRATION_UPDATE
     * @property {baseCallback} INTEGRATION_DELETE
     * @property {baseCallback} INTERACTION_CREATE
     * @property {baseCallback} INVITE_CREATE
     * @property {baseCallback} INVITE_DELETE
     * @property {baseCallback} MESSAGE_CREATE
     * @property {baseCallback} MESSAGE_UPDATE
     * @property {baseCallback} MESSAGE_DELETE
     * @property {baseCallback} MESSAGE_DELETE_BULK
     * @property {baseCallback} MESSAGE_REACTION_ADD
     * @property {baseCallback} MESSAGE_REACTION_REMOVE
     * @property {baseCallback} MESSAGE_REACTION_REMOVE_ALL
     * @property {baseCallback} MESSAGE_REACTION_REMOVE_EMOJI
     * @property {baseCallback} PRESENCE_UPDATE
     * @property {baseCallback} STAGE_INSTANCE_CREATE
     * @property {baseCallback} STAGE_INSTANCE_DELETE
     * @property {baseCallback} STAGE_INSTANCE_UPDATE
     * @property {baseCallback} TYPING_START
     * @property {baseCallback} USER_UPDATE
     * @property {baseCallback} VOICE_STATE_UPDATE
     * @property {baseCallback} VOICE_SERVER_UPDATE
     * @property {baseCallback} WEBHOOKS_UPDATE
     */
    /**
     * @template {EventTypes} E
     * @param {E} event - The event that is going to be called.
     * @param {callbackTypes[E]} callback The callback, recommend using async functions.
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
        con.onclose = (e) => {
            if(this.heartBeat)this.heartBeat.Stop();
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
            /**
             * @type {EventTypes}
             */
            var event = raw_json.t;
            if(raw_json.s) {
                this.heartBeat.newData(raw_json.s);
            }
            //let ping = new Date().getTime();
            //console.log(type)
            //console.log(this.heartBeat)
            switch(type){
                case 7:
                    con.send(JSON.stringify({ op: 6, d: {token: this.token, session_id: this.sessionID, seq: sequenceNumber}}));
                    break;

                case 11:
                    this.heartBeat._callback(new Date().getTime());
                    break;

                case 10:
                    this.heartbeatInterval = data.heartbeat_interval;
                    if(this.debug) console.log('Started to ping every', (this.heartbeatInterval/1000).toString(), 'seconds.')
                    connectionData.d.token = token; 
                    con.send(JSON.stringify(connectionData));
                    this.heartBeat = new HeartBeatLoop(con, this.heartbeatInterval,this.debug)
                    this.heartBeat.Start();
                    break;

                case 0:
                    if(this.debug)console.log('Event:', event);
                    switch(event){
                        case 'GUILD_CREATE':
                            this.storage._guilds[data.id] = data;
                            if(Events.GUILD in this._events) this._events[Events.GUILD](data);
                            break;
                        case 'READY':
                            this.user = data.user;
                            this.sessionID = data.session_id;
                            for(let guild of data.guilds){
                                this.storage._guilds[guild.id] = guild;
                            }
                            if(Events.READY in this._events) this._events[Events.READY](data.user);
                            break;
                        case 'INTEGRATION_CREATE':
                            //console.log(data.token)
                            if(data.type == 2){
                                let callback = this._events[Events.SLASH_COMMAND]
                                if(typeof callback == 'function') callback(new SlashCommandInteraction(data), data)
                            }
                            else{
                                let callback = this._events[Events.BUTTON_INTERACTION]
                                if(typeof callback == 'function') callback(new MessageComponent(data), data)
                            }
                            break;
                        case 'MESSAGE_REACTION_ADD':
                            if(Events.REACTION_ADD in this._events) this._events[Events.REACTION_ADD](data);
                            break;
                        case 'MESSAGE_REACTION_REMOVE':
                            if(Events.REACTION_REMOVE in this._events) this._events[Events.REACTION_REMOVE](data);
                            break;
                        case 'MESSAGE_CREATE':
                            if(Events.MESSAGE in this._events) this._events[Events.MESSAGE](data);
                            break;

                    }
            }
        }
    }
}

module.exports = Client;