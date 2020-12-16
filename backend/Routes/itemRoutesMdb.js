import express from 'express'
const router = express.Router()
import { getItems, addItem, updateItem, deleteItem, deleteAll } from '../controllers/controllerMdb.js'
//router for the action at mongodb

router.get('/items', getItems)

router.post('/items', addItem)

router.put('/items/:id', updateItem)

router.delete('/items/:id', deleteItem)

router.delete('/delete-all/', deleteAll)

export default router