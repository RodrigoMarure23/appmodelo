import React, { useState, useContext, useEffect } from 'react'
import ClientSelector from './ClientSelector';
import { ProductsContext } from '../context/ProductsContext';

const CartShopContainer = () => {
  const [fecha, setFecha] = useState();
  const [idCliente, setIdCliente] = useState('');
  const context = useContext(ProductsContext)
  const { productsOrder, setProductsOrder } = context
  const onSubmit = (e) => {
    e.prevenDefault();
  }
  
  return (
    <div className='container-fluid imagenfondocartshop' style={{ width: "100%", height: "700px", display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "50px" }}>
      <div className='container' style={{ backgroundColor: "orange", height: '630px', borderRadius: "25px" }}>
        <div style={{ display: "-ms-grid", textAlign: "center" }}>
          <h1>Orden de Venta</h1>
          <section className='centrar'>
            <form onSubmit={onSubmit}>
              <div>
                <label>Ingresa la fecha de Entrega (!MAYOR A LA ACTUAL!):</label>
                <input value={fecha} onChange={(e) => { setFecha(e.target.value) }} type="date" />
              </div>
              <div style={{ width: "600px", backgroundColor: "lightgrey", height: "400px" }}>
                {productsOrder && productsOrder.map((product, key) => {
                  <div>
                    <h1>{product.nombre}</h1>
                  </div>
                })}
              </div>
              <div>
                <h1></h1>
                <label>Ingresa el ID del cliente (Default= 8425):</label>
                <input value={idCliente} onChange={(e) => { setIdCliente(e.target.value) }} type="text" />
              </div>
              <ClientSelector idcliente={idCliente} />
              <button className='btn btn-success'>Finalizar Compra</button>
            </form>
          </section>

        </div>
      </div>
    </div>
  )
}

export default CartShopContainer