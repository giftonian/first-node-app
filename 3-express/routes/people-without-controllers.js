const express = require('express')
const router = express.Router();

let { people } = require('../data')

// CTRL + D to select a variable and change its all occurences
router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people })
  })
  
  router.post('/', (req, res) => {
    const { name } = req.body // pick the name property from req.body object
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
  })
  
  router.post('/postman', (req, res) => {
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
  })
  
  
  
  router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
  
    const person = people.find((person) => person.id === Number(id))
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` })
    }
  
    // map is an Array method in JavaScript that creates a new array by calling a provided function on every element in the 
    // calling array. It does not mutate the original array 
    const newPeople = people.map((personObj) => {
      if (personObj.id === Number(id)) {
        personObj.name = name
      }
      return personObj
    })
    res.status(200).json({ success: true, data: newPeople })
  })
  
  router.delete('/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  })

  module.exports = router