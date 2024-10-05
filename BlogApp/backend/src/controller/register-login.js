const validator = require('validator')
const bcrypt = require('bcrypt')
const UserModel = require('../models/User.model')
const jwt = require('jsonwebtoken')
const { transporter } = require('../config/mailer')

const register = async(req,res)=>{

    try{
      const {name,email ,password} = req.body

      if(!(validator.isEmail(email))){
 
         return res.json({message : "please provide valid email"})
      }
      if(!(validator.isStrongPassword(password))){
        
         return res.json({message:"please enter Strong Password"})
      }
    
    const findUser = await UserModel.findOne({where:{email}}) 
      console.log(findUser)
    
     if(findUser){
        return res.json({message:"thie user already exsist"})
     }
    // const salt = await bcrypt.genSaltSync(10) ye bhi kr sakty hain 

     const hashPassword = await bcrypt.hash(password, 10)
     
     const user = await UserModel.create({name,email,password:hashPassword})
     return res.json(user)

    }
    catch(error){
        console.log(error)
    }
    
}

const login = async(req,res)=>{
     
    try{
        const {email ,password} = req.body

      if(!(validator.isEmail(email))){

        return res.json({message : "please provide valid email"})
     }
     if(!(validator.isStrongPassword(password))){

        return res.json({message:"please enter Strong Password"})
     }
     
     const findUser = await UserModel.findOne({where:{email}}) 
     if(!findUser){

        return res.json({message:"user doesn't exsist"})
     }
    // const salt = await bcrypt.genSaltSync(10) ye bhi kr sakty hain 

      const hashPassword = await bcrypt.compare(password,findUser.password)
     if(!hashPassword){
        return res.json({message:"invalid password"})
     }

     const token = await jwt.sign({id:findUser.id},"iamtokent") 
     const URL = `http://localhost:3000/home`

   //   let mailOptions ={

   //    from: 'hussainmidhathussain@gmail.com', // sender address
   //    to: findUser.email, // list of receivers
   //    subject: "you are Login Now at www.mywebsite.com", // Subject line
   //    html: `<a href=${URL} target="_blank">click here</a>`, // html body
  

   //   }
     
   //   transporter.sendMail(mailOptions)

     return res.json(token)

    }
    catch(error){
        console.log(error)
    }
        

}

module.exports = { register , login}