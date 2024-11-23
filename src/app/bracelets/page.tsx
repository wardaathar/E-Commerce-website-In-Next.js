import React from 'react'

const Bracelets = () => {

  const braceletsData =[
    {id:1 ,name:'Pinkish golden', price:'999', description:'More colors,sizes are availables', image:'/2.jpg'},
    {id:2 ,name:'Light Infinity', price:'1050', description:'More colors,sizes are availables', image:'/3.jpg'},
    {id:3,name:'Golden flower', price:'1200', description:'More colors,sizes are availables', image:'/4.jpg'},
    {id:4 ,name:'Simple whity', price:'600', description:'More colors,sizes are availables', image:'/5.jpg'},
    {id:5 ,name:'Mini stars', price:'900', description:'More colors,sizes are availables', image:'/6.jpg'},
    {id:6 ,name:'Chainlets', price:'1000', description:'More colors,sizes are availables', image:'/download1.jpg'},


  ]
  return (
    <div>
        <div className="bracelets">
          {braceletsData.map((bracelets) => (
            <div key={bracelets.id} className="bracelets-card">
              <img  src={bracelets.image} alt={bracelets.name}/> 
              <h3>{bracelets.name}</h3>
              <p>{bracelets.description}</p>
              <div className='price'>${bracelets.price}</div>
              <button>Add to Card</button>
            </div>
          

          )) }
        </div>
    </div>
  )
} 

export default Bracelets