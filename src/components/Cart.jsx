import React from 'react'
import CartItem from './CartItem';

const fruits = [{id: 1,
     price: 20.58,
     name: "Durian",
     description: "Fresh Durian form Myanmar",
     quantity: 2,
    },
    {id: 2,
      price: 2.10,
      name: "Mangoe",
      description: "Fresh Mangoe form Myanmar",
      quantity: 1,
     },
     {id: 3,
      price: 5,
      name: "Orange",
      description: "Fresh Orange form Myanmar",
      quantity: 2,
    },
    ];

const Cart = () => {
  return (
  <section className="cart-box">
    <h2>Cart</h2>
   {fruits.map((fruit)=>(
    <CartItem key={fruit.id} fruit={fruit}/>
   ))}
   <hr/>
   <div className='total'>
    <h3>Total price</h3>
    <p>$ 3000</p>
   </div>
   <div className='btns'>
    <button className='cancel-btn'>Cancel</button>
    <button className='order-btn'>Order</button>
   </div>
  </section>);
};

export default Cart