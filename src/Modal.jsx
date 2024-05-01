import React, { useState } from 'react'
import './App.css'

const Modal = () => {
    const[white,SetCounter]=useState(false)
    const whiteTheme =()=>{
        SetCounter(false)
    }
    const blackTheme =()=>{
        SetCounter(true)
    }
  return (
    <>
    {
        white?(
            <div>
                <button onClick={whiteTheme}>White Theme</button>
            <h1>WELCOM BACK BRO</h1>
            </div>
        ):(
            <div className='black'>
                <button onClick={blackTheme} className='darker'>Dark Theme</button>
            <h1>IT'S DARK THEME</h1>
            </div>
        )

    }
      </>
  )
}

export default Modal
