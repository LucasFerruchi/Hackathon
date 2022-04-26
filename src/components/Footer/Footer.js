import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return ( 
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <Link to="/" className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                            <img src="" alt="" className='mx-2' height='80' />
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold md-2'>IN_Blockchain</li>
                            <li className='text-center'>En este sitio web podrás encontrar toda la información sobre Cripto Monedas</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold md-2'>Enlace</li>
                            <li>
                                <Link to='/#' class='text-reset'>INformación</Link>
                            </li>
                            <li>
                                <Link to='/#' class='text-reset'>INnovación</Link>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold md-2'>Síguenos</li>
                            <li className='d-flex justify-content-between'>
                                <i className="bi bi-facebook"/>
                                <i className="bi bi-instagram"/>
                                <i className="bi bi-twitter"/>
                                <i className="bi bi-youtube"/>
                                
                            </li>
                        </ul>
                        <div className="container">
                            <p className="text-center">Realizada por...</p>

                        </div>



                    </nav>
 
                </div>

            </footer>
        </div>
     );
}
 
export default Footer;