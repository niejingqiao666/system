import axios from './axios';
export  function handleLogin(username, password) {
    return axios.post('/api/login', {
        username,
        password
    })
}

export  function getList(area) {
    let types='';
    if(area && area.length > 0){
        area.forEach(item => {
            if(types===''){
                types = item.type;
            } else {
                types = `${types},${item.type}`;
            }
        });
    }
    return axios.get('/api/queryData',{
        params:{
            area: types
        }
    })
}