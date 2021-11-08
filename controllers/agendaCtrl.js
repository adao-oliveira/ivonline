const Agenda = require('../models/agendaModel')

// Filter, sorting and paginating

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
       const queryObj = {...this.queryString} //queryString = req.query

       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const agendaCtrl = {
    getAgendar: async(req, res) =>{
        try {
            const features = new APIfeatures(Agenda.find(), req.query)
            .filtering().sorting().paginating()

            const agendar = await features.query

            res.json({
                status: 'success',
                result: agendar.length,
                agendar: agendar
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    publicarAgenda: async(req, res) =>{
        try {
            const {titulo, descricao, images} = req.body;
            if(!images) return res.status(400).json({msg: "Sem upload de imagem"})

            const agenda = await Agenda.findOne({titulo})
            if(agenda)
                return res.status(400).json({msg: "Esta agenda já foi publicada"})

            const newAgenda = new Agenda({
               titulo: titulo.toLowerCase(), descricao, images
            })

            await newAgenda.save()
            res.json({msg: "Agenda publicada"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteAgenda: async(req, res) =>{
        try {
            await Agenda.findByIdAndDelete(req.params.id)
            res.json({msg: "Agenda deletada"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateAgenda: async(req, res) =>{
        try {
            const {titulo, descricao, images} = req.body;
            if(!images) return res.status(400).json({msg: "Sem upload de imagem"})

            await Agenda.findOneAndUpdate({_id: req.params.id}, {
                titulo: titulo.toLowerCase(), descricao, images
            })

            res.json({msg: "Agenda atualizada"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = agendaCtrl