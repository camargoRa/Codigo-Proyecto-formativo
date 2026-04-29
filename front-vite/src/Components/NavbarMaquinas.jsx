import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMaquinas = () => {
  return (
    <>
        <nav class="navbar container-fluid" style={{backgroundColor: '#547AA5'}}>
                <div class="nav-item h-auto position-relative text-center">
                    <img className="img-thumbnail" style={{borderRadius: '100%', width: '100px'}}   src="../images/download.png" alt=""/>
                    <div className="text-center"><h3>Nombre del taller</h3>
                    </div>
                </div>
                <div class="nav-item  text-center" id="menu">
                    <ul className='list'>
                        <li className='list-item'><Link to="/Paginiciotaller">Volver</Link></li>
                        <li className='list-item'> <a href="Registra_nueva_maquina.html">Registrar nueva maquina</a></li>
                    </ul>
                </div>
        </nav>
    </>
  )
}

export default NavbarMaquinas