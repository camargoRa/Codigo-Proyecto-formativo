import React from "react" 
import Navbarinic from "../Components/Navbarinic"


const Inicio = () =>{
    return(
        <>
          <Navbarinic/>{/*NAV BAR PRINCIPAL DE INICIO */}
          {/*ABRE iNFONAV*/} 
          <header className="header justify-items-center">
              <nav className="nav d-flex border-top justify-content-center top-none" style={{backgroundColor: "#547AA5"}}>
                  <a href="#Tituloservicios">contacto</a>
                  <a href="#Tituloservicios">Servicios</a>
                  <a href="#Tituloservicios">Sobre nosotros</a>
              </nav>
          </header>
          {/*CIERRA iNFONAV*/}
          {/*ABRE CARRUSEL*/}         
          <div className="container mt-2" id="carrucel">
                  <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src='./images/segunda.jpg' className="d-block w-100" alt="Anuncio"/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="./images/fondo.jpg" className="d-block w-100" alt="Anuncio"/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="images/tercera.jpg" className="d-block w-100" alt=".Anuncio"/>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
          </div>
          {/*CIERRA CARRUSEL*/} 
          {/*ABRE SECCION INFO*/}
          <div className="text-center" id="Tituloservicios">
              <h2>Nuestros servicios</h2>
          </div>
          <div className="container mt-4" id="info">
              <div className="row bg-secondary"style={{borderRadius:'3px'}}>
                <div className=" col-5 p-3">
                  <img className="img-fluid" src="Images/tercera.jpg" alt="" style={{borderRadius: '5%'}}/>
                </div>
                <div className="col-7 p-4 aling-content-center">
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae tenetur, nihil eos, id doloribus repudiandae consectetur cumque dicta praesentium rem sit temporibus voluptates suscipit saepe magnam tempora itaque distinctio!Lorem</span>
                </div>
              </div>
              <div className="row mt-3 bg-secondary" style={{borderRadius: '5px'}}>
                <div className=" col-7 p-3">
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae tenetur, nihil eos, id doloribus repudiandae consectetur cumque dicta praesentium rem sit temporibus voluptates suscipit saepe magnam tempora itaque distinctio!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptatum obcaecati inventore dignissimos quibusdam repellat vero maiores aperiam perferendis, alias culpa ut a porro et. Repellendus perferendis similique facere atque!</span>
                </div>
                <div className=" col-5 p-3">
                  <img className="img-fluid" src="Images/tercera.jpg" alt="" style={{borderRadius: '5%'}}/>
                </div>
              </div>
              <div className="row mt-3 bg-secondary"style={{borderRadius:'3px'}}>
                <div className=" col-5 p-3">
                  <img className="img-fluid" src="Images/tercera.jpg" alt="" style={{borderRadius: '5%'}}/>
                </div>
                <div className="col-7 p-4 aling-content-center">
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, molestiae tenetur, nihil eos, id doloribus repudiandae consectetur cumque dicta praesentium rem sit temporibus voluptates suscipit saepe magnam tempora itaque distinctio!Lorem</span>
                </div>
              </div>
          </div>
          {/*CIERRA SECCION INFO*/}
          {/*ABRE FOOTER*/} 
          <footer className=" bg-black mt-4 container">
              <div className="col-12 ">

              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias quam nihil voluptas fugit voluptates eius provident voluptatem, aspernatur facere, at quasi minima, aut non? Sint voluptas voluptate sapiente officia atque!</p>
          </footer>   
          {/*CIERRA FOOTER*/} 
        </>
    )
}
export default Inicio