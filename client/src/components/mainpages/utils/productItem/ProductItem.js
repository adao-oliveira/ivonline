import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'


function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
    const state = useContext(GlobalState)

    return (
        <div className="container">
            <div className="row">
                <h2 className="mx-auto" style={{ color: '#fff', marginTop: '-50px', marginBottom: '50px' }}>Agenda SNT Carapicuíba</h2>
            </div>
            <div className="col-md-4 col-sm-12">

                {
                    isAdmin && <input type="checkbox" checked={product.checked}
                        onChange={() => handleCheck(product._id)} />
                }

                <img src={product.images.url} className="card-img-top img-cartao" alt="Imagem do Evento" />

                <div className="card-body">
                    <h5 titulo={product.titulo}>{product.titulo}</h5>
                    <p className="card-text text-justify">
                        {product.descricao}
                    </p>

                </div>

                <div className="row rodape-card d-flex align-items-center">

                    {
                        isAdmin ?
                            <>
                                <div className="col-3">
                                    <Link className="btn btn-sm btn-detalhes" to={`/detail/${product._id}`}>
                                        +detalhes
                                    </Link>
                                </div>

                                <div className="col-3">
                                    <Link className="btn btn-sm btn-detalhes" to="#!"
                                        onClick={() => deleteProduct(product._id, product.images.public_id)}>
                                        Deletar
                                    </Link>
                                </div>

                                <div className="col-3">
                                    <Link className="btn btn-sm btn-detalhes" to={`/edit_product/${product._id}`}>
                                        Editar
                                    </Link>
                                </div>

                            </>
                            : <>
                                <div className="col-6">
                                    <Link className="btn btn-sm btn-detalhes" to={`/detail/${product._id}`}>
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

export default ProductItem
