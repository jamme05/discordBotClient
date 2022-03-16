const v = require('../config/config.json').api_version;
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
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} message_id - The message snowflake.
 * @returns {`/channels/${channel_id}/messages/${message_id}`}The url.
 */
Routes.DeleteMessage = (channel_id,message_id) => {return `/channels/${channel_id}/messages/${message_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteMessage.METHOD = DELETE;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}/messages/bulk-delete`}The url.
 */
Routes.BulkDeleteMessages = (channel_id) => {return `/channels/${channel_id}/messages/bulk-delete`};
/**
 * @type {POST}
 */
Routes.BulkDeleteMessages.METHOD = POST;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} overwrite_id - The role or user snowflake.
 * @returns {`/channels/${channel_id}/permissions/${overwrite_id}`}The url.
 */
Routes.EditChannelPermission = (channel_id, overwrite_id) => {return `/channels/${channel_id}/permissions/${overwrite_id}`};
/**
 * @type {PUT}
 */
Routes.EditChannelPermissions.METHOD = PUT;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}/invites`}The url.
 */
Routes.GetChannelnvites = (channel_id) => {return `/channels/${channel_id}/invites`};
/**
 * @type {GET}
 */
Routes.GetChannelnvites.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}/invites`}The url.
 */
Routes.CreateChannelnvite = (channel_id) => {return `/channels/${channel_id}/invites`};
/**
 * @type {POST}
 */
Routes.CreateChannelnvite.METHOD = POST;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} overwrite_id - The role or user snowflake.
 * @returns {`/channels/${channel_id}/permissions/${overwrite_id}`}The url.
 */
Routes.DeleteChannelPermission = (channel_id, overwrite_id) => {return `/channels/${channel_id}/permissions/${overwrite_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteChannelPermissions.METHOD = DELETE;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}/followers`}The url.
 */
Routes.FollowNewsChannel = (channel_id) => {return `/channels/${channel_id}/followers`};
/**
 * @type {POST}
 */
Routes.FollowNewsChannel.METHOD = POST;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}/typing`}The url.
 */
Routes.TriggerTyping = (channel_id) => {return `/channels/${channel_id}/typing`};
/**
 * @type {POST}
 */
Routes.TriggerTyping.METHOD = POST;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}/pins`}The url.
 */
Routes.GetPins = (channel_id) => {return `/channels/${channel_id}/pins`};
/**
 * @type {GET}
 */
Routes.GetPins.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} message_id - The message snowflake.
 * @returns {`/channels/${channel_id}/pins/${message_id}`}The url.
 */
Routes.PinMessage = (channel_id,message_id) => {return `/channels/${channel_id}/pins/${message_id}`};
/**
 * @type {PUT}
 */
Routes.PinMessage.METHOD = PUT;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} message_id - The message snowflake.
 * @returns {`/channels/${channel_id}/pins/${message_id}`}The url.
 */
Routes.UnpinMessage = (channel_id,message_id) => {return `/channels/${channel_id}/pins/${message_id}`};
/**
 * @type {DELETE}
 */
Routes.UnpinMessage.METHOD = DELETE;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} user_id - The user snowflake.
 * @returns {`/channels/${channel_id}/recipients/${user_id}`}The url.
 */
Routes.GroupDMAddRecipient = (channel_id,user_id) => {return `/channels/${channel_id}/recipients/${user_id}`};
/**
 * @type {PUT}
 */
Routes.GroupDMAddRecipient.METHOD = PUT;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} user_id - The user snowflake.
 * @returns {`/channels/${channel_id}/recipients/${user_id}`}The url.
 */
Routes.GroupDMRemoveRecipient = (channel_id,user_id) => {return `/channels/${channel_id}/recipients/${user_id}`};
/**
 * @type {DELETE}
 */
Routes.GroupDMRemoveRecipient.METHOD = DELETE;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @param {String} message_id - The message snowflake.
 * @returns {`/channels/${channel_id}/messages/${message_id}/threads`}The url.
 */
Routes.StartThreadFromMessage = (channel_id,message_id) => {return `/channels/${channel_id}/messages/${message_id}/threads`};
/**
 * @type {POST}
 */
Routes.StartThreadFromMessage.METHOD = POST;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}/threads`}The url.
 */
Routes.StartThread = (channel_id) => {return `/channels/${channel_id}/threads`};
/**
 * @type {POST}
 */
Routes.StartThread.METHOD = POST;
/**
 * 
 * @param {String} channel_id - The thread channel snowflake.
 * @returns {`/channels/${channel_id}/thread-members/@me`}The url.
 */
Routes.JoinThread = (channel_id) => {return `/channels/${channel_id}/thread-members/@me`};
/**
 * @type {PUT}
 */
Routes.JoinThread.METHOD = PUT;
/**
 * 
 * @param {String} channel_id - The thread channel snowflake.
 * @param {String} user_id - The user snowflake.
 * @returns {`/channels/${channel_id}/thread-members/${user_id}`}The url.
 */
Routes.AddThreadMember = (channel_id, user_id) => {return `/channels/${channel_id}/thread-members/${user_id}`};
/**
 * @type {PUT}
 */
Routes.AddThreadMember.METHOD = PUT;
/**
 * 
 * @param {String} channel_id - The thread channel snowflake.
 * @returns {`/channels/${channel_id}/thread-members/@me`}The url.
 */
Routes.LeaveThread = (channel_id) => {return `/channels/${channel_id}/thread-members/@me`};
/**
 * @type {DELETE}
 */
Routes.LeaveThread.METHOD = DELETE;
/**
 * 
 * @param {String} channel_id - The thread channel snowflake.
 * @param {String} user_id - The user snowflake.
 * @returns {`/channels/${channel_id}/thread-members/${user_id}`}The url.
 */
Routes.RemoveThreadMember = (channel_id, user_id) => {return `/channels/${channel_id}/thread-members/${user_id}`};
/**
 * @type {DELETE}
 */
Routes.RemoveThreadMember.METHOD = DELETE;
/**
 * 
 * @param {String} channel_id - The thread channel snowflake.
 * @param {String} user_id - The user snowflake.
 * @returns {`/channels/${channel_id}/thread-members/${user_id}`}The url.
 */
Routes.GetThreadMember = (channel_id, user_id) => {return `/channels/${channel_id}/thread-members/${user_id}`};
/**
 * @type {GET}
 */
Routes.GetThreadMember.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The thread channel snowflake.
 * @returns {`/channels/${channel_id}/thread-members`}The url.
 */
Routes.ListThreadMembers = (channel_id) => {return `/channels/${channel_id}/thread-members`};
/**
 * @type {GET}
 */
Routes.ListThreadMembers.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The thread channel snowflake.
 * @returns {`/channels/${channel_id}/threads/active`}The url.
 */
Routes.ListActiveThreadsFromChannel = (channel_id) => {return `/channels/${channel_id}/threads/active`};
/**
 * @type {GET}
 */
Routes.ListActiveThreadsFromChannel.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The parent channel snowflake.
 * @returns {`/channels/${channel_id}/threads/archived/public`}The url.
 */
Routes.ListPublicArchivedThreads = (channel_id) => {return `/channels/${channel_id}/threads/archived/public`};
/**
 * @type {GET}
 */
Routes.ListPublicArchivedThreads.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The parent channel snowflake.
 * @returns {`/channels/${channel_id}/threads/archived/private`}The url.
 */
Routes.ListPrivateArchivedThreads = (channel_id) => {return `/channels/${channel_id}/threads/archived/private`};
/**
 * @type {GET}
 */
Routes.ListPublicArchivedThreads.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The parent channel snowflake.
 * @returns {`/channels/${channel_id}/users/@me/threads/archived/private`}The url.
 */
Routes.ListJoinedPrivateArchivedThreads = (channel_id) => {return `/channels/${channel_id}/threads/archived/private`};
/**
 * @type {GET}
 */
Routes.ListPublicArchivedThreads.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/emojis`}The url.
 */
Routes.ListGuildEmojis = (guild_id) => {return `/guilds/${guild_id}/emojis`};
/**
 * @type {GET}
 */
Routes.ListGuildEmojis.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} emoji_id - The emoji id.
 * @returns {`/guilds/${guild_id}/emojis/${emoji_id}`}The url.
 */
Routes.GetGuildEmoji = (guild_id,emoji_id) => {return `/guilds/${guild_id}/emojis/${emoji_id}`};
/**
 * @type {GET}
 */
Routes.GetGuildEmoji.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/emojis`}The url.
 */
Routes.CreateGuildEmoji = (guild_id) => {return `/guilds/${guild_id}/emojis`};
/**
 * @type {POST}
 */
Routes.ListGuildEmojis.METHOD = POST;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} emoji_id - The emoji id.
 * @returns {`/guilds/${guild_id}/emojis/${emoji_id}`}The url.
 */
Routes.ModifyGuildEmoji = (guild_id,emoji_id) => {return `/guilds/${guild_id}/emojis/${emoji_id}`};
/**
 * @type {PATCH}
 */
Routes.ModifyGuildEmoji.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} emoji_id - The emoji id.
 * @returns {`/guilds/${guild_id}/emojis/${emoji_id}`}The url.
 */
Routes.DeleteGuildEmoji = (guild_id,emoji_id) => {return `/guilds/${guild_id}/emojis/${emoji_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteGuildEmoji.METHOD = DELETE;
/**
 * 
 * @returns {`/guilds`}The url.
 */
Routes.CreateGuild = () => {return `/guilds`};
/**
 * @type {POST}
 */
Routes.CreateGuild.METHOD = POST;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}`}The url.
 */
Routes.GetGuild = (guild_id) => {return `/guilds/${guild_id}`};
/**
 * @type {GET}
 */
Routes.GetGuild.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/preview`}The url.
 */
Routes.GetGuildPreview = (guild_id) => {return `/guilds/${guild_id}/preview`};
/**
 * @type {GET}
 */
Routes.GetGuildPreview.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}`}The url.
 */
Routes.ModifyGuild = (guild_id) => {return `/guilds/${guild_id}`};
/**
 * @type {PATCH}
 */
Routes.ModifyGuild.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}`}The url.
 */
Routes.DeleteGuild = (guild_id) => {return `/guilds/${guild_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteGuild.METHOD = DELETE;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/channels`}The url.
 */
Routes.GetGuildChannels = (guild_id) => {return `/guilds/${guild_id}/channels`};
/**
 * @type {GET}
 */
Routes.GetGuildChannels.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/channels`}The url.
 */
Routes.CreateGuildChannel = (guild_id) => {return `/guilds/${guild_id}/channels`};
/**
 * @type {POST}
 */
Routes.CreateGuildChannel.METHOD = POST;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/channels`}The url.
 */
Routes.ModifyGuildChannelPositions = (guild_id) => {return `/guilds/${guild_id}/channels`};
/**
 * @type {PATCH}
 */
Routes.ModifyGuildChannelPositions.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/threads/active`}The url.
 */
Routes.ListActiveThreads = (guild_id) => {return `/guilds/${guild_id}/threads/active`};
/**
 * @type {GET}
 */
Routes.ListActiveThreads.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} user_id - The user snowflake.
 * @returns {`/guilds/${guild_id}/members/${user_id}`}The url.
 */
Routes.GetGuildMember = (guild_id,user_id) => {return `/guilds/${guild_id}/members/${user_id}`};
/**
 * @type {GET}
 */
Routes.GetGuildMember.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/members`}The url.
 */
Routes.ListGuildMembers = (guild_id) => {return `/guilds/${guild_id}/members`};
/**
 * @type {GET}
 */
Routes.ListGuildMembers.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/members`}The url.
 */
Routes.SearchGuildMembers = (guild_id) => {return `/guilds/${guild_id}/members/search`};
/**
 * @type {GET}
 */
Routes.SearchGuildMembers.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/members`}The url.
 */
Routes.AddGuildMember = (guild_id) => {return `/guilds/${guild_id}/members`};
/**
 * @type {PUT}
 */
Routes.AddGuildMember.METHOD = PUT;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} user_id - The user snowflake.
 * @returns {`/guilds/${guild_id}/members/${user_id}`}The url.
 */
Routes.ModifyGuildMember = (guild_id,user_id) => {return `/guilds/${guild_id}/members/${user_id}`};
/**
 * @type {PATCH}
 */
Routes.ModifyGuildMember.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/members/@me`}The url.
 */
Routes.ModifyCurrentMember = (guild_id) => {return `/guilds/${guild_id}/members/@me`};
/**
 * @type {PATCH}
 */
Routes.ModifyGuildMember.METHOD = PATCH;