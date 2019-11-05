import PaperModel from "../modules/paper";

class paperController {
    static async queryData(ctx){
        let {userId="",area="",title=""}=ctx.query;
        try{
            let data=await PaperModel.queryData(userId,area,title);
            ctx.body = {
                code: 200,
                msg: '查询成功',
                data
            }
        }catch(err){
            console.error(err);
            ctx.body = {
                code: 412,
                msg: `接口调用异常${err.message}`
            }
        }
    }
}
export default paperController;
