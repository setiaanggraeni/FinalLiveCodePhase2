const User = require('../models/users')
const Article = require('../models/articles')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const saltRounds = 5
var salt = bcrypt.genSaltSync(saltRounds)

class AtricleController {
    static createArticle(req, res){
        let token = req.headers.token
        if(!token){
            res.status(403).json('You have no access token, please login!')
        } else{
            jwt.verify(token, process.env.secretKey, (err,decoded)=>{
                User.find({username: decoded.username}, (err, currentUser) => {
                    let id = currentUser[0].id
                    let {title, content, category} = req.body
                    Article.create({title, content, category, author:mongoose.Types.ObjectId(id)}, (err, createdTask) => {
                        if(err) res.json('Wrong access!')
                        res.status(200).json('Successfully created new article!')
                    })
                }) 
            }) 
        }
    }

    static allArticles(req, res){
        let token = req.headers.token
        if(!token){
            res.json('Please login to view all articles!')
        } else {
                Article.find({})
                .then(theartciles => {
                    res.status(200).json(theartciles)
                })
                .catch(err => {
                    res.json(err)
                })
        }  
    }

    static getOneArticle(req, res){
        let token = req.headers.token
        if(!token){
            res.status(403).json('You have no access token, please login!')
        } else{
            Article.findOne({_id : req.params._id})
            .populate('author')
            .exec((err, article) => {
                if(err) res.status(404).json('Article not found!')
                res.status(200).json(article)
            })
        }
    }

    static editArticle(req, res){
        let token = req.headers.token
        if(!token){
            res.status(403).json('You have no access token, please login!')
        } else{
            jwt.verify(token, process.env.secretKey, (err, decoded) => {
                Article.find({_id : req.params._id}, (err, currentArticle) => {
                    let authorId = currentArticle[0].author
                    let {title, content, category} = req.body
                    // console.log("------- ini decode",decoded);
                    if(decoded._id == authorId){
                        Article.update({_id : req.params._id}, {$set : {
                            title, content, category
                        }})
                        .exec((err, result) => {
                            if(err) res.json('Wrong access!')
                            res.status(200).json(`Successfully update article id ${req.params._id}`)
                        })
                    } else {
                        res.status(403).json('You dont have access to update this article!')
                    }
                })  
            })
        }
    }

    static deleteArticle(req, res){
        let token = req.headers.token;
        if(!token){
            res.status(403).json('You have no access token, please login!')
        } else{
            jwt.verify(token, process.env.secretKey, (err,decoded)=>{
                Article.find({_id : req.params._id}, (err, currentArticle) => {
                    let authorId = currentArticle[0].author
                    if(decoded._id == authorId){
                        Article.deleteOne({_id : req.params._id}, (err) => {
                            if(err) res.json("Delete article failed!")
                            res.status(200).json(`Successfully deleted article id ${req.params._id}`)
                        })
                    } else {
                        res.status(403).json('You dont have access to delete this article!')
                    }
                })  
            })
        }
    }

    static getOneArticle(req, res){
        let token = req.headers.token
        if(!token){
            res.status(403).json('You have no access token, please login!')
        } else{
            Article.findOne({_id : req.params._id})
            .populate('author')
            .exec((err, article) => {
                if(err) res.status(404).json('Article not found!')
                res.status(200).json(article)
            })
        }
    }

}

module.exports = AtricleController