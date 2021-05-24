import axios from 'axios'

class ApiSettingsGeneral {
    
    constructor(response){
        this.response = response;
    }

   async getContent(){
        
        let mockarooApiKey = '082538c0';
        let url = `https://my.api.mockaroo.com/api_settings_general_positivo.json?key=${mockarooApiKey}`;

     return   axios({
            method: 'get',
            url: url,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        }).then( data => {
            console.log("DATA: ", data);
            this.response = data.data;
        })
        .catch( err => {
            console.log("ERROR: ", err);
        });
    }

} 

export default ApiSettingsGeneral;
