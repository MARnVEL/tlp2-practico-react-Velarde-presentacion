import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { Login, } from '../pages/Login';
import { Register } from '../pages/Register';

import { DashboardRoutes } from "./DashboardRoutes"


export const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/login' element = { 
          <PublicRoutes>
            {/* Colocar el componente a proteger */}
            <Login />
            
          </PublicRoutes>
        } />

        <Route path='/register' element={
          <Register/>
          
        } />

        <Route path='/*' element = {
          <PrivateRoutes>

            <DashboardRoutes/>

          </PrivateRoutes>
          
        } />

      </Routes>

    </BrowserRouter>
  )
}
