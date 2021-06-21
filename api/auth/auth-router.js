const bcrypt = require('bcryptjs');
const router = require('express').Router();
const User = require('../users/users-model')
const { tokenBuilder } = require('./token-builder')
const {
    checkBody,
    checkUsernameFree,
    checkUsernameExists
} = require('./credentials-middleware');


router.post('/register', checkBody, checkUsernameFree, (req, res, next) => {
  let user = req.body

//   const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcrypt.hashSync(user.password, 8);

  user.password = hash

  User.add(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(next);
});

router.post('/login', checkBody, checkUsernameExists, (req, res, next) => {
 if(bcrypt.compareSync(req.body.password, req.user.password)) {
   const token = tokenBuilder(req.user)
   res.json({
     message: `Welcome, ${req.user.username}!`,
     token 
   })
 }
 else {
   next({ status: 400, message: 'invalid credentitals' })
 }
});

module.exports = router;
