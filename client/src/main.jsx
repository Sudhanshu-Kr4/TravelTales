import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom";
import Layout from './pages/layout.jsx'
import Posts from './components/posts.jsx'
import Profile from './pages/profile.jsx'
import Saved from './pages/saved.jsx'
import Home from './pages/home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='saved' element={<Saved/>} />
      <Route path='profile' element={<Profile/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
