import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalState } from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import { useParams } from 'react-router-dom'

const initialState = {
    titulo: '',
    descricao: '',
    _id: ''
}

function PublicarAgenda() {
    const state = useContext(GlobalState)
    const [agenda, setAgenda] = useState(initialState)
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)


    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    const param = useParams()

    const [agendar] = state.agendaAPI.agendar
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.agendaAPI.callback

    useEffect(() => {
        if (param.id) {
            setOnEdit(true)
            agendar.forEach(agenda => {
                if (agenda._id === param.id) {
                    setAgenda(agenda)
                    setImages(agenda.images)
                }
            })
        } else {
            setOnEdit(false)
            setAgenda(initialState)
            setImages(false)
        }
    }, [param.id, agendar])

    const handleUpload = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("Você não possui permissão para realizar essa ação")
            const file = e.target.files[0]

            if (!file) return alert("Arquivo não existe")

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
            if (!isAdmin) return alert("Você não possui permissão para realizar essa ação")
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
        setAgenda({ ...agenda, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("Você não possui permissão para realizar essa ação")
            if (!images) return alert("Sem imagem no upload")

            if (onEdit) {
                await axios.put(`/api/agendar/${agenda._id}`, { ...agenda, images }, {
                    headers: { Authorization: token }
                })
            } else {
                await axios.post('/api/agendar', { ...agenda, images }, {
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
        <div className="container" style={{marginTop:'150px'}}>
            <div className="col-12 mt-5">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold">{onEdit ? 'Atualizar agenda' : 'Nova agenda'}</h3>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Título:</label>
                        <input className="form-control" type="text" name="titulo" id="titulo" required value={agenda.titulo} onChange={handleChangeInput} />
                    </div>

                    <div className="form-group">
                        <label>Descrição da Agenda:</label>
                        <textarea className="form-control" rows="3" type="text" name="descricao" id="descricao" required value={agenda.descricao} onChange={handleChangeInput} />
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

                    <button className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro" type="submit">{onEdit ? "Atualizar agenda" : "Publicar agenda"}</button>

                </form>
            </div>
        </div>
    )
}

export default PublicarAgenda