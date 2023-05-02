import React from 'react'
import './MainTitle.css'

function MainTitle({title, desc}) {
  return (
    <div className='main-title'>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default MainTitle