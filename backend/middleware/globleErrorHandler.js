const ErrorHandler = (err, req, res, next) =>{
    const statusCode = req.statusCode ? res.statusCode : 500
    res.status(statusCode)

    res.json({
        message: err.message,
        stack : process.env.NODE_ENV !== 'production' ? err.stack : null,
        status: statusCode,
    })
}


module.exports = {
    ErrorHandler
}