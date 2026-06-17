import sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

const dashboard=()=>{
    return(
        <div>
             <Siderbar />
           <Navbar />
           <Outlet/>
        </div>
    )
}
export default dashboardLayout