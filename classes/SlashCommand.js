const axios = require('axios')

class SlashCommand{
    id;
    name;
    description;
    applicationId;
    options = {};
    default_permission;
    
    constructor(data){
        this.id = data.id;
        this.applicationId = data.application_id;
        this.name = data.name;
        this.description = data.description;
        this.default_permission = data.default_permission | true;

        if(data.options){
            
        }
    }
}