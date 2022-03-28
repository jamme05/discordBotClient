const v = require('../config/config.json').api_version;
var api_path = `https://discord.com/api/`;
const POST='POST',GET='GET',PATCH='PATCH',DELETE='DELETE',PUT='PUT'

/**
 * 
 * @param {Number|String} [version] - Target api version, picks latest if none specified.
 * @returns {`https://discord.com/api/${v}`}
 */
const Routes = (version) => {return api_path+version.toString()||v};
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
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} user_id - The user snowflake.
 * @param {String} role_id - The role snowflake.
 * @returns {`/guilds/${guild_id}/members/${user_id}/roles/${role_id}`}The url.
 */
Routes.AddMemberRole = (guild_id,user_id,role_id) => {return `/guilds/${guild_id}/members/${user_id}/roles/${role_id}`};
/**
 * @type {PUT}
 */
Routes.AddMemberRole.METHOD = PUT;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} user_id - The user snowflake.
 * @param {String} role_id - The role snowflake.
 * @returns {`/guilds/${guild_id}/members/${user_id}/roles/${role_id}`}The url.
 */
Routes.RemoveMemberRole = (guild_id,user_id,role_id) => {return `/guilds/${guild_id}/members/${user_id}/roles/${role_id}`};
/**
 * @type {DELETE}
 */
Routes.RemoveMemberRole.METHOD = DELETE;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} user_id - The user snowflake.
 * @returns {`/guilds/${guild_id}/members/${user_id}`}The url.
 */
Routes.RemoveGuildMember = (guild_id,user_id) => {return `/guilds/${guild_id}/members/${user_id}`};
/**
 * @type {DELETE}
 */
Routes.RemoveGuildMember.METHOD = DELETE;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/bans`}The url.
 */
Routes.GetGuildBans = (guild_id) => {return `/guilds/${guild_id}/bans`};
/**
 * @type {GET}
 */
Routes.GetGuildBans.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} user - The user snowflake.
 * @returns {`/guilds/${guild_id}/bans/${user_id}`}The url.
 */
Routes.GetGuildBan = (guild_id,user_id) => {return `/guilds/${guild_id}/bans/${user_id}`};
/**
 * @type {DELETE}
 */
Routes.GetGuildBan.METHOD = DELETE;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} user - The user snowflake.
 * @returns {`/guilds/${guild_id}/bans/${user_id}`}The url.
 */
Routes.CreateGuildBan = (guild_id,user_id) => {return `/guilds/${guild_id}/bans/${user_id}`};
/**
 * @type {PUT}
 */
Routes.CreateGuildBan.METHOD = PUT;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} user - The user snowflake.
 * @returns {`/guilds/${guild_id}/bans/${user_id}`}The url.
 */
Routes.RemoveGuildBan = (guild_id,user_id) => {return `/guilds/${guild_id}/bans/${user_id}`};
/**
 * @type {DELETE}
 */
Routes.RemoveGuildBan.METHOD = DELETE;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/roles`}The url.
 */
Routes.GetGuildRoles = (guild_id) => {return `/guilds/${guild_id}/roles`};
/**
 * @type {GET}
 */
Routes.GetGuildRoles.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/roles`}The url.
 */
Routes.CreateGuildRole = (guild_id) => {return `/guilds/${guild_id}/roles`};
/**
 * @type {POST}
 */
Routes.CreateGuildRole.METHOD = POST;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/roles`}The url.
 */
Routes.ModifyGuildRolePositions = (guild_id) => {return `/guilds/${guild_id}/roles`};
/**
 * @type {PATCH}
 */
Routes.ModifyGuildRolePositions.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} role_id - The role snowflake.
 * @returns {`/guilds/${guild_id}/roles/${role_id}`}The url.
 */
Routes.ModifyGuildRole = (guild_id,role_id) => {return `/guilds/${guild_id}/roles/${role_id}`};
/**
 * @type {PATCH}
 */
Routes.ModifyGuildRole.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} role_id - The role snowflake.
 * @returns {`/guilds/${guild_id}/roles/${role_id}`}The url.
 */
Routes.DeleteGuildRole = (guild_id,role_id) => {return `/guilds/${guild_id}/roles/${role_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteGuildRole.METHOD = DELETE;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/prune`}The url.
 */
Routes.GetGuildPruneCount = (guild_id) => {return `/guilds/${guild_id}/prune`};
/**
 * @type {GET}
 */
Routes.GetGuildPruneCount.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/prune`}The url.
 */
Routes.BeginGuildPrune = (guild_id) => {return `/guilds/${guild_id}/prune`};
/**
 * @type {POST}
 */
Routes.BeginGuildPrune.METHOD = POST;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/regions`}The url.
 */
Routes.GetGuildVoiceRegions = (guild_id) => {return `/guilds/${guild_id}/regions`};
/**
 * @type {GET}
 */
Routes.GetGuildVoiceRegions.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/invites`}The url.
 */
Routes.GetGuildInvites = (guild_id) => {return `/guilds/${guild_id}/invites`};
/**
 * @type {GET}
 */
Routes.GetGuildInvites.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/integrations`}The url.
 */
Routes.GetGuildIntegrations = (guild_id) => {return `/guilds/${guild_id}/integrations`};
/**
 * @type {GET}
 */
Routes.GetGuildIntegrations.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} integration_id - The integration snowflake.
 * @returns {`/guilds/${guild_id}/integrations`}The url.
 */
Routes.DeleteGuildIntegration = (guild_id,integration_id) => {return `/guilds/${guild_id}/integrations/${integration_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteGuildIntegration.METHOD = DELETE;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/widget`}The url.
 */
Routes.GetGuildWidgetSettings = (guild_id) => {return `/guilds/${guild_id}/widget`};
/**
 * @type {GET}
 */
Routes.GetGuildWidgetSettings.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/widget`}The url.
 */
Routes.ModifyGuildWidgetSettings = (guild_id) => {return `/guilds/${guild_id}/widget`};
/**
 * @type {PATCH}
 */
Routes.ModifyGuildWidgetSettings.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/widget.json`}The url.
 */
Routes.GetGuildWidget = (guild_id) => {return `/guilds/${guild_id}/widget.json`};
/**
 * @type {GET}
 */
Routes.GetGuildWidget.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/vanity-url`}The url.
 */
Routes.GetGuildVanityURL = (guild_id) => {return `/guilds/${guild_id}/vanity-url`};
/**
 * @type {GET}
 */
Routes.GetGuildVanityURL.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/widget.png`}The url.
 */
Routes.GetGuildWidgetImage = (guild_id) => {return `/guilds/${guild_id}/widget.png`};
/**
 * @type {GET}
 */
Routes.GetGuildWidgetImage.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/welcome-screen`}The url.
 */
Routes.GetGuildWelcomeScreen = (guild_id) => {return `/guilds/${guild_id}/welcome-screen`};
/**
 * @type {GET}
 */
Routes.GetGuildWelcomeScreen.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/welcome-screen`}The url.
 */
Routes.ModifyGuildWelcomeScreen = (guild_id) => {return `/guilds/${guild_id}/welcome-screen`};
/**
 * @type {PATCH}
 */
Routes.ModifyGuildWelcomeScreen.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/voice-states/@me`}The url.
 */
Routes.ModifyCurrentUserVoiceState = (guild_id) => {return `/guilds/${guild_id}/voice-states/@me`};
/**
 * @type {PATCH}
 */
Routes.ModifyCurrentUserVoiceState.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/voice-states/@me`}The url.
 */
Routes.ModifyUserVoiceState = (guild_id,user_id) => {return `/guilds/${guild_id}/voice-states/${user_id}`};
/**
 * @type {PATCH}
 */
Routes.ModifyUserVoiceState.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/scheduled-events`}The url.
 */
Routes.ListScheduledEventsforGuild = (guild_id) => {return `/guilds/${guild_id}/scheduled-events`};
/**
 * @type {GET}
 */
Routes.ListScheduledEventsforGuild.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/scheduled-events`}The url.
 */
Routes.CreateGuildScheduledEvent = (guild_id) => {return `/guilds/${guild_id}/scheduled-events`};
/**
 * @type {POST}
 */
Routes.CreateGuildScheduledEvent.METHOD = POST;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} event_id - The scheduled event snowflake.
 * @returns {`/guilds/${guild_id}/scheduled-events/${event_id}`}The url.
 */
Routes.GetGuildScheduledEvent = (guild_id,event_id) => {return `/guilds/${guild_id}/scheduled-events/${event_id}`};
/**
 * @type {GET}
 */
Routes.GetGuildScheduledEvent.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} event_id - The scheduled event snowflake.
 * @returns {`/guilds/${guild_id}/scheduled-events/${event_id}`}The url.
 */
Routes.ModifyGuildScheduledEvent = (guild_id,event_id) => {return `/guilds/${guild_id}/scheduled-events/${event_id}`};
/**
 * @type {PATCH}
 */
Routes.ModifyGuildScheduledEvent.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} event_id - The scheduled event snowflake.
 * @returns {`/guilds/${guild_id}/scheduled-events/${event_id}`}The url.
 */
Routes.DeleteGuildScheduledEvent = (guild_id,event_id) => {return `/guilds/${guild_id}/scheduled-events/${event_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteGuildScheduledEvent.METHOD = DELETE;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} event_id - The scheduled event snowflake.
 * @returns {`/guilds/${guild_id}/scheduled-events/${event_id}/users`}The url.
 */
Routes.GetGuildScheduledEventUsers = (guild_id,event_id) => {return `/guilds/${guild_id}/scheduled-events/${event_id}/users`};
/**
 * @type {GET}
 */
Routes.GetGuildScheduledEventUsers.METHOD = GET;
/**
 * 
 * @param {String} template_code - The template code.
 * @returns {`/guilds/templates/${template_code}`}The url.
 */
Routes.GetGuildTemplate = (template_code) => {return `/guilds/templates/${template_code}`};
/**
 * @type {GET}
 */
Routes.GetGuildTemplate.METHOD = GET;
/**
 * 
 * @param {String} template_code - The template code.
 * @returns {`/guilds/templates/${template_code}`}The url.
 */
Routes.CreateGuildfromTemplate = (template_code) => {return `/guilds/templates/${template_code}`};
/**
 * @type {POST}
 */
Routes.CreateGuildfromTemplate.METHOD = POST;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/templates`}The url.
 */
Routes.GetGuildTemplates = (guild_id) => {return `/guilds/${guild_id}/templates`};
/**
 * @type {GET}
 */
Routes.GetGuildTemplates.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/templates`}The url.
 */
Routes.CreateGuildTemplate = (guild_id) => {return `/guilds/${guild_id}/templates`};
/**
 * @type {POST}
 */
Routes.CreateGuildTemplate.METHOD = POST;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} template_code - The template code.
 * @returns {`/guilds/${guild_id}/templates/${template_code}`}The url.
 */
Routes.SyncGuildTemplate = (guild_id,template_code) => {return `/guilds/${guild_id}/templates/${template_code}`};
/**
 * @type {PUT}
 */
Routes.SyncGuildTemplate.METHOD = PUT;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} template_code - The template code.
 * @returns {`/guilds/${guild_id}/templates/${template_code}`}The url.
 */
Routes.ModifyGuildTemplate = (guild_id,template_code) => {return `/guilds/${guild_id}/templates/${template_code}`};
/**
 * @type {PATCH}
 */
Routes.ModifyGuildTemplate.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} template_code - The template code.
 * @returns {`/guilds/${guild_id}/templates/${template_code}`}The url.
 */
Routes.DeleteGuildTemplate = (guild_id,template_code) => {return `/guilds/${guild_id}/templates/${template_code}`};
/**
 * @type {DELETE}
 */
Routes.DeleteGuildTemplate.METHOD = DELETE;
/**
 * 
 * @param {String} invite_code - The invite code.
 * @returns {`/invites/${invite_code}`}The url.
 */
Routes.GetInvite = (invite_code) => {return `/invites/${invite_code}`};
/**
 * @type {GET}
 */
Routes.GetInvite.METHOD = GET;
/**
 * 
 * @param {String} invite_code - The invite code.
 * @returns {`/invites/${invite_code}`}The url.
 */
Routes.DeleteInvite = (invite_code) => {return `/invites/${invite_code}`};
/**
 * @type {DELETE}
 */
Routes.DeleteInvite.METHOD = DELETE;
/**
 * 
 * @returns {`/stage-instances`}The url.
 */
Routes.CreateStageInstance = () => {return `/stage-instances`};
/**
 * @type {POST}
 */
Routes.CreateStageInstance.METHOD = POST;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/stage-instances/${channel_id}`}The url.
 */
Routes.GetStageInstance = (channel_id) => {return `/stage-instances/${channel_id}`};
/**
 * @type {GET}
 */
Routes.GetStageInstance.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/stage-instances/${channel_id}`}The url.
 */
Routes.ModifyStageInstance = (channel_id) => {return `/stage-instances/${channel_id}`};
/**
 * @type {PATCH}
 */
Routes.ModifyStageInstance.METHOD = PATCH;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/stage-instances/${channel_id}`}The url.
 */
Routes.DeleteStageInstance = (channel_id) => {return `/stage-instances/${channel_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteStageInstance.METHOD = DELETE;
/**
 * 
 * @param {String} sticker_id - The sticker snowflake.
 * @returns {`/stickers/${sticker_id}`}The url.
 */
Routes.GetSticker = (sticker_id) => {return `/stickers/${sticker_id}`};
/**
 * @type {GET}
 */
Routes.GetSticker.METHOD = GET;
/**
 * 
 * @returns {`/sticker-packs`}The url.
 */
Routes.ListNitroStickerPacks = () => {return `/sticker-packs`};
/**
 * @type {GET}
 */
Routes.ListNitroStickerPacks.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/stickers`}The url.
 */
Routes.GetGuildStickers = (guild_id) => {return `/guilds/${guild_id}/stickers`};
/**
 * @type {GET}
 */
Routes.GetGuildStickers.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} sticker_id - The sticker snowflake.
 * @returns {`/guilds/${guild_id}/stickers/${sticker_id}`}The url.
 */
Routes.GetGuildSticker = (guild_id,sticker_id) => {return `/guilds/${guild_id}/stickers/${sticker_id}`};
/**
 * @type {GET}
 */
Routes.GetGuildSticker.METHOD = GET;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/guilds/${guild_id}/stickers`}The url.
 */
Routes.CreateGuildSticker = (guild_id) => {return `/guilds/${guild_id}/stickers`};
/**
 * @type {POST}
 */
Routes.CreateGuildSticker.METHOD = POST;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} sticker_id - The sticker snowflake.
 * @returns {`/guilds/${guild_id}/stickers/${sticker_id}`}The url.
 */
Routes.ModifyGuildSticker = (guild_id,sticker_id) => {return `/guilds/${guild_id}/stickers/${sticker_id}`};
/**
 * @type {PATCH}
 */
Routes.ModifyGuildSticker.METHOD = PATCH;
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} sticker_id - The sticker snowflake.
 * @returns {`/guilds/${guild_id}/stickers/${sticker_id}`}The url.
 */
Routes.DeleteGuildSticker = (guild_id,sticker_id) => {return `/guilds/${guild_id}/stickers/${sticker_id}`};
/**
 * @type {PATCH}
 */
Routes.DeleteGuildSticker.METHOD = PATCH;
/**
 * 
 * @returns {`/users/@me`}The url.
 */
Routes.GetCurrentUser = () => {return `/users/@me`};
/**
 * @type {GET}
 */
Routes.GetCurrentUser.METHOD = GET;
/**
 * 
 * @param {String} user_id - The users snowflake.
 * @returns {`/users/${user_id}`}The url.
 */
Routes.GetUser = (user_id) => {return `/users/${user_id}`};
/**
 * @type {GET}
 */
Routes.GetUser.METHOD = GET;
/**
 * 
 * @returns {`/users/@me`}The url.
 */
Routes.ModifyCurrentUser = () => {return `/users/@me`};
/**
 * @type {PATCH}
 */
Routes.ModifyCurrentUser.METHOD = PATCH;
/**
 * 
 * @returns {`/users/@me/guilds`}The url.
 */
Routes.GetCurrentUserGuilds = () => {return `/users/@me/guilds`};
/**
 * @type {GET}
 */
Routes.GetCurrentUserGuilds.METHOD = GET;
/**
 * 
 * @returns {`/users/@me/guilds/${guild_id}/members`}The url.
 */
Routes.GetCurrentUserGuildMembers = (guild_id) => {return `/users/@me/guilds/${guild_id}/members`};
/**
 * @type {GET}
 */
Routes.GetCurrentUserGuildMembers.METHOD = GET;
/**
 * 
 * @returns {`/users/@me/guilds/${guild_id}`}The url.
 */
Routes.LeaveGuild = (guild_id) => {return `/users/@me/guilds/${guild_id}`};
/**
 * @type {DELETE}
 */
Routes.LeaveGuild.METHOD = DELETE;
/**
 * 
 * @returns {`/users/@me/channels`}The url.
 */
Routes.CreateDM = () => {return `/users/@me/channels`};
/**
 * @type {POST}
 */
Routes.CreateDM.METHOD = POST;
/**
 * 
 * @returns {`/users/@me/channels`}The url.
 */
Routes.CreateGroupDM = () => {return `/users/@me/channels`};
/**
 * @type {POST}
 */
Routes.CreateDM.METHOD = POST;
/**
 * 
 * @returns {`/users/@me/connections`}The url.
 */
Routes.GetUserConnections = () => {return `/users/@me/connections`};
/**
 * @type {GET}
 */
Routes.GetCurrentUser.METHOD = GET;
/**
 * 
 * @returns {`/voice/regions`}The url.
 */
Routes.ListVoiceRegions = () => {return `/voice/regions`};
/**
 * @type {GET}
 */
Routes.ListVoiceRegions.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}/webhooks`}The url.
 */
Routes.CreateWebhook = (channel_id) => {return `/channels/${channel_id}/webhooks`};
/**
 * @type {POST}
 */
Routes.CreateWebhook.METHOD = POST;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/channels/${channel_id}/webhooks`}The url.
 */
Routes.GetChannelWebhooks = (channel_id) => {return `/channels/${channel_id}/webhooks`};
/**
 * @type {GET}
 */
Routes.GetChannelWebhooks.METHOD = GET;
/**
 * 
 * @param {String} channel_id - The channel snowflake.
 * @returns {`/guilds/${guild_id}/webhooks`}The url.
 */
Routes.GetGuildWebhooks = (guild_id) => {return `/guilds/${guild_id}/webhooks`};
/**
 * @type {GET}
 */
Routes.GetGuildWebhooks.METHOD = GET;
/**
 * 
 * @param {String} webhook_id - The webhook snowflake.
 * @returns {`/webhooks/${webhook_id}`}The url.
 */
Routes.GetWebhook = (webhook_id) => {return `/webhooks/${webhook_id}`};
/**
 * @type {GET}
 */
Routes.GetWebhook.METHOD = GET;
/**
 * 
 * @param {String} webhook_id - The webhook snowflake.
 * @param {String} webhook_token - The webhook token.
 * @returns {`/webhooks/${webhook_id}/${webhook_token}`}The url.
 */
Routes.GetWebhookwithToken = (webhook_id,webhook_token) => {return `/webhooks/${webhook_id}/${webhook_token}`};
/**
 * @type {GET}
 */
Routes.GetWebhookwithToken.METHOD = GET;
/**
 * 
 * @param {String} webhook_id - The webhook snowflake.
 * @returns {`/webhooks/${webhook_id}`}The url.
 */
Routes.ModifyWebhook = (webhook_id) => {return `/webhooks/${webhook_id}`};
/**
 * @type {PATCH}
 */
Routes.ModifyWebhook.METHOD = PATCH;
/**
 * 
 * @param {String} webhook_id - The webhook snowflake.
 * @param {String} webhook_token - The webhook token.
 * @returns {`/webhooks/${webhook_id}/${webhook_token}`}The url.
 */
Routes.ModifyWebhookwithToken = (webhook_id,webhook_token) => {return `/webhooks/${webhook_id}/${webhook_token}`};
/**
 * @type {PATCH}
 */
Routes.ModifyWebhookwithToken.METHOD = PATCH;
/**
 * 
 * @param {String} webhook_id - The webhook snowflake.
 * @returns {`/webhooks/${webhook_id}`}The url.
 */
Routes.DeleteWebhook = (webhook_id) => {return `/webhooks/${webhook_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteWebhook.METHOD = DELETE;
/**
 * 
 * @param {String} webhook_id - The webhook snowflake.
 * @param {String} webhook_token - The webhook token.
 * @returns {`/webhooks/${webhook_id}/${webhook_token}`}The url.
 */
Routes.DeleteWebhookwithToken = (webhook_id,webhook_token) => {return `/webhooks/${webhook_id}/${webhook_token}`};
/**
 * @type {PATCH}
 */
Routes.DeleteWebhookwithToken.METHOD = PATCH;
/**
 * 
 * @param {String} webhook_id - The webhook snowflake.
 * @param {String} webhook_token - The webhook token.
 * @returns {`/webhooks/${webhook_id}/${webhook_token}`}The url.
 */
Routes.ExecuteWebhook = (webhook_id,webhook_token) => {return `/webhooks/${webhook_id}/${webhook_token}`};
/**
 * @type {POST}
 */
Routes.ExecuteWebhook.METHOD = POST;
/**
 * 
 * @param {String} webhook_id - The webhook snowflake.
 * @param {String} webhook_token - The webhook token.
 * @returns {`/webhooks/${webhook_id}/${webhook_token}/slack`}The url.
 */
Routes.ExecuteSlackWebhook = (webhook_id,webhook_token) => {return `/webhooks/${webhook_id}/${webhook_token}/slack`};
/**
 * @type {POST}
 */
Routes.ExecuteWebhook.METHOD = POST;
/**
 * 
 * @param {String} webhook_id - The webhook snowflake.
 * @param {String} webhook_token - The webhook token.
 * @returns {`/webhooks/${webhook_id}/${webhook_token}/github`}The url.
 */
Routes.ExecuteGithubWebhook = (webhook_id,webhook_token) => {return `/webhooks/${webhook_id}/${webhook_token}/github`};
/**
 * @type {POST}
 */
Routes.ExecuteWebhook.METHOD = POST;
/**
 * 
 * @param {String} webhook_id - The webhook snowflake.
 * @param {String} webhook_token - The webhook token.
 * @param {String} message_id - The message snowflake.
 * @returns {`/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`}The url.
 */
Routes.GetWebhookMessage = (webhook_id,webhook_token,message_id) => {return `/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`};
/**
 * @type {GET}
 */
Routes.GetWebhookMessage.METHOD = GET;
/**
 * 
 * @param {String} webhook_id - The webhook snowflake.
 * @param {String} webhook_token - The webhook token.
 * @param {String} message_id - The message snowflake.
 * @returns {`/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`}The url.
 */
Routes.EditWebhookMessage = (webhook_id,webhook_token,message_id) => {return `/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`};
/**
 * @type {PATCH}
 */
Routes.EditWebhookMessage.METHOD = PATCH;
/**
 * 
 * @param {String} webhook_id - The webhook snowflake.
 * @param {String} webhook_token - The webhook token.
 * @param {String} message_id - The message snowflake.
 * @returns {`/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`}The url.
 */
Routes.DeleteWebhookMessage = (webhook_id,webhook_token,message_id) => {return `/webhooks/${webhook_id}/${webhook_token}/messages/${message_id}`};
/**
 * @type {PATCH}
 */
Routes.DeleteWebhookMessage.METHOD = PATCH;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @returns {`/applications/${application_id}/commands`}The url.
 */
Routes.GetGlobalApplicationCommands = (application_id) => {return `/applications/${application_id}/commands`};
/**
 * @type {GET}
 */
Routes.GetGlobalApplicationCommands.METHOD = GET;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @returns {`/applications/${application_id}/commands`}The url.
 */
Routes.CreateGlobalApplicationCommand = (application_id) => {return `/applications/${application_id}/commands`};
/**
 * @type {POST}
 */
Routes.CreateGlobalApplicationCommand.METHOD = POST;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} command_id - The command snowflake.
 * @returns {`/applications/${application_id}/commands/${command_id}`}The url.
 */
Routes.GetGlobalApplicationCommand = (application_id,command_id) => {return `/applications/${application_id}/commands/${command_id}`};
/**
 * @type {GET}
 */
Routes.GetGlobalApplicationCommand.METHOD = GET;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} command_id - The command snowflake.
 * @returns {`/applications/${application_id}/commands/${command_id}`}The url.
 */
Routes.EditGlobalApplicationCommand = (application_id,command_id) => {return `/applications/${application_id}/commands/${command_id}`};
/**
 * @type {PATCH}
 */
Routes.EditGlobalApplicationCommand.METHOD = PATCH;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} command_id - The command snowflake.
 * @returns {`/applications/${application_id}/commands/${command_id}`}The url.
 */
Routes.DeleteGlobalApplicationCommand = (application_id,command_id) => {return `/applications/${application_id}/commands/${command_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteGlobalApplicationCommand.METHOD = DELETE;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @returns {`/applications/${application_id}/commands`}The url.
 */
Routes.BulkOverwriteGlobalApplicationCommand = (application_id) => {return `/applications/${application_id}/commands`};
/**
 * @type {PUT}
 */
Routes.BulkOverwriteGlobalApplicationCommand.METHOD = PUT;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/applications/${application_id}/guilds/${guild_id}/commands`}The url.
 */
Routes.GetGuildApplicationCommands = (application_id,guild_id) => {return `/applications/${application_id}/guilds/${guild_id}/commands`};
/**
 * @type {GET}
 */
Routes.GetGuildApplicationCommands.METHOD = GET;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/applications/${application_id}/guilds/${guild_id}/commands`}The url.
 */
Routes.CreateGuildApplicationCommand = (application_id,guild_id) => {return `/applications/${application_id}/guilds/${guild_id}/commands`};
/**
 * @type {POST}
 */
Routes.CreateGuildApplicationCommand.METHOD = POST;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} guild_id - The guild snowflake.
 * @param {String} - The command snowflake.
 * @returns {`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`}The url.
 */
Routes.GetGuildApplicationCommand = (application_id,guild_id,command_id) => {return `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`};
/**
 * @type {GET}
 */
Routes.GetGuildApplicationCommand.METHOD = GET;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} guild_id - The guild snowflake.
 * @param {String} - The command snowflake.
 * @returns {`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`}The url.
 */
Routes.EditGuildApplicationCommand = (application_id,guild_id,command_id) => {return `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`};
/**
 * @type {PATCH}
 */
Routes.EditGuildApplicationCommand.METHOD = PATCH;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} guild_id - The guild snowflake.
 * @param {String} - The command snowflake.
 * @returns {`/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`}The url.
 */
Routes.DeleteGuildApplicationCommand = (application_id,guild_id,command_id) => {return `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteGuildApplicationCommand.METHOD = DELETE;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/applications/${application_id}/guilds/${guild_id}/commands`}The url.
 */
Routes.BulkOverwriteGuildApplicationCommands = (application_id,guild_id) => {return `/applications/${application_id}/guilds/${guild_id}/commands`};
/**
 * @type {PUT}
 */
Routes.BulkOverwriteGuildApplicationCommands.METHOD = PUT;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/applications/${application_id}/guilds/${guild_id}/commands`}The url.
 */
Routes.GetGuildApplicationCommandPermissions = (application_id,guild_id) => {return `/applications/${application_id}/guilds/${guild_id}/commands/permissions`};
/**
 * @type {GET}
 */
Routes.GetGuildApplicationCommandPermissions.METHOD = GET;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} guild_id - The guild snowflake.
 * @param {String} command_id - The command snowflake.
 * @returns {`/applications/${application_id}/guilds/${guild_id}/commands`}The url.
 */
Routes.GetApplicationCommandPermissions = (application_id,guild_id,command_id) => {return `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}/permissions`};
/**
 * @type {GET}
 */
Routes.GetGuildApplicationCommandPermissions.METHOD = GET;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} guild_id - The guild snowflake.
 * @param {String} command_id - The command snowflake.
 * @returns {`/applications/${application_id}/guilds/${guild_id}/commands`}The url.
 */
Routes.EditApplicationCommandPermissions = (application_id,guild_id,command_id) => {return `/applications/${application_id}/guilds/${guild_id}/commands/${command_id}/permissions`};
/**
 * @type {PUT}
 */
Routes.EditGuildApplicationCommandPermissions.METHOD = PUT;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} guild_id - The guild snowflake.
 * @returns {`/applications/${application_id}/guilds/${guild_id}/commands`}The url.
 */
Routes.BatchEditGuildApplicationCommandPermissions = (application_id,guild_id) => {return `/applications/${application_id}/guilds/${guild_id}/commands/permissions`};
/**
 * @type {PUT}
 */
Routes.BatchEditGuildApplicationCommandPermissions.METHOD = PUT;
/**
 * 
 * @param {String} interaction_id - The interaction snowflake.
 * @param {String} interaction_token - The interaction token.
 * @returns {`/interactions/${interaction_id}/${interaction_token}/callback`}The url.
 */
Routes.CreateInteractionResponse = (interaction_id,interaction_token) => {return `/interactions/${interaction_id}/${interaction_token}/callback`};
/**
 * @type {POST}
 */
Routes.CreateInteractionResponse.METHOD = POST;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} interaction_token - The interaction token.
 * @returns {`/webhooks/${application_id}/${interaction_token}/messages/@original`}The url.
 */
Routes.GetOriginalInteractionResponse = (application_id,interaction_token) => {return `/webhooks/${application_id}/${interaction_token}/messages/@original`};
/**
 * @type {GET}
 */
Routes.GetOriginalInteractionResponse.METHOD = GET;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} interaction_token - The interaction token.
 * @returns {`/webhooks/${application_id}/${interaction_token}/messages/@original`}The url.
 */
Routes.EditOriginalInteractionResponse = (application_id,interaction_token) => {return `/webhooks/${application_id}/${interaction_token}/messages/@original`};
/**
 * @type {PATCH}
 */
Routes.EditOriginalInteractionResponse.METHOD = PATCH;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} interaction_token - The interaction token.
 * @returns {`/webhooks/${application_id}/${interaction_token}/messages/@original`}The url.
 */
Routes.DeleteOriginalInteractionResponse = (application_id,interaction_token) => {return `/webhooks/${application_id}/${interaction_token}/messages/@original`};
/**
 * @type {DELETE}
 */
Routes.DeleteOriginalInteractionResponse.METHOD = DELETE;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} interaction_token - The interaction token.
 * @returns {`/webhooks/${application_id}/${interaction_token}`}The url.
 */
Routes.CreateFollowupMessage = (application_id,interaction_token) => {return `/webhooks/${application_id}/${interaction_token}`};
/**
 * @type {POST}
 */
Routes.DeleteOriginalInteractionResponse.METHOD = POST;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} interaction_token - The interaction token.
 * @param {String} message_id - The followup message snowflake.
 * @returns {`/webhooks/${application_id}/${interaction_token}/messages/@original`}The url.
 */
Routes.GetFollowupMessage = (application_id,interaction_token,message_id) => {return `/webhooks/${application_id}/${interaction_token}/messages/${message_id}`};
/**
 * @type {GET}
 */
Routes.GetFollowupMessage.METHOD = GET;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} interaction_token - The interaction token.
 * @param {String} message_id - The followup message snowflake.
 * @returns {`/webhooks/${application_id}/${interaction_token}/messages/@original`}The url.
 */
Routes.EditFollowupMessage = (application_id,interaction_token,message_id) => {return `/webhooks/${application_id}/${interaction_token}/messages/${message_id}`};
/**
 * @type {PATCH}
 */
Routes.EditFollowupMessage.METHOD = PATCH;
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} interaction_token - The interaction token.
 * @param {String} message_id - The followup message snowflake.
 * @returns {`/webhooks/${application_id}/${interaction_token}/messages/@original`}The url.
 */
Routes.DeleteFollowupMessage = (application_id,interaction_token,message_id) => {return `/webhooks/${application_id}/${interaction_token}/messages/${message_id}`};
/**
 * @type {DELETE}
 */
Routes.DeleteFollowupMessage.METHOD = DELETE;
/**
 * @returns {'https://cdn.discordapp.com/'}
 */
var CDN = () => {return 'https://cdn.discordapp.com/'}
/**
 * 
 * @param {String} emoji_id - The emoji id.
 * @param {'png'|'jpeg'|'webp'|'gif'} type - The image type.
 * @returns {`emojis/${emoji_id}.${type}`}
 */
CDN.CustomEmoji = (emoji_id,type) => {return `emojis/${emoji_id}.${type||'png'}`}
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} guild_icon - The icon hash.
 * @param {'png'|'jpeg'|'webp'|'gif'} type - The image type.
 * @returns {icons/${guild_id}/${guild_icon}.${type||'png'}`}
 */
CDN.GuildIcon = (guild_id,guild_icon,type) => {return `icons/${guild_id}/${guild_icon}.${type||'png'}`}
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} guild_splash - The spash hash.
 * @param {'png'|'jpeg'|'webp'} type - The image type.
 * @returns {`splashes/${guild_id}/${guild_splash}.${type||'png'}`}
 */
CDN.GuildSplash = (guild_id,guild_splash,type) => {return `splashes/${guild_id}/${guild_splash}.${type||'png'}`}
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} guild_discovery_splash - The discovery splash hash.
 * @param {'png'|'jpeg'|'webp'} type - The image type.
 * @returns {`splashes/${guild_id}/${guild_discovery_splash}.${type||'png'}`}
 */
CDN.GuildDiscoverySplash = (guild_id,guild_discovery_splash,type) => {return `splashes/${guild_id}/${guild_discovery_splash}.${type||'png'}`}
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} guild_banner - The banner hash.
 * @param {'png'|'jpeg'|'webp'} type - The image type.
 * @returns {`banners/${guild_id}/${guild_banner}.${type||'png'}`}
 */
CDN.GuildBanner = (guild_id,guild_banner,type) => {return `banners/${guild_id}/${guild_banner}.${type||'png'}`}
/**
 * 
 * @param {String} user_id - The user snowflake.
 * @param {String} user_banner - The banner hash.
 * @param {'png'|'jpeg'|'webp'|'gif'} type - The image type.
 * @returns {`banners/${user_id}/${user_banner}.${type||'png'}`}
 */
CDN.UserBanner = (user_id,user_banner,type) => {return `banners/${user_id}/${user_banner}.${type||'png'}`}
/**
 * 
 * @param {String} user_discriminator - The user discriminator.
 * @returns {`embed/avatars/${user_discriminator}.png`}
 */
CDN.DefaultUserAvatar = (user_discriminator) => {return `embed/avatars/${user_discriminator}.png`}
/**
 * 
 * @param {String} user_id - The user snowflake.
 * @param {String} user_avatar - The avatar hash.
 * @param {'png'|'jpeg'|'webp'|'gif'} type - The image type.
 * @returns {`avatars/${user_id}/${user_avatar}.${type||'png'}`}
 */
CDN.UserAvatar = (user_id,user_avatar,type) => {return `avatars/${user_id}/${user_avatar}.${type||'png'}`}
/**
 * 
 * @param {String} guild_id - The guild snowflake.
 * @param {String} user_id - The user snowflake.
 * @param {String} user_avatar - The avatar hash.
 * @param {'png'|'jpeg'|'webp'|'gif'} type - The image type.
 * @returns {`guilds/${guild_id}/users/${user_id}/avatars/${member_avatar}.${type||'png'}`}
 */
CDN.GuildMemberAvatar = (guild_id,user_id,member_avatar,type) => {return `guilds/${guild_id}/users/${user_id}/avatars/${member_avatar}.${type||'png'}`}
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} icon - The icon hash.
 * @param {'png'|'jpeg'|'webp'} type - The image type.
 * @returns {`app-icons/${application_id}/${icon}.${type||'png'}`}
 */
CDN.ApplicationIcon = (application_id,icon,type) => {return `app-icons/${application_id}/${icon}.${type||'png'}`}
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} cover - The cover hash.
 * @param {'png'|'jpeg'|'webp'} type - The image type.
 * @returns {`app-icons/${application_id}/${cover}.${type||'png'}`}
 */
CDN.ApplicationCover = (application_id,cover,type) => {return `app-icons/${application_id}/${cover}.${type||'png'}`}
/**
 * 
 * @param {String} application_id - The apllication snowflake.
 * @param {String} asset_id - The asset id.
 * @param {'png'|'jpeg'|'webp'} type - The image type.
 * @returns {`app-assets/${application_id}/${asset_id}.${type||'png'}`}
 */
CDN.ApplicationAsset = (application_id,asset_id,type) => {return `app-assets/${application_id}/${asset_id}.${type||'png'}`}
/**
 * 
 * @param {String} sticker_pack_banner_asset_id - The sticker pack banner snowflake.
 * @param {'png'|'jpeg'|'webp'} type - The image type.
 * @returns {`app-assets/710982414301790216/store/${sticker_pack_banner_asset_id}.${type||'png'}`}
 */
CDN.StickerPackBanner = (sticker_pack_banner_asset_id,type) => {return `app-assets/710982414301790216/store/${sticker_pack_banner_asset_id}.${type||'png'}`}
/**
 * 
 * @param {String} application_id - The application snowflake.
 * @param {String} achievement_id - The achievement id.
 * @param {String} icon - The icon hash.
 * @param {'png'|'jpeg'|'webp'} type - The image type.
 * @returns {`app-assets/${application_id}/achievements/${achievement_id}/icons/${icon}.${type||'png'}`}
 */
CDN.AchievementIcon = (application_id,achievement_id,icon,type) => {return `app-assets/${application_id}/achievements/${achievement_id}/icons/${icon}.${type||'png'}`}
/**
 * 
 * @param {String} team_id - The team snowflake.
 * @param {String} icon - The icon hash.
 * @param {'png'|'jpeg'|'webp'} type - The image type.
 * @returns {`team-icons/${team_id}/${icon}.${type||'png'}`}
 */
CDN.TeamIcon = (team_id,icon,type) => {return `team-icons/${team_id}/${icon}.${type||'png'}`}
/**
 * 
 * @param {String} sticker_id - The sticker snowflake.
 * @param {'png'|'lottie'} type - The image type.
 * @returns {`stickers/${sticker_id}.${type||'png'}`}
 */
CDN.Sticker = (sticker_id,type) => {return `stickers/${sticker_id}.${type||'png'}`}
/**
 * 
 * @param {String} role_id - The role snowflake.
 * @param {String} role_icon - The role icon hash.
 * @param {'png'|'jpeg'|'webp'} type - The image type.
 * @returns {`role-icons/${role_id}/${role_icon}.${type||'png'}`}
 */
CDN.RoleIcon = (role_id,role_icon,type) => {return `role-icons/${role_id}/${role_icon}.${type||'png'}`}
/**
 * 
 * @param {String} scheduled_event_id - The event snowflake.
 * @param {String} scheduled_event_cover_image - The event cover hash.
 * @param {'png'|'jpeg'|'webp'} type - The image type.
 * @returns {`guild-events/${scheduled_event_id}/${scheduled_event_cover_image}.${type||'png'}`}
 */
CDN.GuildScheduledEventCover = (scheduled_event_id,scheduled_event_cover_image,type) => {return `guild-events/${scheduled_event_id}/${scheduled_event_cover_image}.${type||'png'}`}

module.exports = {API:Routes,CDN};