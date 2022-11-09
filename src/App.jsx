import { useReducer } from 'react'
import { AuthContext } from './context/AuthContext'
import { AppRouter } from './routers/AppRouter'
import './App.css'
import { authReducer } from './reducers/authReducer'



function App() {
  // const user = {
  //   isLogged: true,
  //   username: ''
  // }

  const init = ( ) => {
    //!Para testear el código debría cambiar el estado de "isLogged" acá. Si lo paso a false no debería dejarme entrar a las rutas privadas. Pero tengo un problema: el cambio de true a false sólo tiene efecto después de recargar/actualizar la página.
    return JSON.parse(localStorage.getItem('user')) || {isLogged: false}
  }

  // esta contante almacena los datos del usuario, y la acción dispatchUser
  const [user, dispatchUser] = useReducer(authReducer, {}, init )

  //El segundo parámetro es un estado inical, si en algún lugar tenemos un estado inicial QUE NO COINCIDE CON EL ESTADO INICAL DEL COMPONENTE, con el init se VA A BUSCAR EL ESTADO EN ESE OTRO LUGAR Y SE establecen los datos del estado inial DEL 2DO PARÁMETRO.
  //*useReducer RETORNA UN NUEVO ESTADO.

  //!Cuando el context cambia el estado; este cambia todos los estados de los componentes que tiene en su interior y ESTOS SE VUELVEN A RENDERIZAR
  

  return (
    <AuthContext.Provider value={{
      user,
      dispatchUser
    }}>

      <AppRouter />

    </AuthContext.Provider>
  )
}

export default App
