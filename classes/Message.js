class Message{
    client;

    id;
    channelID;
    guildID;
    author;
    content;
    timestamp;
    editedTimestamp;
    tts;
    mentionsEveryone;
    roleMentions = [];
    userMentions = [];
    channelMentions = [];
    attachments = [];
    embeds = [];
    reactions = [];
    pinned;
    type;
    activity;
    application;
    applicationID;
    messageReference;
    flags;
    referencedMessage;
    interaction;
    thread;
    components = [];
    sticker_items = [];
    stickers = [];
    
    constructor(client, data){
        this.client = client;

        this.id = data.id;
        this.channelID = data.channel_id;
        this.guildID = data.guild_id;
        this.author = data.author;
        this.author.member = data.member || null;
        this.content = data.content;
        this.timestamp = data.timestamp;
        this.editedTimestamp = data.edited_timestamp;
        this.tts = data.tts;
        this.mentionsEveryone = data.mention_everyone;
        this.roleMentions = data.role_mentions;
        this.userMentions = data.user_mentions;
        this.channelMentions = channel_mentions;
        this.attachments = data.attachments;
        this.embeds = data.embeds;
        this.reactions = data.reactions;
        this.pinned = data.pinned;
        this.type = data.type;
        this.activity = data.activity;
        this.application = data.application;
        this.applicationID = data.application_id;
        this.messageReference = data.message_reference;
        this.referencedMessage = data.referenced_message;
        this.flags = data.flags;
        this.interaction = data.interaction;
        this.thread = data.thread;
        this.components = data.components;
        this.sticker_items = data.sticker_items;
        this.stickers = data.stickers;

    }

}