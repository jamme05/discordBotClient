const {default:axios} = require('axios')
axios.defaults.headers.post['Content-Type'] = 'application/json';
const Message = require('./Message.js')

const APIUrl = 'https://discord.com/api/v9/'

class SlashCommandInteraction{
    id;
    raw;
    name;
    description;
    applicationId;
    options = {};
    default_permission;
    type;
    guildId;
    channelId;
    member;
    /**
     * @type {{id:string,username:string,discriminator:string,avatar?:string,bot?:boolean,system?:boolean,banner?:string,accent_color?:number,flags?:number,premium_type?:number,public_flags?:number}}
     */
    user;
    token;
    version;
    #has_sent = false;
    
    constructor(data){
        this.raw = data;
        this.id = new Snowflake(data.id);
        //console.log(this.id)
        this.messanges = {}
        this.applicationId = data.application_id;
        this.name = data.data.name;
        this.description = data.data.description;
        this.default_permission = data.default_permission | true;
        this.type = data.data.type;
        if(data.guild_id) {
            this.guildId = data.guild_id;
            if(data.channel_id) this.channelId = data.channel_id;
            if(data.member){
                this.member = data.member;
                this.user = this.member.user;
            }
        }
        else if(data.user) this.user = data.user;

        if(data.data.options){
            for(let option of data.data.options){
                this.options[option.name] = option;
            }
        }
        this.token = data.token;
        this.version = data.version;
    }
    /**
     * 
     * @typedef {Object} Embed
     * @property {string} [title]
     * @property {'rich'|'image'|'video'|'gifv'|'article'|'link'} [type='rich']
     * @property {string} [description]
     * @property {string} [url]
     * @property {number} [timestamp]
     * @property {number} [color]
     * @property {{text:string,icon_url?:string,proxy_icon_url?:string}} [footer]
     * @property {{url:string,proxy_url?:string,height?:number,width?:number}} [image]
     * @property {{url:string,proxy_url?:string,height?:number,width?:number}} [thumbnail]
     * @property {{url:string,proxy_url?:string,height?:number,width?:number}} [video]
     * @property {{name?:string,url?:string}} [provider]
     * @property {{name:string,url?:string,icon_url?:string,proxy_icon_url?:string}} [author]
     * @property {{name:string,value:string,inline?:boolean}[]} [fields]
     */
    
    /**
     * 
     * @param {any} message - The message you want to send.
     * @param {Object} MessageData - Extra data for your message.
     * @param {false} [MessageData.hidden] - If only the user that used the command can see the response. (defaults to false)
     * @param {false} [MessageData.tts] - If your message is gonna use tts. (defaults to false)
     * @param {Embed[]} [MessageData.embeds] - The embeds for your message. (defaults to null)
     * @param {object[]} [MessageData.allowed_mentions] - The allowed mentions for your message. (defaults to null)
     * @param {object[]} [MessageData.components] - The components for your message. (defaults to null)
     */
    /*
    Send(message, {hidden,tts,embeds,allowed_mentions,components}, callback){
        if(!this.#has_sent) var url = `${APIUrl}interactions/${this.id}/${this.token}/callback`;
        else var url = `${APIUrl}webhooks/${this.applicationId}/${this.token}`;
        var slashResponse = {
            method: 'POST',
            url 
        }
        var data = {
            type: 4,
            data: {
                content: ''
            }
        }
        message = `${message}`;

        if(message.length > 2000){
            throw new Error('Message too long, can only be 2000 characters at maximum.')
        }
        data.data.content = `${message}`;
        if(hidden) data.data.flags = 64;
        if(tts == true) data.data.tts = true;
        if(embeds) data.data.embeds = embeds;
        if(allowed_mentions) data.data.allowed_mentions = allowed_mentions;
        if(components) data.data.components = components;

        slashResponse.data = JSON.stringify(data);

        axios(slashResponse)
        .then((resp) => {
            console.log(JSON.stringify(resp.response.data))
            //this.messanges[resp.data.id] = resp.data;
            if(typeof callback == 'function') callback(resp.data);
        })
        .catch((err) => {
            //console.log(err)
            console.log(JSON.stringify(err.response.data))
        })
        this.#has_sent = true;
    }
    */
    /**
     * 
     * @param {any} message - The message you want to send.
     * @param {Object} MessageData - Extra data for your message.
     * @param {false} [MessageData.hidden] - If only the user that used the command can see the response. (defaults to false)
     * @param {false} [MessageData.tts] - If your message is gonna use tts. (defaults to false)
     * @param {Embed[]} [MessageData.embeds] - The embeds for your message. (defaults to null)
     * @param {object[]} [MessageData.allowed_mentions] - The allowed mentions for your message. (defaults to null)
     * @param {object[]} [MessageData.components] - The components for your message. (defaults to null)
     * @param {number} [MessageData.type=4]
     * 
     * @returns {Message} - The message that got sent.
     */
    async Send(message, MessageData){
        if(MessageData) var {hidden,tts,embeds,allowed_mentions,components} = MessageData;
        if(!this.#has_sent) var url = `${APIUrl}interactions/${this.id}/${this.token}/callback`;
        else var url = `${APIUrl}webhooks/${this.applicationId}/${this.token}`;
        var slashResponse = {
            method: 'POST',
            url 
        }
        var data = {
            type: 4,
            data: {
                content: ''
            }
        }
        message = (message === null) ? '':`${message}`;

        if(message.length > 2000){
            throw new Error('Message too long, can only be 2000 characters at maximum.')
        }
        data.data.content = message;
        if(hidden) data.data.flags = 64;
        if(tts === true) data.data.tts = true;
        if(embeds) data.data.embeds = embeds;
        if(allowed_mentions) data.data.allowed_mentions = allowed_mentions;
        if(components) data.data.components = components;

        slashResponse.data = JSON.stringify(data);

        const messageData = await axios(slashResponse)
        this.messanges[messageData.id] = messageData;

        this.#has_sent = true;
        return messageData;
    }
    
    Think(){
        var slashResponse = {
            method: 'POST',
            url: `${APIUrl}interactions/${this.id}/${this.token}/callback`,
            data: JSON.stringify({
                type: 5
            })
        }
        axios(slashResponse);
    }

    /**
     * 
     * @param {any} message - The message you want to send.
     * @param {Object} MessageData - Extra data for your message.
     * @param {false} [MessageData.hidden] - If only the user that used the command can see the response. (defaults to false)
     * @param {false} [MessageData.tts] - If your message is gonna use tts. (defaults to false)
     * @param {Embed[]} [MessageData.embeds] - The embeds for your message. (defaults to null)
     * @param {object[]} [MessageData.allowed_mentions] - The allowed mentions for your message. (defaults to null)
     * @param {object[]} [MessageData.components] - The components for your message. (defaults to null)
     * @param {number} [MessageData.type=4]
     * 
     * @returns {Message} - The message that got sent.
     */
    Edit(message, MessageData){
        if(MessageData) var {hidden,tts,embeds,allowed_mentions,components} = MessageData;
        var url = `${APIUrl}webhooks/${this.applicationId}/${this.token}/messages/@original`
        var slashResponse = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            url
        }

        var data = {};
        message = (message === null) ? '':`${message}`;

        if(message.length > 2000){
            throw new Error('Message too long, can only be 2000 characters at maximum.')
        }
        data.content = message;
        if(hidden) data.flags = 64;
        if(tts === true) data.tts = true;
        if(embeds) data.embeds = embeds;
        if(allowed_mentions) data.allowed_mentions = allowed_mentions;
        if(components) data.components = components;

        slashResponse.data = JSON.stringify(data);

        axios(slashResponse)
        .then((resp) => {
            this.messanges[data.id] = resp.data;
        })
        .catch((err) => {
            console.log(err)
            console.log(JSON.stringify(err.response.data))
            //throw new Error('Has not sent any response yet. Try using the Send function first.')
        })
    }

    Delete(){
        var url = `${APIUrl}webhooks/${this.applicationId}/${this.token}/messages/@original`
        axios({
            method: 'DELETE',
            url
        })
        .catch((resp) => {
            console.log(JSON.stringify(resp.response.data))
        })
    }
}

module.exports = SlashCommandInteraction;