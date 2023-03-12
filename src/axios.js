import axios from "axios";
 const instance = axios.create({
     baseURL: 'http://127.0.0.1:5001/handicrafts-8852a/us-central1/api' 
 });

 export default instance;