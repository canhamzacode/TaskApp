import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import { auth } from '../config/firebase'

const Navbar = () => {
    const [user] = useAuthState(auth)
    const signUserOut = async () => {
        await signOut(auth)
    }
    return (
        <div className='navbar'>
            <Link to="/" className='logo'>
                MyTaskApp
            </Link>
            <div className='navigations'>
                {!user && <div>
                    <Link to="/login">Login</Link>
                </div>}
                {user && <div>
                    <Link to="/tasks">My Tasks</Link>
                </div>}
                {user && <div>
                    <Link to="/create-task">Create Task</Link>
                </div>}
                <div className="profileInfo">
                    {user && (
                        <>
                            <div>
                                <h4>
                                    {user?.displayName}
                                </h4>
                            </div>
                            <div className="profileImg">
                                <img src={user?.photoURL || ""} alt="profile" />
                            </div></>
                    )}
                </div>
                {user && <button onClick={signUserOut} >Log Out</button>}
            </div>
        </div>
    )
}

export default Navbar