import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";


const SignUp = () => {
  const googleProvider = new GoogleAuthProvider()
  const navigate = useNavigate()
  const userInfo = useContext(AuthContext)
  const {createUser,updateUserProfile}= userInfo

  const handleGoogleLogin = ()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      alert('google login succesfully')
      console.log(result)

    })
  }

  const handleCreateUser = (event)=>{
      event.preventDefault()
      const form = event.target 
      const name = form.name.value 
      const photo = form.photo.value 
      const email = form.email.value
      const password = form.password.value 

      const user ={name,photo,email,password}
      console.log(user)
      createUser(email,password)
      .then(result =>{
        console.log(result.user)
              
          Swal.fire({
            title: "Sing Up Successfully",
            icon: "success",
            draggable: true
          });

        updateUserProfile(name,photo)
        .then(()=>{
          navigate('/')
        })
      })



  }
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
      <button> <Link to="/">Back to Home</Link></button>
        <div className="card-body">
          <form onSubmit={handleCreateUser} className="fieldset">
            <label className="fieldset-label">Name</label>
            <input type="text" name="name" className="input w-full" placeholder="Enter Your Name" />
            <label className="fieldset-label">Photo</label>
            <input type="text" name="photo" className="input w-full" placeholder="Enter Your Photo Url" />
            <label className="fieldset-label">Email</label>
            <input type="email" name="email"  className="input w-full" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" name="password" className="input w-full" placeholder="Password" />
            <input className="btn  bg-green-300" type="submit" value="Sign Up" />
            <p>If you have already account please  <Link to="/signIn" className=" font-bold text-green-400">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
