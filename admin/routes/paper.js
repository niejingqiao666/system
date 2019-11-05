import Router from 'koa-router';
import paperController from "../controllers/paper";

const router = new Router({
    prefix: '/api'
});
router.get('/queryData',paperController.queryData);

export default router;
