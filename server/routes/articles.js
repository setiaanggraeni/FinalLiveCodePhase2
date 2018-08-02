var express = require('express');
var router = express.Router();
const {createArticle, allArticles, editArticle, deleteArticle, getOneArticle, searchByAuthor, searchByCategory} = require('../controllers/articleController')

/* GET users listing. */
router.post('/create', createArticle)
      .get('/', allArticles)
      .put('/:_id', editArticle)
      .delete('/:_id', deleteArticle)
      .get('/:_id', getOneArticle)
      .get('/search', searchByAuthor)
      .get('/search/category', searchByCategory)

module.exports = router;
