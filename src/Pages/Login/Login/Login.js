import React, { Component } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


import './Login.css'
const Login = () => {
    const {SignInUsingGoogle,user,error,SignInUsingGithub,processLogin,handleEmailChange,handlePasswordChange,handlesignInWithEmailAndPassword}=useAuth();
    return (
        <div className="Login_container w-50 mx-auto my-auto mt-3">
       <form onSubmit={handlesignInWithEmailAndPassword}>
               <h3>Log in</h3>
                <div className="form-group mt-3">
                    <label>Email</label>
                    <input onBlur={handleEmailChange} type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input onBlur={handlePasswordChange} type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block mt-3" onClick={processLogin}>Sign in</button>
                <p className=" text-right" >
                    New User? <Link to="/Register" >Register </Link>
                </p>
         
               
            </form>
            <p>======================================</p>
            <button className="btn btn-dark btn-lg btn-block mt-3" onClick={SignInUsingGoogle}>Google Sign in</button>
            <button className="btn btn-dark btn-lg btn-block mt-3" onClick={SignInUsingGithub}>Github Sign in</button>
           
        {user.email && <p>Welcome {user.name}</p>}
        {user.email && <p>Your Email is {user.email}</p>}
    {user.email && <img src={user.photo} alt="" width="100" height="100" />
}
        </div>
    );
};

export default Login;