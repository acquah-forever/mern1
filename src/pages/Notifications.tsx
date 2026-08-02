import { NavLink } from "react-router-dom"

const Notifications = () => {
  return (
    <NavLink to={"/notifications"}>
      <div>
        <h2>Notifications</h2>
      </div>
    </NavLink>
  )
}

export default Notifications
