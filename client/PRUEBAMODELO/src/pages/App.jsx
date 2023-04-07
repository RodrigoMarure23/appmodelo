import Navigationbar from "../components/Navigationbar"
import { Outlet } from "react-router-dom"
import { Suspense } from 'react'
function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <div class="container-fluid ">
        <Suspense fallback={<p>...Loading Content...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default App
