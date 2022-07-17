import React from 'react'
import ReactDOM from 'react-dom/client'
import { VehicleApp } from './VehicleApp'

import './styles/styles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <VehicleApp />
  </React.StrictMode>
)
