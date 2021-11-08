import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [user, setUser] = useState({
        name: '', sobreNome: '', number: '', email: '', senha: '', whatsapp: '', modulo: '', equipe: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="cadastro-content d-flex align-itens-center">
            <form className="form-signin mx-auto" onSubmit={registerSubmit}>
                <h1 className="text-white text-center mb-4">Cadastro</h1>

                <div className="form-row">
                    {/* NOME */}
                    <div className="form-group col-md-6">
                        <input className="form-control" type="text" name="name" required placeholder="Primeiro nome" value={user.name} onChange={onChangeInput} />
                    </div>
                    {/* SOBRENOME */}
                    <div className="form-group col-md-6">
                        <input className="form-control" type="text" name="sobreNome" required placeholder="Sobrenome" value={user.sobreNome} onChange={onChangeInput} />
                    </div>
                </div>
                {/* MATRICULA */}
                <div className="form-group">
                    <input className="form-control" type="number" name="number" required placeholder="Nº da Matrícula" value={user.number} onChange={onChangeInput} />
                </div>
                {/* EMAIL */}
                <div className="form-group">
                    <input className="form-control" type="email" name="email" required placeholder="Email" value={user.email} onChange={onChangeInput} />
                </div>
                {/* SENHA */}
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input className="form-control" type="password" name="senha" required autoComplete="on" placeholder="Senha" value={user.senha} onChange={onChangeInput} />
                    </div>
                    {/* WHATSAPP */}
                    <div className="form-group col-md-6">
                        <input className="form-control" type="number" name="whatsapp" required placeholder="Whatsapp" value={user.whatsapp} onChange={onChangeInput} />
                    </div>
                </div>
                {/* MODULO */}
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <select className="form-control" type="text" name="modulo" required value={user.modulo} onChange={onChangeInput}>
                            <option selected>Módulo</option>
                            <option value="1">Módulo 1</option>
                            <option value="2">Módulo 2</option>
                            <option value="3">Módulo 3</option>
                        </select>
                    </div>
                    {/* EQUIPE */}
                    <div className="form-group col-md-8">
                        <div>
                            <input className="form-control" type="text" name="equipe" required placeholder="Nome da Equipe" value={user.equipe} onChange={onChangeInput} />
                        </div>
                    </div>
                </div>

                {/* CADASTRAR */}
                <div className="justify-content-center">
                    <button className="btn btn-lg btn-block btn-cadastro" type="submit">Cadastrar</button>
                    <Link to="/login"><h1 className="btn btn-lg btn-block mt-4 cad-login">Login</h1></Link>
                </div>

            </form>
        </div >
    )
}

export default Register