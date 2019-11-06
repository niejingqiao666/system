import axios from './axios';

// 登录信息
export  function Login(username, password) {
    return axios.post('/api/login', {
        username,
        password
    })
}

export  function getList() {
    return axios.get('/api/queryData')
}