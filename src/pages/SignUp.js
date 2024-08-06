import React from 'react'

import Temp from '../component/Temp'
import signupImg from '../assets/signup.png'
const SignUp = ({setIsLoggedIn}) => {
  return (
  
    <Temp
     title="Join the millions learning to code with StudyNotion for free"
     desc1="Build skills for today, tomorrow, and beyond."
     desc2="Education to future-proof your career."
     image={signupImg}
     formType="signUp"
     setIsLoggedIn={setIsLoggedIn}
    />
  
  )
}

export default SignUp