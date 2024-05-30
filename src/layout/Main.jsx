import React from 'react'
import Header from './Header'
import Body from './Body'
import Backdrop from './Backdrop'
import { useState } from 'react'


const Main = () => {
  const [showCard,setShowCard] = useState(false);
  const showCardHandler =()=>{
    setShowCard(true);
  } ;
  const hideCardHandler =()=>{
    setShowCard(false);
  };
  return (
    <section>
     
     <Header showCardHandler={showCardHandler}/>
     <Body/>
    <Backdrop showCard ={showCard} hideCardHandler={hideCardHandler}/>
    </section>
  )
}

export default Main