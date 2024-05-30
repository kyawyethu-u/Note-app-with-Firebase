import React from 'react'
import Cart from '../components/Cart'



const Backdrop = (props) => {
  return (
    <>

     {props.showCard && (
      <><section className="backdrop" onClick={props.hideCardHandler} />
      <Cart hideCardHandler={props.hideCardHandler}/></>
      
      )
     }
  
    </>
    
  )
}

export default Backdrop