import React from 'react'
import "./CtFooter.css"
import Fb from "./img/facebook.jpeg"
import Insta from "./img/insta.jpeg"
import Twit from "./img/twitter.png"
import Wa from "./img/whatsapp.jpeg"
 

function CtFooter() {
  return (
    <div>
    <div className='whole'>
    <div className='Foot'>
      <div className='List'>
      
          <a href='#'>About</a>
          <a href='#'>Contact us</a>
          <a href='#'>Customer Support</a>
          <a href='#'>Margarita Drink</a>
          <a href='#'>Martini Drink</a>
      </div>
      <div className='Goes'>
        <i className='fa fa-facebook-square'></i>
        <i className='fa fa-instagram'></i>
        <i className='fa fa-twitter-square'></i>
        <i className='fa fa-whatsapp'></i>
      </div>
      <div className='Terms'>
       <a href='#'>TERMS & CONDITION </a>  <span> | </span> 
        <a href='#'> PRIVACY </a> <span>  | </span> 
        <a href='#'> LEGAL NOTICE</a> 
<i className="fa fa-heart"></i>

      </div>
        <div className='Cr'>
         <p>
          
          &copy; Copyrights 2025 All Rights Reserved. 
         </p>
         </div>
        </div>
        </div>
    </div>
  )
}

export default CtFooter
