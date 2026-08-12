import { UserRoundArrowLeft } from "lucide-react"
import { NavLink } from "react-router-dom"

const Profile = () => {
  return (
    <NavLink to='/profile'>
      <div>
        <UserRoundArrowLeft size={50} />
        <h1>Username</h1>
        <button>Share Profile</button>
        <button>Edit Profile</button>
      </div>

    </NavLink>
  )
}

export default Profile
