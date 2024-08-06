import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
const Template = (title,desc1,desc2,image,formType,setIsLoggedIn) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formType==="signUp" ?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>
                <p>SignUp with google</p>
            </button>
        </div>
        

        <div>
            <img src={frameImage}
            alt = 'pattern'
            height={558}
            width={504}
            loading='lazy'/>
            <img src={image}
            alt = 'students'
            height={558}
            width={494}
            loading='lazy'/>
        </div>

        
    </div>
  )
}

export default Template