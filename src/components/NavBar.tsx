import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HousePlug, Menu, X } from "lucide-react"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  function handleClick() {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <>
      <div className="flex justify-between items-center p-4 ">
        <NavLink to={"/"}>
          <HousePlug className="cursor-pointer text-white hover:text-black hover:scale-125 duration-150" size={35} />
        </NavLink>
        <ul className="flex justify-center items-center gap-5 text-white text-lg font-semibold">
          <NavLink to={"/notifications"}>
            <li className="cursor-pointer border p-2 rounded hover:bg-black hover:scale-125 duration-150 hidden md:flex">Notifications</li>
          </NavLink>
          <NavLink to={"/profile"}>
            <li className="cursor-pointer border rounded p-2 hover:bg-black hover:scale-125 duration-150 hidden md:flex">Profile</li>
          </NavLink>
          <NavLink to={"/settings"}>
            <li className="cursor-pointer border rounded p-2 hover:bg-black hover:scale-125 duration-150 hidden md:flex">Settings</li>
          </NavLink>
          <NavLink to={"/login"}>
            <li className="cursor-pointer border rounded p-2 hover:bg-black hover:scale-125 duration-150 hidden md:flex">Login</li>
          </NavLink>

          {isMenuOpen ? <X className="flex md:hidden" size={30} onClick={handleClick} /> :
            <Menu className="flex md:hidden" size={30} onClick={handleClick} />}
        </ul>
      </div >

      {isMenuOpen && (
        <ul className="flex md:hidden flex-col  text-white text-lg font-semibold">
          <NavLink to={"/notifications"}>
            <li className="cursor-pointer p-2 rounded hover:bg-sky-600 duration-150">Notifications</li>
          </NavLink>
          <NavLink to={"/profile"}>
            <li className="cursor-pointer p-2 rounded hover:bg-sky-600 duration-150">Profile</li>
          </NavLink>
          <NavLink to={"/settings"}>
            <li className="cursor-pointer p-2 rounded hover:bg-sky-600 duration-150">Settings</li>
          </NavLink>
          <NavLink to={"/login"}>
            <li className="cursor-pointer p-2 rounded hover:bg-sky-600 duration-150">Login</li>
          </NavLink>
        </ul>
      )}
    </>

  )
}

export default NavBar
