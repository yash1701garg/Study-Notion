import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import toast from 'react-hot-toast';
const NavBar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
        <img src={Logo} alt='logo'
        width={150} height={32} loading='lazy'
        />
        </Link>
        <nav>
            <ul className='flex gap-3 text-richblack-100 gap-x-6 '>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
        {/* login dashboard signup logout buttons */}
        <div className='flex items-center gap-x-4 '>
            { !isLoggedIn &&
                <Link to="/Login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    >Log in</button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/SignUp">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    >Sign Up</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button 
                    className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    onClick={()=>{
                        setIsLoggedIn(false)
                        toast.success("Log out")
                    }}
                    >logout</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/DashBoard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    >Dashboard</button>
                </Link>
            }
        </div>

    </div>
  )
}

export default NavBar