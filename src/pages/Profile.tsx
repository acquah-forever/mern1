import { UserRoundArrowLeft } from "lucide-react"
import { NavLink } from "react-router-dom"

const Profile = () => {
  return (
    <NavLink to='/profile'>
      <div className="mb-7">
        <div className="border rounded-full w-25 h-25 flex justify-center items-center bg-gray-400">
          <UserRoundArrowLeft size={55} />
        </div>
        <div className="flex items-center space-x-5">
          <h1 className="text-2xl font-semibold">Username</h1>
          <button className="btn btn-soft btn-primary text-lg">Get Verified</button>
        </div>
        <h1>@username</h1>
      </div>
      <div className='flex items-center space-x-3'>
        <button className="btn btn-primary px-7 py-6 border-black border-2">Share Profile</button>
        <button className="btn btn-error px-7 py-6 border-white border-2 text-white">Edit Profile</button>
      </div>
      <div className="flex items-center mt-10">
        <div className="grow border-t border-gray-300 border-2"></div>
        <div className="grow border-t border-gray-300 border-2"></div>
      </div>
    </NavLink>
  )
}

export default Profile
