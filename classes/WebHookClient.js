const axios = require('axios')
const APIUrl = 'https://discord.com/api/v9/'

class WebHookClient{
    constructor(id, token){
        this.id = id;
        this.token = token;
    }

    send(message, tts=false, embeds=null, allowed_mentions=null){
        let requestData = {
            method: 'POST',
            url: `${APIUrl}/webhooks/${this.id}/${this.token}`
        }

        requestData.data = {
            message,
            tts,
            embeds,
            allowed_mentions,
        }
        axios(requestData)
    }
}

module.exports = WebHookClient;