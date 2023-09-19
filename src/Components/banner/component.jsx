import React from 'react'
import titlep from './titlephoto.jpg'
import './component.css'
export default function Component() {
  return (
    <div className='main'>
      <div className='in'>
        <h1 className='heading'>Predict price product</h1>
        <div className='textofheading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea expedita amet in odit neque doloribus eum adipisci porro saepe eius blanditiis aperiam tempora, nisi id pariatur sint aut, omnis tenetur?</div>
        <button className="button-73" role="button">Price Predict now</button>
        </div>
      <div className='image'>
        <img className='photo' src={titlep}></img>
      </div>
      </div>
  )
}
