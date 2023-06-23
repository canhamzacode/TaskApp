import React from 'react'
import TaskList from "../assets/image/TaskList.jpg"
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className='hero__container'>
            <div>
                <img src={TaskList} alt="" />
            </div>
            <div className='rightHero'>
                <h1>Welcome To MyTask The place to keep you productive and inline with deadline</h1>
                <p>
                    Stay organized and manage your day-to-day with Microsoft To Do. Make shopping lists or task lists, take notes, record collections, set reminders and more to improve your productivity and focus on what matters.
                </p>
                <Link to={"/login"}>
                    <button>
                        Get Started
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Main