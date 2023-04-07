import React from 'react'
import "../app.css"
 
const Home = () => {
 
  
 
    
  return (
    <div className='centrar imagenfondo'>
      <div style={{display:'-ms-grid'}}>
        <h1 style={{textAlign:"center", fontSize:"80px"}}>Bienvenido</h1>
        <a className=' btn btn-success centrar' style={{height:"80px"}}href='/home/products' >
          Hacer una Compra en la Tienda online
        </a>
      </div>
        
    </div>
  )
} 

export default Home