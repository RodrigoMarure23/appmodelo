import { createContext,useState } from "react";

const ProductsContext = createContext(null)

const ProductsProvider = ({children}) => {
  const [productsOrder, setProductsOrder] = useState([])
  const [sms,setSms] = useState({type:''})




const initialValue= {
  setProductsOrder,
  productsOrder,
  sms
}
  return (
    <ProductsContext.Provider value={initialValue}>
      {children}
    </ProductsContext.Provider>
  )
}

export {ProductsContext,ProductsProvider}