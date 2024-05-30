import React from 'react'
import Nav from '../components/Nav'
import Summary from '../components/Summary'


const Header = (props) => {
  return (
   <section>
    
    <Nav showCardHandler ={props.showCardHandler}/>
    <Summary/>
  
    </section>
  )
}

export default Header