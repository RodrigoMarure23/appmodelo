import React from 'react'
import "../app.css"

const Aboutus = () => {
  return (
    <div className='container-fluid imagenfondoabout' style={{width:"100%", height:"700px", display:"flex",justifyContent:"center",alignItems:"center", paddingLeft:"50px"}}>
      <div className='container' style={{backgroundColor:"orange", height:'500px',borderRadius:"25px"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"400px"}}>
          <img src="../../src/assets/descarga.png" alt="foto mia" height={"300px"} className='redondo'/>
          <div className=''>
            <h1>-Programador Full Stack</h1>
            <h1>-Html+Css+Javascript+Php+Java</h1>
            <h1>-React/ReactNative/Express/NodeJs/APIsREST</h1>
            <h1>-Bases de datos sql y no sql</h1>
          </div>
        </div>
      </div>
      container
    </div>
  )
}

export default Aboutus