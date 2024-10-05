const express = require('express')
const router = express.Router()
const authorization = require('../middleware/authorization')
const roles = require('../utils/roles')
const AdminBlogRouter = require('./Admin/Admin.Blog.Router')
const AdminUserRouter = require('./Admin/Admin.User.Router')
const AdminCommentRouter = require('./Admin/Admin.Comment.Router')

router.use('/blog',authorization(roles.ADMIN),AdminBlogRouter)

router.use('/user',authorization(roles.ADMIN),AdminUserRouter)

router.use('/comment',authorization(roles.ADMIN),AdminCommentRouter)

module.exports = router