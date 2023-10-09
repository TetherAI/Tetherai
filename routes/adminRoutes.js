const {Router} = require('express')
const adminController = require('../controllers/admin')
const {authenticated} = require('../middlewares/auth')


const router = new Router()

router.get('/dashboard',[authenticated],  admin.dashboard)
router.get('/users',[authenticated],  admin.users)
router.get('/transactions',[authenticated],  admin.transactions)
router.get('/setting',[authenticated],  admin.setting)

module.exports=router
