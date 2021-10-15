import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import './Register.css'
const Register = () => {
    const {handleRegistration,handleNameChange,handleEmailChange,handlePasswordChange,error,handleResetPassword,user}=useAuth();
    return (
        <div className="Login_container w-50 mx-auto my-auto mt-3">
        <form onSubmit={handleRegistration}>
                <h3>Log in</h3>
                <div className="form-group mt-3">
                     <label>Name</label>
                     <input onChange={handleNameChange} type="text" name="name" className="form-control" placeholder="Enter Name" />
                 </div>
                 <div className="form-group mt-3">
                     <label>Email</label>
                     <input onChange={handleEmailChange} type="email" name="email" className="form-control" placeholder="Enter email" />
                 </div>
                 <div className="form-group mt-3">
                     <label>Password</label>
                     <input onChange={handlePasswordChange} type="password" name="password" className="form-control" placeholder="Enter password" />
                 </div>
                 <button type="submit" className="btn btn-dark btn-lg btn-block mt-3" >Register </button>
                 <p>{error}</p>
                 <p className=" text-right" >
                 Are You already Registered?   <Link to="/Login" >Login </Link>
                 </p>
          
                
             </form>
             <p>======================================</p>
            
         {user.email && <p>Welcome {user.name}</p>}
     {user.email && <img src={user.photo} alt="" width="100" height="100" />
 }
         </div>
    );
};

export default Register;