import Card from "./Components/Card"
import Nav from "./Components/Navbar"

const users = [
  {
    id: 1,
    user: "Max",
    role: "Frontend Developer",
    location: "Germany",
    img: "https://images.unsplash.com/photo-1769679699993-83e4189c949a?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    user: "Alexu",
    role: "UI Designer",
    location: "Canada",
    img: "https://images.unsplash.com/photo-1769246424497-aa218d467cd1?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    user: "Brandon",
    role: "Backend Developer",
    location: "USA",
    img: "https://images.unsplash.com/photo-1771616504893-e86472b55d0d?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    user: "Aleena",
    role: "Product Designer",
    location: "UK",
    img: "https://images.unsplash.com/photo-1770363758469-386b78e979e2?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    user: "Nancy",
    role: "Full Stack Developer",
    location: "Australia",
    img: "https://images.unsplash.com/photo-1771771425345-ea40b23e8220?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    user: "Rossy",
    role: "Mobile App Developer",
    location: "France",
    img: "https://images.unsplash.com/photo-1771757019600-b33b2dc031ee?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    user: "Faah",
    role: "Data Analyst",
    location: "Netherlands",
    img: "https://images.unsplash.com/photo-1769643501027-b454e657395b?w=500&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    user: "Jimmy",
    role: "DevOps Engineer",
    location: "Singapore",
    img: "https://images.unsplash.com/photo-1772107756927-a3975482b1ef?w=500&auto=format&fit=crop&q=60"
  }
]

const App = () => {
  return <div className="parent">

    {users.map((item) => (
      <Card
        key={item.id}
        user={item.user}
        role={item.role}
        location={item.location}
        img={item.img} />
    ))}







  </div>
}

export default App