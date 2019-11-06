import axios from './axios';

export  function Login(username, password) {
    return axios.post('/api/login', {
        username,
        password
    })
}


export  function getList() {
    return axios.get('/api/queryData')
}