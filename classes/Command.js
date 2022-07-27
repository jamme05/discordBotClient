/**
 * @typedef {{'da'?:string,'de'?:string,'en-GB'?:string,'en-US'?:string'es-ES'?:string,'fr'?:string,'hr'?:string,'it'?:string,'lt'?:string,'hu'?:string,'nl'?:string,'no'?:string,'pl'?:string,'pt-BR'?:string,'ro'?:string,'fi'?:string,'sv-SE'?:string,'vi'?:string,'tr'?:string,'cs'?:string,'el'?:string,'bg'?:string,'ru'?:string,'uk'?:string,'hi'?:string,'th'?:string,'zh-CN'?:string,'ja'?:string,'zh-TW'?:string,'ko'?:string}|{Danish?:string,German?:string,English_UK?:string,English_US?:string,Spanish?:string,French?:string,Croatian?:string,Italian?:string,Lithuanian?:string,Hungarian?:string,Dutch?:string,Norwegian?:string,Polish?:string,Portuguese_Brazilian?:string,Romanian_Romania?:string,Finnish?:string,Swedish?:string,Vietnamese?:string,Turkish?:string,Czech?:string,Greek?:string,Bulgarian?:string,Russian?:string,Ukrainian?:string,Hindi?:string,Thai?:string,Chinese_China?:string,Japanese?:string,Chinese_Taiwan?:string,Korean?:string}} Locale
 */

/**
 * @type {{Danish:'da',German:'de',English_UK:'en-GB',English_US:'en-US',Spanish:'es-ES',French:'fr',Croatian:'hr',Italian:'it',Lithuanian:'lt',Hungarian:'hu',Dutch:'nl',Norwegian:'no',Polish:'pl',Portuguese_Brazilian:'pt-BR',Romanian_Romania:'ro',Finnish:'fi',Swedish:'sv-SE',Vietnamese:'vi',Turkish:'tr',Czech:'cs',Greek:'el',Bulgarian:'bg',Russian:'ru',Ukrainian:'uk',Hindi:'hi',Thai:'th',Chinese_China:'zh-CN',Japanese:'ja',Chinese_Taiwan:'zh-TW',Korean:'ko'}};
 */
var Locales = {danish:'da',german:'de',english_uk:'en-GB',english_us:'en-US',spanish:'es-ES',french:'fr',croatian:'hr',italian:'it',lithuanian:'lt',hungarian:'hu',dutch:'nl',norwegian:'no',polish:'pl',portuguese_brazilian:'pt-BR',romanian_romania:'ro',finnish:'fi',swedish:'sv-SE',vietnamese:'vi',turkish:'tr',czech:'cs',greek:'el',bulgarian:'bg',russian:'ru',ukrainian:'uk',hindi:'hi',thai:'th',chinese_china:'zh-CN',japanese:'ja',chinese_Taiwan:'zh-TW',korean:'ko'}

class Command {
    /**
     * @type {String}
     */
    get id(){return this.id};
    /**
     * @type {'CHAT_INPUT'|'USER'|'MESSAGE'}
     */
    get type(){return this.type};
    /**
     * @type {String}
     */
    get applicationId(){return this.applicationId};
    /**
     * @type {String}
     */
    get guildId(){return this.guildId};
    /**
     * @type {String}
     */
    get name(){return this.name};
    /**
     * @type {Locale}
     */
    get name_localizations(){return this.name_localizations};
    /**
     * @type {String}
     */
    get description(){return this.description};
    /**
     * @type {Locale}
     */
    get description_localizations(){return this.description_localizations};
    /**
     * 
     */
    get options(){return this.options};
    get default_member_permissions(){return this.default_member_permissions};
    get dm_permission(){return this.dm_permission};
    get default_permission(){return this.default_permission};
    get version(){return this.version};

    constructor(){

    }
}