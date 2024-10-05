const express = require('express')
const { AuthorGetBlog, AuthorCreateBlog, AuthorUpdateBlog, AuthorDeleteBlog } = require('../../controller/AuthorController/Author.Blog.controller')
const router = express.Router()

router.get('/',AuthorGetBlog)

router.post('/',AuthorCreateBlog)

router.patch('/:id',AuthorUpdateBlog)

router.delete('/:id',AuthorDeleteBlog)


module.exports = router