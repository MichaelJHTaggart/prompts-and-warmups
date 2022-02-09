import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
   <div className="navbar">
    <ul>
     <li>Buy</li>
     <li>Rent</li>
     <li>Sell</li>
     <li>Home Loans</li>
     <li>Agent Finder</li>
    </ul>
    {/* image of a cat */}
    <img src="https://placekitten.com/200/300" alt="cat" style={{ height: "40px", width: "40px", padding: "7px", cursor:"pointer" }} />
    <ul>
     <li>Manage Rentals</li>
     <li>Advertise</li>
     <li>Help</li>
     <li>Sign in</li>
    </ul>
   </div>
  )
}

export default NavBar