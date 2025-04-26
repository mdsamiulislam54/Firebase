import React, { useContext } from 'react'
import { UserContext } from '../ContextAPI/UserContext'

import { signOut } from 'firebase/auth'
import auth from '../FireBase/fireConfig'
import { useNavigate } from 'react-router-dom'

const User = () => {
    const {user,handleUserData} = useContext(UserContext)
    const navigate = useNavigate()


    const handleSignOut = ()=>{
        signOut(auth)
        .then(()=>{
            alert("Logout sucessfully !!")
            handleUserData(null)
            navigate('/')
        }).catch((error)=>{
            console.error(error)
        })
    }
  return (
    <div className='flex justify-center items-center w-10/12 mx-auto flex-col gap-3 mt-10'>
        <img src={user?.img} alt="" />
        <h1>{user?.name}</h1>
        <h2>{user?.email}</h2>

        <button onClick={handleSignOut} className='btn btn-block bg-blue-300'> LogOut</button>
    </div>
  )
}

export default User