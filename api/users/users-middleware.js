function validUserID(req, res, next) {
    Users.getByID(req.params.id)
    .then(user => {
        if(user){
            req.user = user
            next()
        }else {
            res.status(400).json({
                message: "Invalid user ID"
            })
        }
    })
    .catch(next)
}

function validUser(req, res, next) {
    const user = req.body
    if(!user){
        res.status(400).json({
            message: "Missing user data"
        })
    }else if(!user.name){
        res.status(400).json({
            message: "Missing name"
        })
    }else if(!user.username){
        res.status(400).json({
            message: "Missing username "
        })
    }else if(!user.password){
        res.status(400).json({
            message: "Missing password "
        })
    }else {
        next()
    }
}
