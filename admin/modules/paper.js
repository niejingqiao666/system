// 引入mysql的配置文件
import {format, getUuid} from "../utils/util";
const {localhost_pool} = require('../config/mysql_db');

class PaperModel {
    static async queryData(userId,area,title){
        let where='';
        if(userId!=='' && typeof userId!=='undefined'){
            where += ` AND u.id='${userId}'`;
        }
        if(area && area.length > 0){
			let flag = area.some(item=>{return item ==='all'});
            if(!flag){
                let arr1=[];
                area.forEach(item=>{arr1.push(`'${item}'`)})
                where += ` AND c.area in (${arr1})`;
            }
        }
        if(title!=='' && typeof title!=='undefined'){
            where += ` AND c.title like '%${title}%'`;
        }
        let sqlStr=`SELECT DISTINCT c.id,c.title ,c.vintage,c.author,c.abstract,c.tags,c.area from cc_list c 
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
