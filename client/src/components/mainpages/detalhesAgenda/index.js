import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import AgendaItem from '../utils/agendaItem/index'


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
            <div className="container-fluid" style={{marginTop:'150px'}}>
                <div className="row">
                    <img src={detalhesAgenda.images.url} className="img-banner" alt="Banner" />
                    <h3 className="mx-auto mt-5 titulo" style={{textTransform:'uppercase'}}><strong>{detalhesAgenda.titulo}</strong></h3>
                </div>

                <div className="container">
                    <div className="row mt-5 d-flex justify-content-around ">
                        <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                            <i className="fas fa-ticket-alt fa-2x"></i>
                            <h5><strong>Tipo</strong></h5>
                            <span className="mt-3">{detalhesAgenda.tipoAgenda}</span>
                        </div>

                        <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                            <i className="fas fa-calendar-alt fa-2x"></i>
                            <h5><strong>Data</strong></h5>
                            <span className="mt-3">{detalhesAgenda.data}</span>
                        </div>

                        <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                            <i className="fas fa-clock fa-2x"></i>
                            <h5><strong>Hora</strong></h5>
                            <span className="mt-3">{detalhesAgenda.hora}</span>
                        </div>
                    </div>

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