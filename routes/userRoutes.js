const {Router} = require('express')

const user = require('../controllers/userController')
const {authenticated} = require('../middlewares/auth')
const {verifyEmail} = require('../middlewares/verifyEmail')

const router = new Router()

router.get('/verify-email', [authenticated], user.verifyEmail)
router.get('/resend-verify-email', [authenticated], user.resendVerifyEmail)
router.get('/wallet', [authenticated,verifyEmail], user.wallet)
router.get('/subsets', [authenticated,verifyEmail], user.subsets)
router.get('/transactions', [authenticated,verifyEmail], user.transactions)

module.exports=router
