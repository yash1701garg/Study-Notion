import React from 'react'
import Temp from '../component/Temp';
import loginImg from "../assets/login.png";

const Login = ({setIsLoggedIn}) => {
  return (
    
      /* data pass karenge  */
      <Temp
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  
  )
}

export default Login;