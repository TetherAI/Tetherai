const {Router} = require('express')

const authController=require('../controllers/authContorller')

const router = new Router()

router.get('/', authController.home)

router.get('/register',authController.registerForm)

router.get('/login',authController.loginForm)

router.get('/forget-password', authController.forgetPasswordForm)

router.get('/change-password/:token', authController.changePasswordForm)

router.get('/verify/:token', authController.verifyEmail)

router.get('/logout', authController.logout)

module.exports=router
