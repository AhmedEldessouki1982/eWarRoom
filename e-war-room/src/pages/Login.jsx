import React from 'react';
import Nav from '../components/Nav';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../hooks/useAuth';


//toastfy options object
let toastifyOptions = {
  position: "bottom-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

function Login() {
  
  let { login, error } = useAuth();
  let [userData, setUserData] = React.useState({});
  let handleChange = (e) => setUserData({...userData, [e.target.name]:e.target.value });

  let loginUser = async (event) => {
    event.preventDefault();
    login(userData);
    error && toast(error, toastifyOptions)      
    
  }

  return (
    <section className='ml-2 pt-5 md:pt-10 pb-24 md:mx-auto w-full h-full md:w-7/12'>
     {/*render the tostify container */}
        <ToastContainer />
        <Nav/>
        <div className='flex flex-col justify-center items-center m-10 md:mx-auto md:w-1/2'>
          <h4 className='uppercase mb-10 text-sm md:text-2xl'>log in to electronic war room</h4>
          <input className='mt-10 mb-10 pb-5 bg-transparent outline-none border-b border-red text-red h-10 w-48 md:w-4/5 border-b-red placeholder:text-red' type="email" placeholder='Email' name='email' onChange={(e)=>handleChange(e)} />
          <input className='mt-10 mb-10 pb-5 bg-transparent outline-none border-b border-red text-red h-10 w-48 md:w-4/5 border-b-red placeholder:text-red' type="password" placeholder='Password' name='password' onChange={(e)=>handleChange(e)} />
          <p className='mb-10 capitalize'>don't have account?
            <Link to={"/register"} className= "text-blue">
            {" "}
              New Register
            </Link>
          </p>
          <button className='uppercase w-48 h-12 border-2 border-red outline-none text-red text-center' onClick={loginUser}>login
          </button>
          <button className='uppercase mt-10 w-48 h-12 border-2 border-yellow-300 outline-none text-red text-center'>login with google</button>
        </div>

    </section>
  )
}
export default Login