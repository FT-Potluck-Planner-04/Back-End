const User = require('../users/users-model')


const checkBody = (req, res, next) => {
    if(req.body.username == undefined || req.body.password == undefined) {
        next({
            status: 400,
            message: 'username and password required'
        })
    }
    else {
        next()
    }
}

const checkUsernameFree = (req, res, next) => {
    User.findBy({ username: req.body.username })
    .then(user => {
        if(!user) {
            next()
        }
        else {
            next({
                status: 400,
                message: 'username taken'
                })
        }
    })
}

const checkUsernameExists = (req, res, next) => {
    User.findBy({ username: req.body.username })
    .then(user => {
        if(!user) {
            next({
                status: 400,
                message: 'invalid credentials'
            })
        }
        else {
            req.user = user
            next()
        }
    })
}

module.exports = {
    checkBody,
    checkUsernameFree,
    checkUsernameExists
}
