import { Navigate, useRoutes } from 'react-router-dom'
import Home from './pages/home';
import ProductContainer from "./components/ProductsContainer"
import App from './pages/App';
import Aboutus from './pages/Aboutus';
import CartShopContainer from './components/CartShopContainer';
const Paths = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Navigate to='/home' replace />
    },
    {
      path: '/home',
      element: <App />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: "products",
          element: <ProductContainer />
        },
        {
          path: "shoppingcart",
          element: <CartShopContainer replace/>

        }
        ,
        {
          path: "aboutus",
          element: <Aboutus />
        }

      ]
    }
  ])
  return element
}

export default Paths