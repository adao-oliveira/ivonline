import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() => {
        if (params.id) {

            products.forEach(product => {
                if (product._id === params.id) setDetailProduct(product)
            })
        }
    }, [params.id, products])

    if (detailProduct.length === 0) return null;

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <img src={detailProduct.images.url} className="img-banner" alt="Banner" />
                    <h3 className="mx-auto mt-5 titulo"><strong>{detailProduct.titulo}</strong></h3>
                </div>

                <div className="container">
                    <div className="row mt-5 d-flex justify-content-around ">
                        <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                            <i className="fas fa-ticket-alt fa-2x"></i>
                            <h5><strong>Tipo</strong></h5>
                            <span className="mt-3">{detailProduct.tipoEvento}</span>
                        </div>

                        <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                            <i className="fas fa-calendar-alt fa-2x"></i>
                            <h5><strong>Data</strong></h5>
                            <span className="mt-3">{detailProduct.data}</span>
                        </div>

                        <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                            <i className="fas fa-clock fa-2x"></i>
                            <h5><strong>Hora</strong></h5>
                            <span className="mt-3">{detailProduct.hora}</span>
                        </div>
                    </div>

                    <div className="row box-detalhes mt-5">
                        <div className="col-12 text-center">
                            <h5><strong>Detalhes do Evento</strong></h5>
                        </div>
                        <div className="col-12 text-center">
                            <p>{detailProduct.descricao}</p>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default DetailProduct
