
const BlogModel = require("../../models/Blog.model")

const AuthorGetBlog = async(req,res)=>{
      
    const id = req.params

    const findBlog = await BlogModel.find({where:{id}})

    return res.json(findBlog)
    
}

const AuthorCreateBlog = async(req,res)=>{
    const {title,description} = req.body

    try{
        console.log(req.file)
        const savedFile = await new BlogModel({image:req.file.filename,title,description})
        savedFile.save()
        return res.json(savedFile)

    }catch(error){
           console.log(error)
    }

}

const AuthorUpdateBlog = async(req,res)=>{
    
    const id = req.params

    const findBlog = await BlogModel.findOneandUpdate({where:{id}})

    return res.json(findBlog)

}

const AuthorDeleteBlog = async(req,res)=>{
    const id = req.params

    const findBlog = await BlogModel.findOneandDelete({where:{id}})

    return res.json(findBlog)

}


module.exports = {AuthorGetBlog ,AuthorCreateBlog ,AuthorDeleteBlog ,AuthorUpdateBlog}