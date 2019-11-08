import axios from './axios';
export  function handleLogin(username, password) {
    return axios.post('/api/login', {
        username,
        password
    })
}

export  function getList(userId, title, area) {
    let types='';
    if(area && area.length > 0){
        area.forEach(item => {
            if(types===''){
                types = item.type;
            } else {
                types = `${types},${item.type}`;
            }
        });
        console.log(types);
    }
    return axios.get('/api/queryData',{
        params:{
            userId, 
            title,
            area: types
        }
    })
}

export function resetPass(id, password){
    return axios.post('/api/resetPwd',{
        id,
        password
    })
}