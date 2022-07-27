const { default: axios } = require('axios')
const { API } = require('./Routes.js')

class WebhookClient {
    id;
    type;
    guild_id;
    channel_id;
    user;
    local_user;
    name;
    avatar;
    token;
    application_id;
    source_guild;
    source_channel;
    url;
    /**
     * 
     * @param {Object} [data] - Extra webhook data.
     * @param {String} [data.url] - The webhooks url.
     * @param {String} [data.id] - The webhooks id.
     * @param {String} [data.token] - The webhooks token. 
     */
    constructor(data){
        if(data.url === undefined && typeof data.id != 'string' && typeof data.token != 'string') throw new Error('No url, id or token specified. Can\'t find the webhook.');
        else if(data.url === undefined && typeof data.token != 'string') new Error(`Only id specified, recommend using Client.GetWebhook(${data.id}) instead if it's a bot webhook, otherwise set data.token to your token.`);
        else if(typeof data.id != 'string' && typeof data.token != 'string'){
            var url = data.url.split('/');
            data.id = url[6];
            data.token = url[7];
            console.log(data.id,data.token);
        }
    }
}


module.exports = WebhookClient;
//new WebhookClient({url:'https://discord.com/api/v9/webhooks/id/token'})