import React from 'react'
import {CloseOutlined} from '@ant-design/icons';
import "./Banner.css"

function Banner({ setNewUser }) {
  return (
    <div className='banner' onClick={() => { setNewUser(false)  }}>
        <img  className='banner-item' src="https://placekitten.com/200/300" alt="cat" style={{ height: "40px", width: "40px", padding:"7px"}}/>
        <p className='banner-item'><b>Rates are still low.</b></p>
      <p className='banner-item'>  See if you can save by finding a lender to refinance or prepare to buy.</p>
      <p><a className='banner-item' href='https://www.zillow.com/mortgages/' style={{ color: "#0d4599", textDecoration: "none"}}><b>Get Started</b></a></p>
      <CloseOutlined className='exit' />
    </div>
  )
}

export default Banner