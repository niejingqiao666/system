const mysql=require('mysql');
// 创建一个默认配置的连接池
let localhost_pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'rccsystem',
    port: 3306,
    multipleStatements: true
});
module.exports = {
    localhost_pool
};
