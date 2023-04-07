import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { ProductsContext } from '../context/ProductsContext';
const ProductsContainer = () => {
  const [productsList, setProductsList] = useState()
  const [error, setError] = useState()
  const [products, setProducts] = useState([])
  const context = useContext(ProductsContext)
  const { productsOrder, setProductsOrder } = context
  useEffect(() => {
    const getProductsList = async () => {
      try {
        const res = await axios.post('https://www.infofast.com.mx/Erick/service/productos/', 'user=user_pruebas&&pwd=Pru3B@5.')
        setProductsList(res.data)
      } catch (error) {
        setError(error)
        console.log(error)
      }
    }
    getProductsList()

  }, [products])

  const handleAddProduct = (e, product) => {
    console.log("Producto Clickeado: ", product)
    e.preventDefault()
    console.log("Productos al carrito: ", products)

    const newProduct = {
      nombre: product.nombre,
      Precio: product.Precio,
      id_producto: product.id_producto,
    }
    // console.log("Producto seleccionado: ", newProduct)
    setProducts([newProduct, ...products])
    setProductsOrder(products) // seteamos los productos seleccionados y los mandamos al carrito




  }
  console.log("Productos: ", productsList)
  if (error) return <p>{error.message}</p> // error del fetch
  return (
    <div className='container-fluid imagenfondoproducts' style={{ width: "100%", height: "18500px", display: "flex", justifyContent: "center", paddingLeft: "50px" }}>
      <div className='container ' style={{ backgroundColor: "orange", height: '500px', borderRadius: "25px" }}>
        <div style={{ display: "-ms-grid", textAlign: "center" }}>
          <h1>Lista De Productos Disponibles</h1>
          <section className='row py-4 gy-4 centrar'>
            {productsList && productsList.map((product, key) => (

              <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
                <form onSubmit={(e) => { handleAddProduct(e, product) }}>
                  <article className='card' style={{ width: '250px' }}>
                    <img src="../../src/assets/bolsa.png" alt="imgArticle" />
                    <p id='idProduct' style={{ color: 'black', textDecoration: 'none' }}>{product.id_producto}</p>
                    <p id='nombreProduct' style={{ color: 'black', textDecoration: 'none' }}>{product.nombre}</p>
                    <p id='precioProduct' style={{ color: 'black', textDecoration: 'none' }}>{product.Precio}</p>
                    {/* <label style={{ display: "flex" }}>Cantidad:
                      <input style={{ width: "100px" }} onChange={(e)=>{ Estos eran botones para manejar la cantidad no me dio tiempo de terminar :c
                       setCantidad(e.target.value)
                      }} id='cantidad' type="int" placeholder='numero' />
                    </label>  */}
                    <h1></h1>
                    <button className='btn btn-success' type='submit' >Anadir al Carrito</button>
                  </article>
                </form>


              </div>
            ))}
          </section>
          <a className=' btn btn-success centrar' style={{ height: "80px" }} href='/home/products' >
            Volver Arriba
          </a>

        </div>
      </div>
    </div>
  )
}

export default ProductsContainer