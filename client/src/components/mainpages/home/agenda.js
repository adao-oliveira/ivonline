import React, { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import AgendaItem from '../utils/agendaItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import LoadMore from './LoadMore'


function Home() {
    const state = useContext(GlobalState)
    const [agendar, setAgendar] = state.agendaAPI.agendar
    const [isAdmin] = state.userAPI.isAdmin
    const [loading, setLoading] = useState(false)

    const handleCheck = (id) => {
        agendar.forEach(agenda => {
            if (agenda._id === id) agenda.checked = !agenda.checked
        })
        setAgendar([...agendar])
    }


    if (loading) return <div><Loading /></div>
    return (
        <>
            <div className="container-fluid" style={{marginTop:'150px'}}>

                <div className="row">

                    <h2 className="mx-auto" style={{ color: '#fff', marginTop: '20px' }}>Agenda SNT Carapicuíba</h2>

                    <div className="img-banner">
                        {
                            agendar.map(agenda => {
                                return <AgendaItem key={agenda._id} agenda={agenda} />
                            })
                        }
                    </div>
                </div>

                <LoadMore /> {agendar.length === 0 && <Loading />}
            </div>

        </>
    )
}

export default Home
