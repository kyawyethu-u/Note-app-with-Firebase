import React from 'react'

const Card = ({fruit}) => {
  return (
    <div className="card">
    <div> 
    <p className="card-title">{fruit.name}</p>
    <p className="card-description">{fruit.description}</p>
    <p className="card-price">$ {fruit.price}</p>
    </div>
    <div>
    <input type="number" className="card-input" min={1} max={9} value={1}/>
    <button className="card-button">+ Add</button></div>
    </div>
    
  )
}

export default Card