import { useState } from "react"

const Card = ({ user, role, location, img }) => {

  let [isFollowing, setisFollowing] = useState(true)
  return <div className="card">

    <img src={img} alt="profile-pic" />

    <h3>{user}</h3>


    <div className="user-info">
      <h4 className="role">{role}</h4>
      <h4 className="location">{location}</h4>
    </div>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

    <div className="btn">
      <button>View Profile</button>
      <button onClick={() => {
        setisFollowing(!isFollowing)

      }}>{isFollowing ? "Followed" : "Unfollow"}</button>

    </div>
  </div>
}


export default Card