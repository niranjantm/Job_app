import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Jobs from "./Pages/Jobs"

function App() {
 const router = createBrowserRouter([
  {path:"/",element:<Navbar></Navbar>,children:[
    {index:true,element:<Jobs></Jobs>}
  ]}
 ])

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
