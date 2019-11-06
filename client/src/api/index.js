import axios from './axios';

export default function handleLogin(username,password){
   return  axios.post('/api/login',{
        username,
        password
    })
}



