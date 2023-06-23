import React from 'react'
import { auth, googleProvider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, googleProvider)
        console.log(result);
        navigate("/")
    }
    return (
        <div className="login">
            <button onClick={signInWithGoogle}>
                Login/SignUp with Google
            </button>
        </div>
    )
}

export default Login