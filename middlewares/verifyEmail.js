exports.verifyEmail = async (req, res, next) => {
    const user = req.user
    if (user.verify !== null) {
        return res.redirect(`/users/verify-email`)
    } else
        return next()
}
