import axios from 'axios'

class RegistrationService {
    constructor(url = 'https://socialapp-api.herokuapp.com', client = axios.create()){
    this.url = url;
    this.client = client
}
    registerUser(registrationData){
        return this.client.post(this.url + "/users", registrationData)
    }   
}

export default RegistrationService