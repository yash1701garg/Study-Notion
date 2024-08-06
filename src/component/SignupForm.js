import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function SignupForm({setIslogin}) {
  const navigate = useNavigate();
  const[formData, setFormData] = useState({
    firstname:'', lastname:'',email:'', password:'', confirmPassword:'',
  })
  function buttonHandler(event){
    setFormData((prev)=>{
      return{
        ...prev,
      [event.target.name]:event.target.value
      }
    })

  }
  const[showPassword, setShowPassword] = useState(false);
  const[showConfirmPassword, setShowConfirmPassword] = useState(false);

  function submitHandler(event){
    event.preventDefault();
    if(formData.password!==formData.confirmPassword){
      toast.error("Different password")
    }else{
      setIslogin(true);
    toast.success("Account created!");
    navigate('/dashboard')
    const finalData = {...formData,accountType}
    console.log(finalData);
    }
  }

  const[accountType, setAccountType] = useState('student');

  return (
    <div>
      <div className='flex bg-richblack-700 p-1 gap-x-2 my-2 rounded-full max-w-max '>
        <button className={`${accountType === 'student' ? "bg-richblack-800 text-richblack-25 ":
        "bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration-300`}
        onClick={()=>setAccountType('student')}
        >Student</button>
        <button className={`${accountType === 'instructor' ? "bg-richblack-800 text-richblack-25 ":
        "bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration-300`}
        onClick={()=>setAccountType('instructor')}
        >Instructor</button>
      </div>

      <form onSubmit={submitHandler}>

        <div className='flex gap-x-3 mt-[10px]'>
        <label className='w-full'>
          <p className='text-[0.89rem] text-richblack-25 mb-1 leading-[1.375rem] font-bold'>First name <sup className='text-pink-200 '>*</sup></p>
          <input type="text" 
          className='bg-richblack-700 rounded-[0.5rem] text-richblack-25 w-full p-[12px]'
          required
          name='firstname'
          placeholder='enter your firstname'
          onChange={buttonHandler}
          value={formData.firstname}
          />
        </label>
        <label className='w-full'>
          <p className='text-[0.89rem] text-richblack-25 mb-1 leading-[1.375rem] font-bold'>Last name <sup className='text-pink-200 '>*</sup></p>
          <input type="text" 
          className='bg-richblack-700 rounded-[0.5rem] text-richblack-25 w-full p-[12px]'
          required
          name='lastname'
          placeholder='enter your lastname'
          onChange={buttonHandler}
          value={formData.lastname}
          />
        </label>
        </div>

        <div className='mt-[10px]'>
        <label  >
          <p className='text-[0.89rem] text-richblack-25 mb-1 leading-[1.375rem] font-bold'>E-mail Address<sup className='text-pink-200 '>*</sup></p>
          <input type="email" 
          className='bg-richblack-700 rounded-[0.5rem] text-richblack-25 w-full p-[12px]'
          required
          name='email'
          placeholder='enter your email'
          onChange={buttonHandler}
          value={formData.email}
          />
        </label>
        </div>

        <div className='flex gap-x-3 mt-[10px]'>
        <label className='relative w-full'>
          <p className='text-[0.89rem] text-richblack-25 mb-1 leading-[1.375rem] font-bold'>Create Password<sup>*</sup></p>
          <input type={showPassword? ('text'):('password')} 
          className='bg-richblack-700 rounded-[0.5rem] text-richblack-25 w-full p-[12px]'
          required
          name='password'
          placeholder='Password'
          onChange={buttonHandler}
          value={formData.password}
          />
          <span className='absolute right-2 top-[41px] cursor-pointer'
          onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword? (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={20} fill='#AFB2BF'/>)}
            </span>
        </label>

        <label className='relative w-full'>
          <p className='text-[0.89rem] text-richblack-25 mb-1 leading-[1.375rem] font-bold'>Re-enter Password<sup className='text-pink-200 '>*</sup></p>
          <input type={showConfirmPassword? ('text'):('password')} 
          className='bg-richblack-700 rounded-[0.5rem] text-richblack-25 w-full p-[12px]'
          required
          name='confirmPassword'
          placeholder='Confirm password'
          onChange={buttonHandler}
          value={formData.confirmPassword}
          />
           <span className='absolute right-2 top-[41px] cursor-pointer'
           onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                {showConfirmPassword? (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={20} fill='#AFB2BF'/>)}
            </span>
        </label>
        </div>

        <button className='w-full mt-6 rounded-[8px] font-medium text-richblack-700 p-[8px] bg-yellow-50'>Create Account</button>

      </form>
    </div>
  )
}

export default SignupForm