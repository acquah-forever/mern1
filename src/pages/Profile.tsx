import { UserRoundArrowLeft } from "lucide-react"
import { NavLink } from "react-router-dom"

const Profile = () => {
  return (
    <NavLink to='/profile' className='grid grid-cols-1'>
      <div>
        <div className="border rounded-full w-25 h-25 flex justify-center items-center bg-gray-400">
          <UserRoundArrowLeft size={55} />
        </div>
        <h1 className="text-2xl font-semibold">Username</h1>
        <div>
          <button>Share Profile</button>
          <button>Edit Profile</button>
        </div>
      </div>

    </NavLink>
  )
}

export default Profile
