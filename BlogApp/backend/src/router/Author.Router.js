const express = require('express')
const router = express.Router()
const roles = require('../utils/roles')
const authorization = require('../middleware/authorization')
const AuthorBlogRouter = require('./Author/Author.Blog.Router')
const upload = require('../config/multer')


// router.use('/blog',upload.single('file'),authorization(roles.AUTHOR),AuthorBlogRouter)
router.use('/blog',upload.single('file'),AuthorBlogRouter)

module.exports = router