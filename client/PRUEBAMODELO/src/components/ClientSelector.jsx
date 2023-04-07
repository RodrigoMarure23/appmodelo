import React, { useState, useEffect } from 'react'
import axios from "axios"

const ClientSelector = ({ idcliente:IDCLIENTE }) => {
  const [clientes, setClientes] = useState([])
  const [error, setError] = useState()
  const [cliente,setCliente]=useState([])
  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await axios.post('https://www.infofast.com.mx/Erick/service/clientes/', 'user=user_pruebas&&pwd=Pru3B@5.')
        setClientes(res.data)
        setCliente(result)

      } catch (error) {
        setError(error)
        console.log(error)
      }
    }
    getClients()
  }, [IDCLIENTE])
  // console.log("Cliente encontrado: ", encontrado)
  // console.log("clientes: ", clientes)
        console.log("clientes de axios: ", clientes)
        const result = clientes.filter(cliente => cliente.id_cliente===IDCLIENTE)
        console.log("resultado filter: ", result)
    if(result.length>0) {
      return(
        <div>
          <h1>Cliente encontrado</h1>
        </div>
      )
    }else{
      return(
        <div>
          <h1>Ingrese un numero de cliente valido</h1>
        </div>
      )
    }
        
  if (error) return <p>{error.message}</p> // error del fetch
  return (
    <div>
      <h1  style={{display:"none"}}>!Cliente encontrado!</h1>
      
    </div>

  )
}

export default ClientSelector