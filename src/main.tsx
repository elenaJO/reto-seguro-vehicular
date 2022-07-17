import React from 'react'
import ReactDOM from 'react-dom/client'
import { VehicleApp } from './VehicleApp'
import { BtnApp } from './components/shared/buttons/BtnApp';

import './styles/styles.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <VehicleApp />
    <BtnApp title={'COTÍZALO'}/>
  </React.StrictMode>
)
