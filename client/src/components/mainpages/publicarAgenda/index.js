import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalState } from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import { useParams } from 'react-router-dom'

const initialState = {
    titulo: '',
    descricao: '',
    tipoEvento: '',
    data: '',
    hora: '',
    _id: ''
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)


    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    const param = useParams()

    const [products] = state.productsAPI.products
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.productsAPI.callback

    useEffect(() => {
        if (param.id) {
            setOnEdit(true)
            products.forEach(product => {
                if (product._id === param.id) {
                    setProduct(product)
                    setImages(product.images)
                }
            })
        } else {
            setOnEdit(false)
            setProduct(initialState)
            setImages(false)
        }
    }, [param.id, products])

    const handleUpload = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("You're not an admin")
            const file = e.target.files[0]

            if (!file) return alert("File not exist.")

            if (file.size < !10) // 1mb
                return alert("Tamanho da imagem muito grande!")

            if (file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("Formato da imagem incorreto, tente usar PNG ou JPEG")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: { 'content-type': 'multipart/form-data', Authorization: token }
            })
            setLoading(false)
            setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            if (!isAdmin) return alert("You're not an admin")
            setLoading(true)
            await axios.post('/api/destroy', { public_id: images.public_id }, {
                headers: { Authorization: token }
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("You're not an admin")
            if (!images) return alert("No Image Upload")

            if (onEdit) {
                await axios.put(`/api/products/${product._id}`, { ...product, images }, {
                    headers: { Authorization: token }
                })
            } else {
                await axios.post('/api/products', { ...product, images }, {
                    headers: { Authorization: token }
                })
            }
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }


    return (
        <div className="container">
            <div className="col-12 mt-5">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold">{onEdit ? 'Atualizar Evento' : 'Novo Evento'}</h3>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Título:</label>
                        <input className="form-control" type="text" name="titulo" id="titulo" required value={product.titulo} onChange={handleChangeInput} />
                    </div>

                    <div className="form-group">
                        <label>Tipo do Evento:</label>
                        <input className="form-control" type="text" name="tipoEvento" id="tipoEvento" required value={product.tipoEvento} onChange={handleChangeInput} placeholder="-- Informe o tipo de evento --" />
                    </div>

                    <div className="form-group">
                        <label>Descrição do Evento:</label>
                        <textarea className="form-control" rows="3" type="text" name="descricao" id="descricao" required value={product.descricao} onChange={handleChangeInput} />
                    </div>

                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data:</label>
                            <div required value={product.data} onChange={handleChangeInput}>
                                <input type="date" className="form-control" />
                            </div>
                        </div>

                        <div className="col-6">
                            <label>Hora:</label>
                            <div required value={product.hora} onChange={handleChangeInput}>
                                <input type="time" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Upload da Foto {onEdit ? '(caso queira manter a mesma foto, não precisa escolher uma nova imagem!)' : null}:</label>
                        <input className="form-control" type="file" name="file" id="file_up" onChange={handleUpload} />
                        {
                            loading ? <div id="file_img"><Loading /></div>

                                : <div id="file_img" style={styleUpload}>
                                    <img src={images ? images.url : ''} alt="" />
                                    <span onClick={handleDestroy}>X</span>
                                </div>
                        }
                    </div>

                    <button className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro" type="submit">{onEdit ? "Atualizar Evento" : "Publicar Evento"}</button>

                </form>
            </div>
        </div>
    )
}

export default CreateProduct
