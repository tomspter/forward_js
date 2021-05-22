const router = require('koa-router')()
const RouterController = require('../controller/routerController')
//端口转发
router.post('/getEnrollDataList',RouterController.getEnrollDataList)
router.post('/login',RouterController.login)
router.post('/getYxdmSelect',RouterController.getYxdmSelect)
router.post('/getSsdmSelect',RouterController.getSsdmSelect)
router.post('/getSjnfSelect',RouterController.getSjnfSelect)
router.post('/getPrevPcdmSelect',RouterController.getPrevPcdmSelect)
router.post('/getZyzdmSelect',RouterController.getZyzdmSelect)

module.exports = router