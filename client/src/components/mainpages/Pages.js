import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home'
import DetalhesAgenda from './detalhesAgenda/index'
import Login from './auth/Login'
import Register from './auth/Register'
import Aulas from './aulas'
import primeiro_modulo from './aulas/primeiro_modulo'
import segundo_modulo from './aulas/segundo_modulo'
import terceiro_modulo from './aulas/terceiro_modulo'
import NotFound from './utils/not_found/NotFound'
import publicarAgenda from './publicarAgenda/index'
import editarAgenda from './editarAgenda/index'
import Agenda from './home/agenda'
import Reset from './auth/Reset'
import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detalhes/:id" exact component={DetalhesAgenda} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/publicarAgenda" exact component={isAdmin ? publicarAgenda : NotFound} />
            <Route path="/editar_agenda/:id" exact component={isAdmin ? publicarAgenda : NotFound} />
            <Route path="/editarAgenda" exact component={isAdmin ? editarAgenda : NotFound} />
            <Route path="/agenda" exact component={Agenda} />

            <Route path="/aulas" exact component={isLogged ? Aulas : NotFound} />
            <Route path="/primeiro_modulo" exact component={primeiro_modulo} />
            <Route path="/segundo_modulo" exact component={segundo_modulo} />
            <Route path="/terceiro_modulo" exact component={terceiro_modulo} />

            <Route path="/reset" exact component={Reset} />
            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
