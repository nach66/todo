import express from 'express'
const router = express.Router()
import { getItems, addItem, updateItem, deleteItem, deleteAll } from '../controllers/controllerPsql.js'

//router for the action at postgresql

router.get('/postgresql-items', getItems)

router.post('/postgresql-items', addItem)

router.put('/postgresql-items/:id', updateItem)

router.delete('/postgresql-items/:id', deleteItem)

router.delete('/postgresql-delete-all/', deleteAll)

export default router