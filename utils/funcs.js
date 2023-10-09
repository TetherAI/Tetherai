exports.generateRandomString=(length)=>{
    let result= ''
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

exports.get500=(res)=>{
    return res.render("errors/500",{pageTitle: "Server Error | 500",url:''})
}

exports.get404=(res)=>{
    return res.render("errors/404",{pageTitle: "Page Not Found | 404",url:''})
}

exports.getExpirePage=(res)=>{
    return res.render("errors/emailExpire",{pageTitle: "Page Not Found | 404",url:''})
}

//* this is for reading html view of emails files
exports.readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            callback(err)
        }
        else {
            callback(null, html)
        }
    })
}
