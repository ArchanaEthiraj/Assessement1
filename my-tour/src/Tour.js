import React, { useEffect, useState, } from 'react'
import './Tour.css'
function Tour() {
  const [tours,setTours]=useState([])
  useEffect(()=>{
    fetch('https://course-api.com/react-tours-project')
    .then(response=>response.json())
    .then(tour=>setTours(tour))
  } ,[])
  const handleDelete=(id)=>{
    let newlist = tours.filter(tour => tour.id !== id)
    setTours(newlist) 
  }
  return ( 
    <div>
      <div className='card'>
                    <div class="text-center h1">Our Tours</div>
                    <div>{tours.map(tour => <div key={tour.id}>
            <div class="card w-50">
            <center><img class="img-rounded" src={tour.image} alt="Card cap" width="600" height="400"></img></center>
            <div class="card-body justify-content-center">
              <h5 class="card-title d-flex"><div>{tour.name}</div><div className='m shadow-lg p-2 mb-5 bg-white rounded'> ${tour.price}</div></h5>
              <p class="card-text"></p> 
              <p>{tour.info}</p>
              <div className='text-center'>
              <button className='btn btn-outline-danger ' onClick={()=>handleDelete(tour.id)}>NOT INTERESTED</button></div>
            </div>
          </div>
          </div>)}
          </div>
          </div>
    </div>
  )
}

export default Tour