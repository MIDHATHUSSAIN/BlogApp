import { useState } from "react";
import FORM from "../Components/Form";
import axios from "axios";

function LOGIN (){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const formHandeller = async(e)=>{
       e.preventDefault()
       const respose =  await axios.post("http://localhost:8000/auth/login",{email,password})
       console.log(respose.data.userId)
       window.localStorage.setItem("userId",respose.data.userId)
       console.log(respose.data)
       setEmail(" ")
       setPassword(" ")
       if(!(respose.data.token)){
        alert("Sign Up first")

       }
       else{
       }
       
    }

    return(
        <div >
          <FORM email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                formHandeller={formHandeller}
                label={"LogIn"}
          />
        </div>
    )
}

export default LOGIN ;