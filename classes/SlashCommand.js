const axios = require('axios')

const APIUrl = 'https://discord.com/api/v9/'

class SlashCommandInteraction{
    id;
    name;
    description;
    applicationId;
    options = {};
    default_permission;
    type;
    guildId;
    channelId;
    member;
    user;
    token;
    version;
    
    constructor(data){
        this.id = data.id;
        this.applicationId = data.application_id;
        this.name = data.data.name;
        this.description = data.data.description;
        this.default_permission = data.default_permission | true;
        this.type = data.type;
        if(data.guild_id) {
            this.guildId = data.guild_id;
            if(data.channel_id) this.channelId = data.channel_id;
            if(data.member) this.member = data.member;
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
     * @param {String | object} message - The message you want to send.
     * @param {boolean} hidden - If only the user that used the command can see the response.
     * @param {boolean} tts - 
     * @param {object[]} embeds 
     * @param {object[]} allowed_mentions 
     */
    Send(message, hidden=false, tts=false, embeds=null, allowed_mentions=null){
        var slashResponse = {
            method: 'POST',
            url: `${APIUrl}interactions/${this.id}/${this.token}/callback`
        }
        var data = {
            type: 4,
            data: {
                content: message,
            }
        }
        if(hidden) data.data.flags = 64;
        if(tts == true) data.data.tts = true;
        if(embeds) data.data.embeds = embeds;
        if(allowed_mentions) data.data.allowed_mentions;

        slashResponse.data = JSON.stringify(data);

        axios(slashResponse)
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
}

module.exports = SlashCommandInteraction;