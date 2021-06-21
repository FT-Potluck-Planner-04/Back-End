//**************************************Peter's**************/
const express = require('express')
const router = express.Router()
const Users = require('./users-model')
const restricted = require('../middleware/restricted-middleware')
const {validUserID, validUser} = require('../middleware/middleware')

router.use(restricted)

// Peter's brings api/users
router.get('/', (req, res, next) => {
    Users.get()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(next)
})

router.get('/:id', validUserID, (req, res, next) => {
    const id = req.params.id
    Users.getByID(id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(next)
})

router.put('/:id', validUserID, validUser, (req, res, next) => {
    const id = req.params.id
    const changes = req.body
    Users.update(id, changes)
    .then(change => {
        if(change === 1){
            Users.getByID(id)
            .then(success => {
                res.status(200).json({
                    message: `User '${success.name}' updated`,
                    success
                })
            })
        }
    })
    .catch(next)
})

router.delete('/:id', validUserID, (req, res, next) => {
    const id = req.params.id
    Users.remove(id)
    .then(user => {
        if(user){
            res.status(200).json({
                message: 'User deleted'
            })
        }
    })
    .catch(next)
})


module.exports = router
//***************************************************************** */