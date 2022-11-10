import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const PublicRoutes = ( { children } ) => {
//Cuando le paso un componente, le paso muchos otros compoentes de forma implícita, entonces, tengo que definir exactamen que componente usar, por eso destructuro.
  const { user } = useContext(AuthContext);

  
  return (user.isLogged)
          ? <Navigate to='/*' />
          : children
}
