const express = require('express')
const router = express.Router();

const {
    getPeople, 
    createPerson, 
    createPersonPostman, 
    updatePerson, 
    deletePerson
} = require('../controllers/people')

router.get('/', getPeople)
  
router.post('/', createPerson)
  
router.post('/postman', createPersonPostman)
  
router.put('/:id', updatePerson)
  
router.delete('/:id', deletePerson)

// Another way of defining routes is as following
// router.route('/').get(getPeople).post(createPerson) // method chaning in case route is same and method is different

module.exports = router