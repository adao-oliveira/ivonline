const router = require('express').Router()
const agendaCtrl = require('../controllers/agendaCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/agendar')
    .get(agendaCtrl.getAgendar)
    .post(auth, authAdmin, agendaCtrl.publicarAgenda)


router.route('/agendar/:id')
    .delete(auth, authAdmin, agendaCtrl.deleteAgenda)
    .put(auth, authAdmin, agendaCtrl.updateAgenda)



module.exports = router