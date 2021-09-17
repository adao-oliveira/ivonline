import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import Aulas from './aulas'
import primeiro_modulo from './aulas/primeiro_modulo'
import segundo_modulo from './aulas/segundo_modulo'
import terceiro_modulo from './aulas/terceiro_modulo'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import publicarAgenda from './publicarAgenda/index'
import editAgenda from './editAgenda/editAgenda'

import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/publicarAgenda" exact component={isAdmin ? publicarAgenda : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? publicarAgenda : NotFound} />
            <Route path="/editAgenda" exact component={isAdmin ? editAgenda : NotFound} />

            <Route path="/aulas" exact component={isLogged ? Aulas : NotFound} />
            <Route path="/primeiro_modulo" exact component={primeiro_modulo} />
            <Route path="/segundo_modulo" exact component={segundo_modulo} />
            <Route path="/terceiro_modulo" exact component={terceiro_modulo} />

            <Route path="/cart" exact component={Cart} />


            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
