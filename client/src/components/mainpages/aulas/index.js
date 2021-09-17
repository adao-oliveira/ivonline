import React from 'react';
import './aulas.css';
import mod_1 from '../aulas/images/mod_1.png'
import mod_2 from '../aulas/images/mod_2.png'
import mod_3 from '../aulas/images/mod_3.png'
import { Link } from 'react-router-dom'


function Aulas() {
    return (
        <>
            {/* <!-- Pagina --> */}
            <div className="container">
                <div className="row text-center text-lg-left">

                    <div className="col-sm-4 col-md-4">
                        <Link to="/primeiro_modulo" className="d-block mb-4 h-100">
                            <h2 style={{ textAlign: 'center', fontFamily: 'Brandon Grotesque Regular' }}>Primeiro <span style={{ fontFamily: 'Brandon Grotesque Bold' }}>Módulo</span></h2>
                            <img className="img-fluid img-thumbnail" src={mod_1} alt="" />
                        </Link>
                    </div>

                    <div className="col-sm-4 col-md-4">
                        <Link to="/segundo_modulo" className="d-block mb-4 h-100">
                            <h2 style={{ textAlign: 'center', fontFamily: 'Brandon Grotesque Regular' }}>Segundo <span style={{ fontFamily: 'Brandon Grotesque Bold' }}>Módulo</span></h2>
                            <img className="img-fluid img-thumbnail" src={mod_2} alt="" />
                        </Link>
                    </div>

                    <div className="col-sm-4 col-md-4">
                        <Link to="/terceiro_modulo" className="d-block mb-4 h-100">
                            <h2 style={{ textAlign: 'center', fontFamily: 'Brandon Grotesque Regular' }}>Terceiro <span style={{ fontFamily: 'Brandon Grotesque Bold' }}>Módulo</span></h2>
                            <img className="img-fluid img-thumbnail" src={mod_3} alt="" />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Aulas;