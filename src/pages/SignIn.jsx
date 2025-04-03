import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignIn = () => {
  const {loginUser}=useContext(AuthContext)
  const handleSubmit = (event)=>{
    event.preventDefault()
    console.log(event.target)
    const form = event.target 
    const email = form.email.value 
    const password = form.password.value

    const formData = {email,password}
    console.log(formData)
    loginUser(email,password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-md  shrink-0 shadow-2xl ">
        <button>
          <Link to="/">Back to Home</Link>
        </button>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <input type="submit" value="Login" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
