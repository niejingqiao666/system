// 引入mysql的配置文件
import {format, getUuid} from "../utils/util";
const {localhost_pool} = require('../config/mysql_db');

class PaperModel {
    static async queryData(userId,area,title){
        let where='';
        if(userId!=='' && typeof userId!=='undefined'){
            where += ` AND u.id='${userId}'`;
        }
        if(area!=='' && typeof area!=='undefined'){
            if(area !=='all'){
                where += ` AND c.area='${area}'`;
            }
        }
        if(title!=='' && typeof title!=='undefined'){
            where += ` AND c.title like '%${title}%'`;
        }
        let sqlStr=`SELECT c.id,c.title ,c.vintage,c.author,c.abstract,c.tags,c.area from cc_list c 
                LEFT JOIN cc_power p on c.area = p.power
                LEFT JOIN cc_user u on p.user_id = u.id
                where 1=1 ${where}`;
        console.info(`PaperModel模块----->queryData方法执行的sql:${sqlStr}`);
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
export default PaperModel;
