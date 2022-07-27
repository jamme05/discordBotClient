module.exports = class Embed {
    static #EmbedField = class EmbedField {
        /**@
         * 
         */
        #name;
        #value;
        /**
         * @type {boolean}
         */
        #inline;
        get name(){return this.#name}
        set name(value){
            if(typeof value != 'string') throw new TypeError('Wrong type, must be String but got '+typeof value);
            this.#name = value;
        }
        get value(){return this.#value}
        set value(value){
            if(typeof value != 'string') throw new TypeError('Wrong type, must be String but got '+typeof value);
            this.#value = value;
        }
        get inline(){return this.#inline}
        set inline(value){
            if(typeof value != 'boolean') throw new TypeError('Wrong type, must be Boolean but got '+typeof value);
            this.#inline = value;
        }
        /**
         * @param {Object} EmbedFieldObject 
         * @param {string} EmbedFieldObject.name - The name for the embedField
         * @param {string} EmbedFieldObject.value - The text in the embedField
         * @param {boolean} [EmbedFieldObject.inline=false] - If the field is inline or not. Defaults to false
         */
        constructor(EmbedFieldObject){
            if(EmbedFieldObject.name != undefined && typeof EmbedFieldObject.name != 'string') throw TypeError(`Wrong name type. Must be String, got ${typeof EmbedFieldObject.name}`);
            if(EmbedFieldObject.value != undefined && typeof EmbedFieldObject.value != 'string') throw TypeError(`Wrong value type. Must be String, got ${typeof EmbedFieldObject.value}`);
            if(EmbedFieldObject.inline != undefined && typeof EmbedFieldObject.inline != 'boolean') throw TypeError(`Wrong inline type. Must be Boolean, got ${typeof EmbedFieldObject.inline}`);
            this.#name = EmbedFieldObject.name;
            this.#value = EmbedFieldObject.value;
            this.#inline = EmbedFieldObject.inline;
        }
    
        /**
         * @param {String} name 
         */
        Setname(name){
            this.name = name;
            return this;
        }
    
        /**
         * @param {String} value 
         */
        Setvalue(value){
            this.value = value;
            return this;
        }
    
        /**
         * @param {Boolean} inline 
         */
        Setinline(inline){
            this.inline = inline;
            return this;
        }
    }
    static get EmbedField(){return this.#EmbedField}
    //EMBEDFIELD CODE ENDS HERE
    /**
     * @type {EmbedField[]}
     */
    #fields = [];

    /**
     * @type {String}
     */
    #title;
    get title(){return this.#title}
    set title(v){
        if(typeof v != 'string') throw new TypeError('Wrong type, must be String but got '+typeof v);
        this.#title = v;
    }
    /**
     * @type {'rich'|'image'|'video'|'gifv'|'article'|'link'}
     */
    #type = 'rich';
    get type(){return this.#type}
    /**
     * The type of the embed. Defaults to 'rich'.
     * 
     * Embed types are "loosely defined" and, for the most part, are not used by clients for rendering. Embed attributes power what is rendered. Embed types should be considered deprecated and might be removed in a future API version.
     * {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-types Discord Documentation}
     */
    set type(v){
        if(!['rich','image','video','gifv','article','link'].includes(v)) throw new TypeError(`Wrong type, must be one of rich,image,video,gifv,article or link but got "${v}"`);
        this.#type = v;
    }
    /**
     * @type {String}
     */
    #description;
    /**
     * The description on the embed.
     */
    get description(){return this.#description}
    /**
     * The description on the embed.
     */
    set description(v){
        if(typeof v != 'string') throw new TypeError('Wrong type, must be String but got '+typeof v);
        this.#description = v;
    }
    #url;
    get url(){return this.#url}
    set url(v){
        // Check if v is valid url.
        try {
            var url = new URL(v);
        }catch{throw new Error('Invalid url')}
        if(['https:','http:'].includes(url.protocol)) this.#url = v;
        else throw new Error('Invalid url protocol, must be "https:" or "http:"')
    }
    #timestamp;
    #color;
    #footer;
    #image;
    #thumbnail;
    #video;
    #provider;
    #author;
    /**
     * The EmbedFields in this embed.
     */
    get fields(){return this.#fields}
    #length
    constructor(){

    }

    /**
     * Inline defaults to false.
     * @param {string|{name:string,value?:string,inline?:boolean}} [name] 
     * @param {string} [value] 
     * @param {boolean} [inline] 
     */
    addField(name,value,inline){
        if(typeof name === 'object' && !Array.isArray(name)){
            value = name.value;
            inline = name.inline;
            name = name.name;
        }
        if(typeof name !== 'string') name = undefined;
        if(typeof value !== 'string') value = undefined;
        if(typeof inline !== 'boolean') inline = false;

        var e = new Embed.EmbedField({name,value,inline});
        this.#fields.push(e);
        return e;
    }
}