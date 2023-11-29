
// import logo from "file:///C:/Users/User/Downloads/logo%20(1).svg"
import logo from "../images/logo.svg"
import React from 'react'


const Header = ({home,products,gallery,contact,Login}) => {
  return (
    <>
      <div className="main">
  <div className="header">
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <div className="nav">
      <ul id="list">
        <li>{home}</li>
        <li>{products}</li>
        <li>{gallery}</li>
        <li>{contact}</li>
        <li>
          <button id="login">{Login} </button>
        </li>
      </ul>
    </div>
    <div id="sidebar">
      <div className="concept">THE CONCEPT</div>
      <div className="electric">ELECTRIC • B</div>
    </div>
  </div>
</div>

    </>
  )
}

export default Header
