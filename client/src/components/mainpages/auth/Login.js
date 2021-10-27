import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [user, setUser] = useState({
        number: '', senha: ''
    })

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post('/user/login', { ...user })

            localStorage.setItem('firstLogin', true)

            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-content d-flex align-itens-center">

            <form className="form-signin mx-auto" onSubmit={loginSubmit}>
                <div className="text-center mb-4" style={{marginTop:'40px'}}>
                    <h1 className="text-white text-center">Login</h1>
                </div>

                <input className="form-control my-2" type="number" name="number" required placeholder="Nº da Matrícula" value={user.number} onChange={onChangeInput} />
                <input className="form-control my-2" type="password" name="senha" required autoComplete="on" placeholder="Senha" value={user.senha} onChange={onChangeInput} />

                <button className="btn btn-lg btn-block btn-login" type="submit">Acessar</button>

                <div className="opcoes-login mt-5 text-center">
                    <Link to="/" className="mx-2">Recuperar Senha</Link>
                    <span className="text-white">&#128293;</span>
                    <Link to='/register' className="mx-2">Quero cadastrar</Link>
                </div>

            </form>
        </div>
    )
}

export default Login
