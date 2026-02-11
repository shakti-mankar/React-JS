import {  StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let mainobject = useContext(  )

let data = {
  name:"shakti",
  age:16,
  city:"Bhopal"
}



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <mainobject.Provider value={data} >

        <App />
      
      </mainobject.Provider>

    


  
  </StrictMode>,
)


export {mainobject}