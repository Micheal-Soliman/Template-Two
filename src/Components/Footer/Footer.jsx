import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        Designed By 
        <span onClick={() => window.location.replace('https://github.com/Micheal-Soliman')}>Micheal Soliman</span>
    </div>
  )
}

export default Footer