import {  StrictMode,  } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'

let mainobject = createContext()

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