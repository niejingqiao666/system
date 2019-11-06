import axios from './axios';

// 登录信息
export default function handleLogin(username, password) {
    return axios.post('/api/login', {
        username,
        password
    })
}