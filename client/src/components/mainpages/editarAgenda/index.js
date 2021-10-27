import React, { useContext, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import AgendaItem from '../utils/agendaItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import LoadMore from './LoadMore'


function Agendar() {
    const state = useContext(GlobalState)
    const [agendar, setAgendar] = state.agendaAPI.agendar
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.agendaAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) => {
        agendar.forEach(agenda => {
            if (agenda._id === id) agenda.checked = !agenda.checked
        })
        setAgendar([...agendar])
    }

    const deleteAgenda = async (id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', { public_id }, {
                headers: { Authorization: token }
            })
            const deleteAgenda = axios.delete(`/api/agendar/${id}`, {
                headers: { Authorization: token }
            })

            await destroyImg
            await deleteAgenda
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () => {
        agendar.forEach(agenda => {
            agenda.checked = !isCheck
        })
        setAgendar([...agendar])
        setIsCheck(!isCheck)
    }

    const deleteAll = () => {
        agendar.forEach(agenda => {
            if (agenda.checked) deleteAgenda(agenda._id, agenda.images.public_id)
        })
    }

    if (loading) return <div><Loading /></div>
    return (
        <>
            <div className="container-fluid" style={{marginTop:'150px'}}>

                {
                    isAdmin &&
                    <div className="delete-all">
                        <span>Selecionar tudo</span>
                        <input type="checkbox" checked={isCheck} onChange={checkAll} />
                        <button onClick={deleteAll}>Deletar tudo</button>
                    </div>
                }
                <div className="row">

                    <h2 className="mx-auto" style={{ color: '#fff', marginTop: '20px' }}>Agenda SNT Carapicuíba</h2>

                    <div className="img-banner">
                        {
                            agendar.map(agenda => {
                                return <AgendaItem key={agenda._id} agenda={agenda}
                                    isAdmin={isAdmin} deleteAgenda={deleteAgenda} handleCheck={handleCheck} />
                            })
                        }
                    </div>
                </div>

                <LoadMore />
                {agendar.length === 0 && <Loading />}
            </div>

        </>
    )
}

export default Agendar