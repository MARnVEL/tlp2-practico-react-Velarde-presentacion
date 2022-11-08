import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Login = () => {


  const [ estado, setEstado ] = useState({
    usuario : '',
    password : ''
  })


  return (


    <div className="container">

      <div className='row'>
        <div className ="col-md-5 
                mx-auto
                align-self-center
                col-lg-6
                col-sm-6
                col-sx-12"
        >

          <form 
            // onSubmit={ handleSubmit }
            className="border p-4 rounded bg-white"
          >
            <p className="text-center bg-danger p-2 text-white rounded">
              Inicia tu sesión! 😎
            </p>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Name user</label>
              <input type="text" className="form-control" id="username" aria-describedby="nameHelp"/>
              <div id="nameHelp" className="form-text">We'll never share your name with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password user</label>
              <input type="password" className="form-control" id="password"/>
            </div>
            
            <button type="submit" className="btn btn-primary">Login</button>
            <NavLink to='/register'>
              Registrate
            </NavLink>

          </form>
        </div>

        

      </div>
    </div>
  )
}
