// 引入mysql的配置文件
import {format, getUuid} from "../utils/util";
const {localhost_pool} = require('../config/mysql_db');
const md5 = require('md5');

class UserModel {
    static async getList(offset,pageSize,username,phone,formDate, endDate){
        let where='';
        if(phone!=='' && typeof phone!=='undefined'){
            if(where ===''){
                where = `where phone ='${phone}'`;
            } else {
                where = `${where} AND phone ='${phone}'`;
            }
        }
        if(username!=='' && typeof username!=='undefined'){
            if(where ===''){
                where = `where username like '%${username}%'`;
            } else {
                where = `${where} AND username like'%${username}%'`;
            }
        }
        if(formDate!=='' && typeof formDate!=='undefined' && endDate!=='' && typeof endDate!=='undefined'){
            if(where ===''){
                where = `where update_time between '${formDate}' and '${endDate}'`;
            } else {
                where = `${where} AND update_time between '${formDate}' and '${endDate}'`;
            }
        }
        let sqlStr=`select id,username,phone,email,create_time as createTime,update_time as updateTime
                    from cc_user ${where} limit ${offset},${pageSize}`;
        console.info(`UserModel模块----->getList方法执行的sql:${sqlStr}`);
        return await new Promise((resolve,reject)=>{
            localhost_pool.query(sqlStr,(err, result)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    static async getListCount(username,phone,formDate, endDate){
        let where='';
        if(phone!=='' && typeof phone!=='undefined'){
            if(where ===''){
                where = `where phone ='${phone}'`;
            } else {
                where = `${where} AND phone ='${phone}'`;
            }
        }
        if(username!=='' && typeof username!=='undefined'){
            if(where ===''){
                where = `where username like '%${username}%'`;
            } else {
                where = `${where} AND username like'%${username}%'`;
            }
        }
        if(formDate!=='' && typeof formDate!=='undefined' && endDate!=='' && typeof endDate!=='undefined'){
            if(where ===''){
                where = `where update_time between '${formDate}' and '${endDate}'`;
            } else {
                where = `${where} AND update_time between '${formDate}' and '${endDate}'`;
            }
        }
        let sqlStr=`select count(*) as total from cc_user ${where}`;
        console.info(`UserModel模块----->getListCount方法执行的sql:${sqlStr}`);
        return await new Promise((resolve,reject)=>{
            localhost_pool.query(sqlStr,(err, result)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    static async add(username,phone,email){
        let uuid = await getUuid();
        //给一个默认的初始密码:123456
        let newPWD = md5('123456');
        let insertSql=`INSERT INTO cc_user(id,username,password,phone,email,create_time,update_time) VALUES ('${uuid}','${username}','${newPWD}','${phone}','${email}','${await format(new Date(),'YYYY-MM-dd HH:mm:ss')}','${await format(new Date(),'YYYY-MM-dd HH:mm:ss')}')`;
        console.info(`UserModel模块----->add方法执行的sql:${insertSql}`);
        return await new Promise((resolve,reject)=>{
            localhost_pool.query(insertSql,(err)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(uuid);
                }
            });
        });
    }
    static async update(id,phone,email){
        let updateSql=`UPDATE cc_user SET phone='${phone}',email='${email}',update_time='${await format(new Date(),'YYYY-MM-dd HH:mm:ss')}' WHERE id ='${id}'`;
        console.info(`UserModel模块----->update方法执行的sql:${updateSql}`);
        return await new Promise((resolve,reject)=>{
            localhost_pool.query(updateSql,(err,res)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }
    static async delete(id){
        let delStr=`delete from cc_users where id='${id}'`;
        console.info(`UserModel模块----->delete方法执行的sql:${delStr}`);
        return await new Promise((resolve,reject)=>{
            localhost_pool.query(delStr,(err, result)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    static async resetPassword(id,password){
        let updateSql=`UPDATE cc_user SET password='${password}' WHERE id ='${id}'`;
        console.info(`UserModel模块----->resetPassword方法执行的sql:${updateSql}`);
        return await new Promise((resolve,reject)=>{
            localhost_pool.query(updateSql,(err,res)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }
    static async findByUserNameAndPwd(username,password){
        let sqlStr=`select id,username,jobId,remarks,state from cc_user where username='${username}' and password='${password}'`;
        console.info(`UserModel模块----->findByUserNameAndPwd方法执行的sql:${sqlStr}`);
        return await new Promise((resolve,reject)=>{
            localhost_pool.query(sqlStr,(err, result)=>{
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
}
export default UserModel;
