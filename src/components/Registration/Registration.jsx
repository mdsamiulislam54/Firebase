import React, { useContext } from "react";
import auth from "../FireBase/fireConfig";
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../ContextAPI/UserContext";
import { useNavigate } from "react-router-dom";

const Registration = () => {
const {handleUserData} = useContext(UserContext)
const navigate = useNavigate()
    const hadleForm = e =>{
        e.preventDefault()
    }
    const handleGoogle = ()=>{
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth,provider)
        .then((result)=>{
            const user = result.user;
            const userData = {
                name : user.displayName,
                email : user.email,
                img : user.photoURL,
                status : true
            }
            handleUserData(userData)
            navigate('/user')

        }).catch((error)=>{
            console.log(error)
        })

    }
  return (
    <div className="flex justify-center items-center w-10/12 mx-auto my-10">
        <form onSubmit={hadleForm} className="flex flex-col justify-center items-center bg-gradient-to-r to-gray-300 bg-blue-300 shadow-sm p-10 gap-5">
            <input type="email" name="email" placeholder="Enter your Email"  className="w-full border p-2 border-gray-100 rounded-lg outline-none"/>
            <input type="password" name="email" placeholder="Enter your Password" className="w-full border p-2 border-gray-100 rounded-lg outline-none" />
            <button type="submit" className="btn btn-block">Login</button>
            <span className="text-xl font-bold">Or</span>
            <button onClick={handleGoogle}  className="btn bg-white text-black border-[#e5e5e5]">
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
        </form>
     
    </div>
  );
};

export default Registration;
