import { Link } from "react-router-dom"
const NavbarTaller= () => {
    return(
        <>  
            {/*ABRE NAVBAR TALLER*/}
            <nav className="navbar container-fluid bg-primary">
                <div className="container-fluid">
                    <div className="nav-item h-auto col-2 position-relative text-center"><img className="img-thumbnail" style={{borderRadius: '100%', width: '100px'}} src="../images/download.png" alt=""/><div className="text-center"><h3>confeccionssas</h3></div></div>
                    <div className="nav-item  text-center" id="menu">
                        <ul>
                            <li className=""><Link to="#">Historial de peticiones</Link></li>
                            <li className="">  <Link to="/Maquinas">Registrar maquinas</Link></li>
                            <li className=""> <Link to="#">Registro de calificaciones</Link></li>
                            <li className=""><Link to="#">Opciones de usuario</Link> 
                                <ul>
                                <li className=""><Link to="/InfoCuentaTaller">Informacion de la cuenta</Link></li>
                                <li className=""><Link to="/">Cerrar sesión</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
)
}
export default NavbarTaller