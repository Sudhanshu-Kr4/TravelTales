import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { IoBookmarksSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";


function NavBar() {
  const [open, setOpen] = useState(true);

  const menuItems = [
    {
      icons : <IoHome size={20} />,
      label : 'Home',
      to : '/'
    },
    {
      icons : <IoBookmarksSharp size={20} />,
      label : 'Saved',
      to : '/saved'
    },
    {
      icons : <FaUserAlt size={20}/>,
      label : 'Profile',
      to : '/profile'
    },
    
  ]

  return (
    <div className="flex m-0 p-0 min-h-screen bg-slate-700">
    <nav className={`shadow-md  bg-slate-700 fixed top-0 left-0 min-h-screen p-2 flex flex-col text-white duration-500 ${open ? 'w-60' : 'w-16'}`}>

      <div className=" px-4 py-2 h-20 flex  justify-between items-center flex-2">
        <p className={` text-2xl font-medium font-sans ${!open && 'w-0 translate-x-24'}  duration-500 overflow-hidden`} >TravelTales</p>
        <div><MdMenuOpen size={30} className={`duration-500 cursor-pointer ${!open && 'rotate-180'}`}  onClick={() => {setOpen(!open)}}/></div>
      </div>

      <ul className="flex-1 pt-10">
        {menuItems.map((item,index) => (
            <li key={index}>
              <NavLink to={item.to} className={ ({isActive}) => ` ${open ? 'pl-10' : 'px-4'} py-3 my-4 hover:bg-blue-400 ${isActive ? 'bg-gray-400' : null} rounded-md duration-300 cursor-pointer flex gap-7 items-center`}>
              <div>{item.icons}</div>
              <p className={` ${!open && 'w-0 -translate-x-60'}  duration-500 overflow-hidden`}>{item.label}</p>
              </NavLink>
            </li>
        ))}
      </ul>  

      <div className={`flex items-center justify-between py-3 flex-2 ${open ? 'px-10' : 'px-4'}`}> 
        <div><IoLogOutOutline size={30} className="cursor-pointer"/></div>
        <p className={`${!open && 'w-0 translate-x-60'} duration-500 overflow-hidden`}>Sign Out</p>
      </div>





    </nav>

      <div
        className={`flex-1 min-h-full  bg-slate-500  pb-0 ${open ? 'pl-16 ml-60' : 'pl-28 ml-16' } duration-500 `}// Adjust the marginLeft for smooth transition
      >
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
