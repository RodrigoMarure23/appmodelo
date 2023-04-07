import React from 'react'
import "../app.css"
const Navigationbar = () => {
  return (
    <nav class="navbar navbar-expand navbar-light border" style={{backgroundColor:'orange'}}>
      <div class="container-fluid ">
        <a href="/home"><img src="../../src/assets/tienditalogo.jpg" alt="logotienda" height={"60px"} style={{borderRadius:"50%"}} /></a>
        {/* <a class="navbar-brand" href="/home/products">Tienda Online</a> */}
        <a href="/home/products"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Shop.svg" alt="logotienda" height={"70px"}  style={{paddingLeft:"150px"}}/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" " id="navbarNavDropdown">
          <ul class="navbar-nav fuente">
            <li class="nav-item ">
              <a class="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active" aria-current="page" href="/home/shoppingcart"><img src="../../src/assets/carro-de-la-carretilla.png" alt="" height={"30px"} /></a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/home/aboutus">Acerca de Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-danger" href="/home">Salir</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigationbar