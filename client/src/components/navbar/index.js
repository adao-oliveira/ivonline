import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Navbar() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    const logoutUser = async () => {
        await axios.get('/user/logout')

        localStorage.removeItem('firstLogin')

        window.location.href = "/";
    }

    const adminRouter = () => {
        return (
            <></>
        )
    }

    const loggedRouter = () => {
        return (
            <></>
        )
    }



    return (
        <nav className="navbar navbar-expand-lg">

            <div className="logo">
                <Link to="/">
                    <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631041415/1631040792869_jz6tjc.png" alt="logo_iv_online" style={{ height: '100px' }} />
                </Link>
            </div>

            <button class="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
                aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
                <div class="animated-icon1"><span></span><span></span><span></span></div>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent20">
                <ul className="navbar-nav">

                    <li className="nav-item">
                        <Link className="nav-link" className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/editAgenda">

                            {isAdmin ? 'Editar Agenda' : ''}</Link>
                    </li>

                    <li className="nav-item" style={{ marginRight: '-35px' }}>
                        <Link className="nav-link" to="/publicarAgenda">

                            {isAdmin ? 'Agenda' : ''}</Link>
                    </li>

                    <li className="nav-item">

                        {isAdmin && adminRouter()}

                        {
                            isLogged ? loggedRouter() : <li className="nav-link"><Link to="/login">Login ✥ Register</Link></li>
                        }
                    </li>

                    <li className="nav-item">
                        {
                            isLogged ?
                                <li className="nav-link"><Link to="/aulas">I.V Online</Link></li>
                                : ''
                        }
                    </li>

                    <li className="nav-item">
                        {
                            isLogged ?
                                <li className="nav-link"><Link to="/" onClick={logoutUser}>Sair</Link></li>
                                : ''
                        }
                    </li>

                </ul>
            </div>

        </nav >
    )
}

export default Navbar
