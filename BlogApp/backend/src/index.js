const express = require('express')
const app = express()
const cors = require('cors')
const UserRouter= require('../src/router/user.Router')
const UserModel = require('./models/User.model')
const AdminRouter = require('./router/Admin.Router')
const AuthorRouter = require('./router/Author.Router')
const ReaderRouter = require('./router/Reader.Router')
const GuestRouter = require('./router/guest.Router')
const BlogModel = require('./models/Blog.model')
const AuthorModel = require('./models/Author.model')
const CommentModel = require('./models/Comment.model')

const port = 8000
app.use(express.json())
app.use(cors())
UserModel.sync({force:false})
BlogModel.sync({force:true})
AuthorModel.sync({force:false})
CommentModel.sync({force:false})

//For Login and Registeration
app.use('/auth',UserRouter)

//For Admin he can create ,delete update get Comments , Blog , User 
app.use('/admin',AdminRouter)

//For Author he can create ,delete , update and get only Blogs
app.use('/author',AuthorRouter)

//For Reader he can only see Blogs and Comment on them
app.use('/reader',ReaderRouter)

//for Guest he can only see the Blog
app.use('/guest',GuestRouter)




app.listen(port,(error)=>{
   
    if(error){

        console.log(error)
    }

    console.log(`app is running on port ${port}`)
})