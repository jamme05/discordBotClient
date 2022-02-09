const v = require('./config/config.json');
var api_path = `https://discord.com/api/${v}`
const POST='POST',GET='GET',PATCH='PATCH',DELETE='DELETE',PUT='PUT'

/**
 * 
 * @returns {`https://discord.com/api/${version}`}
 */
const Routes = () => {return api_path}

/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/audit-logs`}The url.
 */
Routes.GetAuditLogs = (guild_id) => {return `/guilds/${guild_id}/audit-logs`};
/**
 * @type {GET}
 */
Routes.GetAuditLogs.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}`}The url.
 */
Routes.GetChannel = (channel_id) => {return `/channels/${channel_id}`};
/**
 * @type {GET}
 */
Routes.GetChannel.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}`}The url.
 */
Routes.ModifyChannel = (channel_id) => {return `/channels/${channel_id}`};
/**
 * @type {PATCH}
 */
Routes.ModifyChannel.METHOD = PATCH;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}`}The url.
 */
Routes.DeleteChannel = (channel_id) => {return `/channels/${channel_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteChannel.METHOD = DELETE;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}/messages`}sThe url.
 */
Routes.GetChannelMessages = (channel_id) => {return `/channels/${channel_id}/messages`};
/**
 * @type {GET}
 */
Routes.GetChannelMessages.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}`}The url.
 */
Routes.CreateMessage = (channel_id) => {return `/channels/${channel_id}/messages`};
/**
 * @type {POST}
 */
Routes.CreateMessage.METHOD = POST;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} message_id - The message snowflake.
 * @returns {`/channels/${channel_id}/messages/${message_id}/crosspost`}The url.
*/
Routes.CrosspostMessage = (channel_id,message_id) => {return `/channels/${channel_id}/messages/${message_id}/crosspost`};
/**
 * @type {POST}
 */
Routes.CrosspostMessage.METHOD = POST;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} message_id - The message snowflake.
 * @param {String} emoji -  The emoji.
 * @returns {`/channels/${channel_id}/messages/${message_id}/reactions/${emoji}/@me`}The url.
*/
Routes.CreateReaction = (channel_id,message_id,emoji) => {return `/channels/${channel_id}/messages/${message_id}/reactions/${emoji}/@me`};
/**
 * @type {PUT}
 */
Routes.CreateReaction.METHOD = PUT;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} message_id - The message snowflake.
 * @param {String} emoji -  The emoji.
 * @returns {`/channels/${channel_id}/messages/${message_id}/reactions/${emoji}/@me`}The url.
*/
Routes.DeleteOwnReaction = (channel_id,message_id,emoji) => {return `/channels/${channel_id}/messages/${message_id}/reactions/${emoji}/@me`};
/**
 * @type {DELETE}
 */
Routes.DeleteOwnReaction.METHOD = DELETE;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} message_id - The message snowflake.
 * @param {String} emoji -  The emoji.
 * @param {String} user_id - The users snowflake.
 * @returns {`/channels/${channel_id}/messages/${message_id}/reactions/${emoji}/${user_id}`}The url.
*/
Routes.DeleteUserReaction = (channel_id,message_id,emoji) => {return `/channels/${channel_id}/messages/${message_id}/reactions/${emoji}/${user_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteUserReaction.METHOD = DELETE;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} message_id - The message snowflake.
 * @param {String} emoji -  The emoji.
 * @returns {`/channels/${channel_id}/messages/${message_id}/reactions/${emoji}/`}The url.
*/
Routes.GetReactions = (channel_id,message_id,emoji) => {return `/channels/${channel_id}/messages/${message_id}/reactions/${emoji}`};
/**
 * @type {GET}
 */
Routes.GetReactions.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} message_id - The message snowflake.
 * @returns {`/channels/${channel_id}/messages/${message_id}/reactions/`}The url.
 */
Routes.DeleteAllReactions = (channel_id,message_id) => {return `/channels/${channel_id}/messages/${message_id}/reactions`};
/**
 * @type {DELETE}
 */
Routes.DeleteAllReactions.METHOD = DELETE;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} message_id - The message snowflake.
 * @returns {`/channels/${channel_id}/messages/${message_id}/reactions/`}The url.
 */
Routes.DeleteReactionsForEmoji = (channel_id,message_id) => {return `/channels/${channel_id}/messages/${message_id}/reactions`};
/**
 * @type {DELETE}
 */
Routes.DeleteReactionsForEmoji.METHOD = DELETE;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} message_id - The message snowflake.
 * @returns {`/channels/${channel_id}/messages/${message_id}`}The url.
 */
Routes.EditMessage = (channel_id,message_id) => {return `/channels/${channel_id}/messages/${message_id}`};
/**
 * @type {PATCH}
 */
Routes.EditMessage.METHOD = PATCH;