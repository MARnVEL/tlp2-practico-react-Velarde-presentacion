import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// Corregir los estilos y modificar las etiquetas "Link" por los componentes NavLink 
// que provee react-router-dom
export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark text-light ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          HOME
        </NavLink>

        <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse"                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              
              <NavLink className="nav-link active" aria-current="page" to="/todosScreen">
                Todo's
              </NavLink>

            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Link</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link disabled">Disabled</Link>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
