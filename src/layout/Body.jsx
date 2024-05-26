import React from 'react'
import Card from '../components/Card'

const fruits = [
  {id: 1,
   price: 20.58,
   name: "Durian",
   description: "Fresh Durian form Myanmar",
  },
  {id: 2,
    price: 2.10,
    name: "Mangoe",
    description: "Fresh Mangoe form Myanmar",
   },
   {id: 3,
    price: 5,
    name: "Orange",
    description: "Fresh Orange form Myanmar",
   },
   {id: 4,
    price: 8.55,
    name:"Pineapple",
    description: "Fresh pineapple form Myanmar",
   },
   {id: 5,
    price: 4.23,
    name:"Grape",
    description: "Fresh Grape form Myanmar",
   }
]

const Body = () => {
  return (
    <section className="body">
          {
          fruits.map((fruit)=>
          <Card key={fruit.id} fruit={fruit}/>
          )}
    </section>
    
  )
}

export default Body