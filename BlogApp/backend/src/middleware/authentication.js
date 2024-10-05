const jwt = require('jsonwebtoken')
const UserModel = require('../models/User.model')

const authentication = (req,res,next)=>{

    const auth = req.headers.authorization || req.heasders.Authorization

    if(!auth){

        return res.json({message:"provide valid token"})
    }

    jwt.verify(auth,'iamtokent',async(error,decoded)=>{

        if(error){

            console.log(error)
        }

        req.id = decoded.id

        const user = await UserModel.findOne({where:{id:req.id}})

        req.role = user.role
        next()
    })
}

module.exports = authentication


