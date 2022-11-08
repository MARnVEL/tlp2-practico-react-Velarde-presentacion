import { useContext } from "react"
import { Navigate } from "react-router-dom"

export const PrivateRoutes = ({ children }) => {
  // Colocar el context creado en el archivo 'AuthContext.jsx'
  const { user } = useContext();

  
  return user.logged
          ? 
          : <Navigate to='' />
}
