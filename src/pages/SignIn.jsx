import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const SignIn = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  console.log(location);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const formData = { email, password };
    console.log(formData);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        toast.error(err.code || err.message)
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
    .then((result) => {
      console.log(result);
      Swal.fire({
        title: "Google login  Successfully",
        icon: "success",
        draggable: true,
      });
    })
    .catch((err)=>{
      toast.error(err.code || err.message)
    })
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-md  shrink-0 shadow-2xl ">
        <button>
          <Link to="/">Back to Home</Link>
        </button>
        <form onSubmit={handleSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="fieldset-label">Password</label>
            <span
              onClick={() => setOpen(!open)}
              className="relative top-8 left-96 z-50"
            >
              {open ? <FaEye></FaEye> : <FaEyeSlash />}
            </span>

            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <input className="btn bg-green-300" type="submit" value="Login" />
            <p>
              If You have no account please{" "}
              <Link to="/signUp" className=" font-bold text-green-400">
                Register
              </Link>
            </p>
            <button
              onClick={handleGoogleLogin}
              className="  w-1/2 btn btn-neutral"
            >
              <FcGoogle />
              Login With Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
