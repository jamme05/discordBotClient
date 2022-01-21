const axios = require('axios')
axios.defaults.headers.post['Content-Type'] = 'application/json';

const APIUrl = 'https://discord.com/api/v9/'

class MessageComponent{
    id;
    raw;
    name;
    description;
    applicationId;
    component = {};
    default_permission;
    type;
    guildId;
    channelId;
    member;
    user;
    token;
    version;
    message;
    #has_sent = false;
    
    constructor(data){
        this.raw = data;
        this.id = data.id;
        console.log(this.id)
        this.messanges = {}
        this.message = data.messange;
        this.applicationId = data.application_id;
        this.name = data.data.name;
        this.description = data.data.description;
        this.default_permission = data.default_permission | true;
        this.type = data.type;
        if(data.guild_id) {
            this.guildId = data.guild_id;
            if(data.channel_id) this.channelId = data.channel_id;
            if(data.member){
                this.member = data.member;
                this.user = this.member.user;
            }
        }
        else if(data.user) this.user = data.user;

        this.component = data.data;
        
        this.token = data.token;
        this.version = data.version;
    }

    /**
     * 
     * @param {String} message - The message you want to send.
     * @param {Object} settings - The settings for the message.
     * @param {false} [settings.hidden] - If only the user that used the command can see the response.
     * @param {false} [settings.tts] - 
     * @param {object[]} [settings.embeds] - 
     * @param {object[]} [settings.allowed_mentions] - 
     * @param {object[]} [settings.components] - 
     * @param {7} [settings.type=7] - 4: Send new message, 7: Update message.
     */
    Send(message, settings={hidden, tts, embeds, allowed_mentions, components, type:7}, callback){
        if(!this.#has_sent) var url = `${APIUrl}interactions/${this.id}/${this.token}/callback`
        else var url = `${APIUrl}webhooks/${this.applicationId}/${this.token}`
        var slashResponse = {
            method: 'POST',
            url 
        }
        if(typeof settings.type != 'number') throw new TypeError('settings.type is supposed to be number, got '+typeof settings.type);
        //console.log(url)
        var data = {
            type: settings.type,
            data: {
                content: message,
            }
        }
        if(typeof settings.hidden == 'boolean') data.data.flags = 64;
        if(settings.tts == true) data.data.tts = true;
        if(Array.isArray(settings.embeds)) data.data.embeds = embeds;
        if(Array.isArray(settings.allowed_mentions)) data.data.allowed_mentions = allowed_mentions;
        if(Array.isArray(settings.components)) data.data.components = components;

        slashResponse.data = JSON.stringify(data);

        axios(slashResponse)
        .then((resp) => {
            this.messanges[data.id] = resp.data;
            if(callback) callback(resp.data);
        })
        .catch((err) => {
            console.log(err)
            console.log(JSON.stringify(err.response.data))
            //console.log(components+'\n'+message)
        })

        if(settings.type == 4)this.#has_sent = true;
    }
    
    Think(){
        var slashResponse = {
            method: 'POST',
            url: `${APIUrl}interactions/${this.id}/${this.token}/callback`,
            data: JSON.stringify({
                type: 5
            })
        }
        axios(slashResponse)
    }

    Edit(message, hidden=false, tts=false, embeds=null, allowed_mentions=null, components=null){
        var url = `${APIUrl}webhooks/${this.applicationId}/${this.token}/messages/@original`
        var slashResponse = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            url
        }
        var data = {
            content: message,
        }
        if(hidden) data.flags = 64;
        if(tts == true) data.tts = true;
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

module.exports = MessageComponent;