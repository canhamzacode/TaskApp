import { Outlet } from "react-router-dom"
import Navbar from "./component/Navbar"

const Layout = () => {
    return (
        <div className="box">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout