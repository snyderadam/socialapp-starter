import axios from "axios";


class Likes {
    constructor (url="https://socialapp-api.herokuapp.com/",client = axios.create()){
        this.url = url;
        this.client = client;
    }
    getPreviousMessage(){
        return this.client.get(this.url + "/messages<=20")
        .then (response => {
            if (this.client.response && ! response.error)
            return response.data.messages
        })

    }

    getLikesFunction(){
        return this.client.post(this.url + "/likes");
    }
    getToken(){
        let login = JSON.parse(localStorage.getItem("login"))
        let {token} = login.result
        return token
         
        
    }
    postLikes(messageId){
        let requestId = {messageId}
    }
        
    
}

export default Likes