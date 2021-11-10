import React, { useContext, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavStyles = styled.nav`
.logo {
    width: 80%;
    margin-top: 20px;
  }
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  background: #111;
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      margin-top: 3%;
      &:hover {
        background-color: #1E1E1E;
      }
    }
    a {
      display: inline-block;
      font-family: 'Roboto Condensed', sans-serif;
      padding: 1rem 5px;
      font-size: 25px;
      color: #fff;
      outline: none;
    }
    .dropdown-menu a {
        font-size: 15px !important;
    }
    .active {
      color: #fff;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    margin-top: -2%;
    color: #fff;
    font-size: 50px;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
    font-size: 50px;
    color: #fff;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 2rem;
      transition: 0.3s ease transform;
      background-color: #1E1E1E;
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {

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

    const [showNav, setShowNav] = useState(false);

    return (
        <NavStyles>
            <div
                className="mobile-menu-icon"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
            >
                <MdMenu />
            </div>

            <div className="logo">
                <Link to="/">
                    <img src="https://res.cloudinary.com/dahse0ek8/image/upload/v1631041415/1631040792869_jz6tjc.png" alt="logo_iv_online" style={{ height: '100px' }} />
                </Link>
            </div>

            <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
                <div
                    className="closeNavIcon"
                    onClick={() => setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}
                >
                    <MdClose />
                </div>
                <li>
                    <NavLink
                        to="/"
                        exact
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        Home
                    </NavLink>
                </li>
                {
                    isLogged ?
                        <li>
                            <NavLink
                                to="/agenda"
                                onClick={() => setShowNav(!showNav)}
                                role="button"
                                onKeyDown={() => setShowNav(!showNav)}
                                tabIndex={0}
                            >
                                Agenda
                            </NavLink>
                        </li>
                        : ''
                }
                {
                    isLogged ?
                        <li>
                            <NavLink
                                to="/aulas"
                                onClick={() => setShowNav(!showNav)}
                                role="button"
                                onKeyDown={() => setShowNav(!showNav)}
                                tabIndex={0}
                            >
                                I.V Online
                            </NavLink>
                        </li>
                        : ''
                }

                {/* MENU ADMIN */}
                {isAdmin ?
                    <div class="btn-group dropAdmin dropleft">
                        <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-plus"></i> Opções<span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu" style={{ backgroundColor: '#111' }}>
                            <li>
                                <NavLink
                                    to="/editarAgenda"
                                    onClick={() => setShowNav(!showNav)}
                                    role="button"
                                    onKeyDown={() => setShowNav(!showNav)}
                                    tabIndex={0}
                                >
                                    {isAdmin ? 'Editar Agenda' : ''}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/publicarAgenda"
                                    onClick={() => setShowNav(!showNav)}
                                    role="button"
                                    onKeyDown={() => setShowNav(!showNav)}
                                    tabIndex={0}
                                >
                                    {isAdmin ? 'Publicar Agenda' : ''}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/publicarAula"
                                    onClick={() => setShowNav(!showNav)}
                                    role="button"
                                    onKeyDown={() => setShowNav(!showNav)}
                                    tabIndex={0}
                                >
                                    {isAdmin ? 'Publicar Aula' : ''}
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    : ''}

                {/* END */}

                <li>
                    <NavLink
                        to="/login"
                        onClick={() => setShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => setShowNav(!showNav)}
                        tabIndex={0}
                    >
                        {isAdmin && adminRouter()}

                        {
                            isLogged ? loggedRouter() : 'Login ✥ Register'
                        }
                    </NavLink>
                </li>
                <li className="nav-item">
                    {
                        isLogged ?
                            <li className="nav-link"><Link to="/" onClick={logoutUser}>Sair</Link></li>
                            : ''
                    }
                </li>
            </ul>
        </NavStyles>
    )
}