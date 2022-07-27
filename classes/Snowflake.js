class Snowflake {
    #Snowflake;
    #Created;
    #InternalWorkerID;
    #InternalProcessID;
    #Increment;
    /**
     * @readonly
     */
    get Created(){return this.#Created};
    /**
     * @readonly
     */
    get InternalWorkerID(){return this.#InternalWorkerID};
    /**
     * @readonly
     */
    get InternalProcessID(){return this.#InternalProcessID};
    /**
     * @readonly
     */
    get Increment(){return this.#Increment};
    
    /**
     * 
     * @param {String|BigInt} snowflake
     */
    constructor(snowflake){
        this.#Snowflake = snowflake;
        var empt = '0000000000000000000000000000000000000000000000000000000000000000';
        snowflake = BigInt(snowflake).toString(2);
        snowflake = empt.substring(0,64-snowflake.length)+snowflake;

        this.#Created = new Date(parseInt(snowflake.substring(0,42),2)+1420070400000);
        console.log(snowflake.substring(0,42));
        this.#InternalWorkerID = snowflake.substring(42,47);
        this.#InternalProcessID = snowflake.substring(47,52);
        this.#Increment = snowflake.substring(52,64);
    }
    toString(){return this.#Snowflake;}
}

var d = new Snowflake('350729407125651457');
console.log(d);