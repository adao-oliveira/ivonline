import React, { Component } from 'react'
import axios from 'axios'

export default class Reset extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email
        };

        axios.post('reset', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    render() {
        return (
            <div className="login-content d-flex align-itens-center">
                <form className="form-signin mx-auto" onSubmit={this.handleSubmit}>
                    <div className="text-center mb-4" style={{ marginTop: '40px' }}>
                        <h1 className="text-white text-center">Recuperar Senha</h1>
                    </div>

                    <input className="form-control" type="email" name="email" required placeholder="Email" onChange={e => this.email = e.target.value} />

                    <button className="btn btn-lg btn-block btn-login mt-4" type="submit">Recuperar Senha</button>

                </form>
            </div>
        )
    }
}