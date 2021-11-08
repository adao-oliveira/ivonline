import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'


function DetalhesAgenda() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [agendar] = state.agendaAPI.agendar
    const [detalhesAgenda, setDetalhesAgenda] = useState([])

    useEffect(() => {
        if (params.id) {

            agendar.forEach(agenda => {
                if (agenda._id === params.id) setDetalhesAgenda(agenda)
            })
        }
    }, [params.id, agendar])

    if (detalhesAgenda.length === 0) return null;

    return (
        <>
            <div className="container-fluid" style={{ marginTop: '150px' }}>
                <div className="row">
                    <img src={detalhesAgenda.images.url} className="img-banner" alt="Banner" />
                    <h3 className="mx-auto mt-5 titulo" style={{ textTransform: 'uppercase' }}><strong>{detalhesAgenda.titulo}</strong></h3>
                </div>

                <div className="container" style={{ marginTop: '2.5rem' }}>
                    <div className="row box-detalhes mt-5">
                        <div className="col-12 text-center">
                            <h5><strong>Detalhes da Agenda</strong></h5>
                        </div>
                        <div className="col-12 text-center">
                            <p>{detalhesAgenda.descricao}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DetalhesAgenda