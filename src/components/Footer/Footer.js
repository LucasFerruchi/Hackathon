import React from "react";
import {Link} from "react-router-dom";
import blockchainicone from "../../img/Logo/blockchainicone.png";
import "./Footer.css";

const Footer = () => {
    return ( 
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <Link to="/" className='col-12 col-md-3 '>
                            <img src={blockchainicone} href="/" alt="LogoInBlockchain" className='mx-2' height='100' />
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='md-2 footer_title'>IN_Blockchain</li>
                            <li className=''>En este sitio web podrás encontrar toda la información sobre Cripto Monedas</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='md-2 footer_title'>Enlace</li>
                            <li>
                                <Link to='/#' class='text-reset'>INformación</Link>
                            </li>
                            <li>
                                <Link to='/#' class='text-reset'>INnovación</Link>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className=' md-2 footer_title'>Síguenos</li>
                            <li className='d-flex justify-content-between mt-4'>
                                <a href="https://www.facebook.com//" target="_blank" className="text-reset footer_icons"> <i className="bi bi-facebook"/></a>
                                <a href="https://www.instagram.com/" target="_blank" className="text-reset footer_icons"> <i className="bi bi-instagram" /></a>
                                <a href="https://twitter.com/" target="_blank" className="text-reset footer_icons"> <i className="bi bi-twitter"/></a>
                                <a href="https://www.youtube.com//" target="_blank" className="text-reset footer_icons"> <i className="bi bi-youtube"/></a>
                                
                            </li>
                        </ul>
                        <hr className="mb-1 mt-1" />
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