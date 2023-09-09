const errorHandler = (err, req, res, next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)
    res.json({
        //If the err is true, return a message in a string. If it's not true, return something
        message: !!err ? err.message : 'No Error Found',
        stack: process.env.NODE_ENV  === 'production' ? null : err.stack
    })
    next()
}

module.exports = {
    errorHandler,
}