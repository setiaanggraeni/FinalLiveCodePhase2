const User = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const saltRounds = 5
var salt = bcrypt.genSaltSync(saltRounds)

class UserController {
    static register(req, res){
        let hash = bcrypt.hashSync(req.body.password, salt)
        let password = hash
        let {username} = req.body
        User.findOne({username: username})
        .then(user => {
            if(!user){
                User.create({
                    username, password
                })
                .then(newUser => {
                    res.status(200).json(newUser)
                })
                .catch(err => {
                    res.json(err)
                })
            } else{
                res.json('Username already exist!')
            }
        })
        .catch(err => {
            res.json(err)
        })
    }

    static login(req, res){
        let {username, password} = req.body
        User.findOne({username: username})
        .then(user =>{
            if(user !== null){
                let compare = bcrypt.compareSync(password, user.password)
                if(compare){
                    jwt.sign({_id:user._id, username:user.username}, process.env.secretKey, function(err, token){
                        res.status(200).json({username: user.username, token: token})
                    })
                } else {
                    res.json('Wrong username/password!')
                }
            } else {
                res.json('Username not found, please kindly to register!')
            }
        })
        .catch(err => {
            res.json(err)
        })
    }
}

module.exports = UserController