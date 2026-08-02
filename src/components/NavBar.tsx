import { HousePlug } from "lucide-react"

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      <HousePlug size={35} />
      <ul className="flex gap-4 text-white text-lg font-semibold">
        <li className="cursor-pointer">Notifications</li>
        <li className="cursor-pointer">Profile</li>
        <li className="cursor-pointer">Settings</li>
      </ul>
    </div>
  )
}

export default NavBar
