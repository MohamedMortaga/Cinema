import React, { useEffect } from 'react'
import style  from './Footer.module.css'
import  logo from "../../Img/lolo.png"

export default function Footer() {
  return  <>
     <footer className='text-white text-center bg-dark p-1  '>
      <div className='border-top rounded'>
        <h1>  <img src={logo} className={style.f} alt=""/>Footer</h1>
       
      </div>
    </footer> 
  </>
  
}
