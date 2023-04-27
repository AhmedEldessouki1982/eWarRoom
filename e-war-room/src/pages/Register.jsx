import React from 'react';
import Nav from '../components/Nav';
import axios from 'axios';
import { usersAPI as url } from '../utils/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from 'react-router-dom';
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


function Register() {

  let [userData, setUserData] = React.useState({});
  let [catchedError, setCatchedErrors] = React.useState({});
  let [isUser, setIsUser] = React.useState(false);
  let handleChange=(e)=>setUserData({...userData, [e.target.name]:e.target.value});
  
  let createUser = async (event) => {
    event.preventDefault()
    await axios.post(
      url,userData
    )
    .then (
      res => {
        toast(`User created and data transfered /server status ${res.statusText}`, toastifyOptions);
        res.data && setIsUser(true)
      }
    ).catch (
      res=>{  
        setCatchedErrors(
          res.response.data.catchedError
        )
        //adding the values of the error catched object to tostify
        res.response.status === 501 ? toast(res.response.data, toastifyOptions):
        Object.values(catchedError).map(
        err => toast(err, toastifyOptions)
        );
      }
    )
  }

  return (
    <section className='ml-2 pt-5 md:pt-5 pb-24 md:mx-auto w-full md:w-7/12 h-full overflow-hidden'>
        {/*render the tostify container */}
        <ToastContainer />
        <Nav />
        <div className='flex flex-col justify-center items-center m-10 md:mx-auto md:w-1/2'>
          <h4 className='uppercase text-sm md:text-2xl'>Register here</h4>
          <input className='mt-10 mb-8 pb-5 bg-transparent outline-none border-b border-red text-red h-10 w-48 md:w-4/5 border-b-red placeholder:text-red' type="text" placeholder='User Name' name='username' onChange={e => handleChange(e)}/>
          <input className='mt-10 mb-8 pb-5 bg-transparent outline-none border-b border-red text-red h-10 w-48 md:w-4/5 border-b-red placeholder:text-red' type="password" placeholder='Password' name='password' onChange={e => handleChange(e)}/>
          <input className='mt-10 mb-8 pb-5 bg-transparent outline-none border-b border-red text-red h-10 w-48 md:w-4/5 border-b-red placeholder:text-red' type="email" placeholder='email' name='email' onChange={e => handleChange(e)}/>
          <input className='mt-10 mb-8 pb-5 bg-transparent outline-none border-b border-red text-red h-10 w-48 md:w-4/5 border-b-red placeholder:text-red' type="phone" placeholder='Phone' name='phone' onChange={e => handleChange(e)}/>
          <p className='mb-5 capitalize'>Already have account?
            <Link to={"/login"} className= "text-blue">
            {" "}
              Log in
            </Link>
          </p>
          <button className='uppercase w-48 h-12 border-2 border-red outline-none text-red text-center' onClick={createUser}>submit</button>
        </div>

        {isUser && (
          <Navigate to="/login"/>
        )}

    </section>
  )
}
export default Register