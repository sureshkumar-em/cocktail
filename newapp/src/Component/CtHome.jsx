import React from 'react'
import "./CtHome.css"
import Image from "./img/Homeimg.png"
import Emage from "./img/cocktail-removebg-preview.png"
import Drink from "./img/image (3).png"
import Drinks from "./img/image (4).png"


function CtHome() {
  return (
    <div>
      <div className='body'>
        <div className='left'>
          <img src={Image}/>
        </div>
        <div className='right  '>
          <div className='top '>
            <img className='first' src={Emage}/>
            <img className='sec' src={Emage}/>
            <div className='text'>
              <h2>
                CLEOR BAR COCKTAIL DRINKS
              </h2>
            <img className='tlogo' src={Drink}/>
            </div>
          </div>
          <div className='bottom'>
            <div className='h3'>
              <h3>DRINK FOR THE DAY</h3>
              <h4>EVERYDAY ENJOY WITH YOUR MIND IN PARADISE</h4>
              <button>LEARN MORE</button>
              <img src={Drinks}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtHome
