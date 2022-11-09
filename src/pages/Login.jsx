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

          <main className='form-signin w-100 m-auto'>
            <form 
              // onSubmit={ handleSubmit }
              className="border p-4 rounded bg-white"
            >
              <p className="text-center bg-danger p-2 text-white rounded">
                Inicia tu sesión! 😎
              </p>

              <div className="mb-3">
                {/* Input para usuario */}
                <label htmlFor="username" className="form-label"> Username </label>
                <input 
                  type="text"
                  name="username"
                  autoComplete="off"
                  className="form-control mb-3"
                  // onChange = { handleInputChange }
                  // value={username}
                  // autoFocus={true}
                  id="username"
                  aria-describedby="nameHelp"
                />
                <hr />
                <div id="nameHelp" className="form-text text-center">
                  We'll never share your name or password with anyone else.
                </div>
                <hr />
              </div>

              <div className="mb-3">
                {/* Input para contraseña */}
                <label htmlFor="password" className="form-label"> Password user: </label>

                <input 
                  type="password"
                  name="password"
                  autoComplete="off"
                  className="form-control mb-3"
                  id="password"
                  // onChange={handleInputChange}
                  // value={password}
                  // autoFocus={true}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-primary mt-4"
              >
                  Login
              </button>

              <button
                type="submit"
                className="btn btn-danger mt-4 d-flex align-content-end"
              >
                <NavLink to='/register'>
                  Registrate
                </NavLink>

              </button>
              

              

            </form>
          </main>

          
        </div>

      </div>
    </div>
  )
};
