import { UserRoundArrowLeft } from "lucide-react"
import { NavLink } from "react-router-dom"

const Profile = () => {
  return (
    <NavLink to='/profile'>
      <div className="mb-7">
        <div className="border rounded-full w-25 h-25 flex justify-center items-center bg-gray-400">
          <UserRoundArrowLeft size={55} />
        </div>
        <h1 className="text-2xl font-semibold">Username</h1>
      </div>
      <div className='flex items-center space-x-3'>
        <button className="btn btn-primary border border-black border-2">Share Profile</button>
        <button className="btn btn-info border border-white border-2">Edit Profile</button>
      </div>
    </NavLink>
  )
}

export default Profile
