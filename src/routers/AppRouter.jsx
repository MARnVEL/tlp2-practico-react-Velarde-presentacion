import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { Login, } from '../pages/Login';
import { Register } from '../pages/Register';

import { DashboardRoutes } from "./DashboardRoutes"
import { TodosScreen } from "../pages/TodosScreen";
import { NavBar } from "../ui/NavBar";


export const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/login" element={
            <PublicRoutes>
            {/* Colocar el componente a proteger . Aquí el Login sería el children que recibe PublicRoutes*/}
              <NavBar/>
              <Login />
            </PublicRoutes>
          }
        />



        <Route path='/register' element={
          <Register/>
        } />

        <Route path='/*' element = {
          <PrivateRoutes>
            
            
            <DashboardRoutes/>
            <h1> esto es privado</h1>

            
          </PrivateRoutes>
          
        } />

      </Routes>

    </BrowserRouter>
  )
}
