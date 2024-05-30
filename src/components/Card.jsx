import React, { useState, useContext } from 'react'
import { itemContext } from '../store/itemContext';

const Card = ({fruit}) => {
  const {id,name,description,price} =fruit;
  const {addItem} = useContext(itemContext);
  const [currentAmount,setCurrentAmount]=useState(1);
  const currentAmountNumber = +currentAmount;
  const addToCardHandler= () =>{
    if(currentAmountNumber < 1 || currentAmountNumber > 5){
      alert("Please enter a valid amount")
      return ;
    }
   addItem({
    id,
    name,
    price,
    amount: currentAmountNumber,
   })
    
  }

  return (
    <div className="card">
    <div> 
    <p className="card-title">{fruit.name}</p>
    <p className="card-description">{fruit.description}</p>
    <p className="card-price">$ {fruit.price}</p>
    </div>
    <div>
    <input type="number"
     className="card-input"
      min={1} 
      max={5}
       value={currentAmount}
       onChange={(e)=>{
        setCurrentAmount(e.target.value);
        console.log(currentAmount);
       }}

       />
    <button className="card-button" onClick={addToCardHandler}>+ Add</button></div>
    </div>
    
  )
}

export default Card