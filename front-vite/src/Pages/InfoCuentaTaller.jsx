import {Link} from 'react-router-dom'
import NavbarTaller from '../Components/NavrbarTaller'

const InfoCuentaTaller = () => {
    return(
        <>
            <NavbarTaller/>
            {/**SE ABRE EL DIV CONTENEDOR DEL PERFIL DE USUARIO*/}
            <div className="container" id="container-img-perfil">
              
              {/**SE ABRE SECCION DE FOTO DE PERFIL*/}         
              <div className="container-fluid bg-primary rounded-bottom-5 position-relativa text-center p-3" style={{height:'10rem'}}>
                  <div className="position-absolute start-50 translate-middle" style={{marginTop: '8rem'}}>
                    <div className="preview-container">
                      <div className="btn-img input-container"> 
                        <input type="file" id="archivo" name="archivo"/>   
                      </div> 
                    </div>
                  </div>
              </div>
              {/**SE CIERRA SECCION DE FOTO DE PERFIL*/}  

              {/**SE ABRE SECCION DE INFORMACION DEL TALLER*/} 
              <div className="container-fluid" style={{marginTop: '6rem'}}>    

                  {/**SE ABRE SECCION DE NOMBRE DEL TALLER*/} 
                 <div className="text-center">
                   <h3 className="">Nombre Del Taller</h3>
                 </div>
                 {/**SE CIERRA SECCION DE NOMBRE DEL TALLER*/}

                 <div className="btn-sm">
                      <button className='btn btn-primary'>Editar perfil</button>       
                     <ul className="lista-datos">
                         <li><i className="bi bi-browser-safari"></i> Direccion de usuario:</li>
                         <li><i className="bi bi-telephone-fill"></i> Telefono:</li>
                         <li><i className="bi bi-bank2"></i> Cargo:</li>
                         <li><i className="bi bi-calendar-event-fill"></i> Fecha de creacion:</li>
                         <Link to="#"><li><i className="bi bi-clock-history"></i> Historial</li> </Link>
                         <li>
                           <div className="dropdown">
                             <Link className="btn btn-primary dropdown-toggle text-right" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Tipos de maquinas
                             </Link>
                           
                             <ul className="dropdown-menu scroll">
                               <li><Link className="dropdown-item text-black" to="#">Mango</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Another action</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Something else here</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Another action</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Something else here</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Something else here</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Another action</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Something else here</Link></li>
                             </ul>
                           </div>
                         </li>
                     </ul>
                 </div>

              </div>
              {/**SE CIERRA SECCION DE INFORMACION DEL TALLER*/} 

            </div>
            {/**SE CIERRA EL DIV CONTENEDOR DEL PERFIL DE USUARIO*/}      

            {/**SE ABRE EL FOOTER*/}         
            <footer className="container-fluit bg-black text-center p-5 mt-4">
              &copy; 2023 Línea de Código
            </footer>
            {/**SE CIERRA EL FOOTER*/}         
        </>
    )
}
export default InfoCuentaTaller