import "../../styles/Sidebar.css"
import { MdGridView } from "react-icons/md";
import { MdHorizontalDistribute } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiBabyThin } from "react-icons/pi";
import { PiBabyCarriageThin } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiBook } from "react-icons/pi";
const Sidebar = () => {
    return (

        <div className="siderbar">
            <div className="sidebar-start">
                <button className="icon-sidebar"><MdHorizontalDistribute className="icon-sidebar" /></button>
                <h1 className="siderbar-tail">TailAdmin </h1>

            </div>
            <p className="paragraphy">menu</p>
            <div className="division">
                <div>
                    <MdGridView className="icon-two" />Dashboard
                    <RiArrowDropDownLine className="icon-one" />

                </div>
                <div className="twice" >
                    <PiBabyThin className="icon-two" />AI Assistant <p className="icon-zero">NEW</p>
                    <RiArrowDropDownLine className="icon-one" />
                </div>
                <div>
                    <PiBabyCarriageThin className="icon-two" />E-Commerce
                    <RiArrowDropDownLine className="icon-one" />
                </div>
                <div>
                    <CiCalendar className="icon-two" />Calendar
                </div>
                <div>
                    <FaRegCircleUser className="icon-two" />User Profile
                </div>
                <div>
                    <PiBook className="icon-two" />Task
                    <RiArrowDropDownLine className="icon-one" />
                </div>
            </div>

        </div>
    )
}
export default Sidebar;