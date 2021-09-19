import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'


function AgendaItem({ agenda, isAdmin, deleteAgenda, handleCheck }) {
    const state = useContext(GlobalState)

    return (
        <div className="container">
            <div className="col-md-4 col-sm-12">

                {
                    isAdmin && <input type="checkbox" checked={agenda.checked}
                        onChange={() => handleCheck(agenda._id)} />
                }

                <img src={agenda.images.url} className="card-img-top img-cartao" alt="Imagem da Agenda" />

                <div className="card-body">
                    <h5  style={{textTransform:'uppercase'}} titulo={agenda.titulo}>{agenda.titulo}</h5>
                    <p className="card-text text-justify">
                        {agenda.descricao}
                    </p>

                </div>

                <div className="row rodape-card d-flex align-items-center">

                    {
                        isAdmin ?
                            <>
                                <div className="col-3">
                                    <Link className="btn btn-sm btn-detalhes" to={`/detalhes/${agenda._id}`}>
                                        +detalhes
                                    </Link>
                                </div>

                                <div className="col-3">
                                    <Link className="btn btn-sm btn-detalhes" to="#!"
                                        onClick={() => deleteAgenda(agenda._id, agenda.images.public_id)}>
                                        Deletar
                                    </Link>
                                </div>

                                <div className="col-3">
                                    <Link className="btn btn-sm btn-detalhes" to={`/editar_agenda/${agenda._id}`}>
                                        Editar
                                    </Link>
                                </div>

                            </>
                            : <>
                                <div className="col-6">
                                    <Link className="btn btn-sm btn-detalhes" to={`/detalhes/${agenda._id}`}>
                                        +detalhes
                                    </Link>
                                </div>
                            </>
                    }
                </div>

            </div>
        </div>
    )
}

export default AgendaItem
