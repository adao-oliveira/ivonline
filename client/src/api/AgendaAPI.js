import {useState, useEffect} from 'react'
import axios from 'axios'


function AgendaAPI() {
    const [agendar, setAgendar] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(() =>{
        const getAgendar = async () => {
            const res = await axios.get(`/api/agendar?limit=${page*9}&${sort}&titulo[regex]=${search}`)
            setAgendar(res.data.agendar)
            setResult(res.data.result)
        }
        getAgendar()
    },[callback, sort, search, page])
    
    return {
        agendar: [agendar, setAgendar],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default AgendaAPI
