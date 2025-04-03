import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    //    signOut 
    const logOut = ()=>{
        return signOut(auth)
    }

    const updateUserProfile = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }


    // on auth state change 
   useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser)
        setUser(currentUser)
     })
     return ()=>{
        unSubscribe()
     }
   },[])

  
    const userInfo = {
        createUser,
        loginUser,
        user,
        logOut,
        updateUserProfile
      
        
    }

    return (
        <AuthContext.Provider  value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;