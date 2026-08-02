import { HousePlug } from "lucide-react"

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      <HousePlug size={35} />
      <ul className="flex gap-5 text-white text-lg font-semibold">
        <li className="cursor-pointer border p-2 rounded hover:bg-black hover:scale-125 duration-150">Notifications</li>
        <li className="cursor-pointer border rounded p-2 hover:bg-black hover:scale-125 duration-150">Profile</li>
        <li className="cursor-pointer border rounded p-2 hover:bg-black hover:scale-125 duration-150">Settings</li>
        <li className="cursor-pointer border rounded p-2 hover:bg-black hover:scale-125 duration-150">Login</li>
      </ul>
    </div>
  )
}

export default NavBar
