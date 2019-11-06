import axios from './axios';

export  function handleLogin(username, password) {
    return axios.post('/api/login', {
        username,
        password
    })
}

export  function getList() {
    return axios.get('/api/queryData')
}