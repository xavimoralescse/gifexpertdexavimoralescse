import React from 'react'
import ReactDOM from 'react-dom/client'
import {VamosEmelec}  from './aplicacion'
import {GifExpertApp} from './GifExpertApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VamosEmelec/>
    <GifExpertApp/>
  </React.StrictMode>
)
