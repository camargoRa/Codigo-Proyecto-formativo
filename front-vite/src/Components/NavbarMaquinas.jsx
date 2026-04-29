import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMaquinas = () => {
  return (
    <>
        <nav className="navbar container-fluid" style={{backgroundColor: '#547AA5'}}>
                <div className="nav-item h-auto position-relative text-center">
                    <img className="img-thumbnail" style={{borderRadius: '100%', width: '100px'}}   src="../images/download.png" alt=""/>
                    <div className="text-center"><h3>Nombre del taller</h3>
                    </div>
                </div>
                <div className="nav-item  text-center" id="menu">
                    <ul className='list'>
                        <li className='list-item'><Link to="/Paginiciotaller">Volver</Link></li>
                        <li className='list-item'> <Link to="/RegistrarMaquina">Registrar nueva maquina</Link></li>
                    </ul>
                </div>
        </nav>
    </>
  )
}
export default NavbarMaquinas