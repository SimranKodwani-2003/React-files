import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/home'
import About from './Components/About/about'
import Contact from './Components/Contact-us/contact'
import User from './Components/User/user'
import Github, { githubinfoloader } from './Components/Github/Github'


// const router=createBrowserRouter([{
//   path:"/",
//   element:<Layout/>,
//   children:[{
//     path:"",
//     element:<Home/>
//   },
//   {
//     path:"about",
//     element:<About/>
//   },

//   {
//     path:"Contact",
//     element:<Contact/>
//   }
//   ]   

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> {/* Index route for the home page */}
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
      loader={githubinfoloader}
      path="Github" 
      element={<Github />} />

    </Route>
    
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
