import Item from '../models/itemModel.js'
import asyncHandler from 'express-async-handler'

//actions, mongodb

const getItems = asyncHandler(async (req, res) => {
    try {
        const items = await Item.find().sort( { "title": 1 } )
        res.status(200).json({ 
            message: 'get items from mdb', 
            items: items,
            status: 200
        })
    } catch (error) {
        res.status(404)
        throw new Error('not found items at mdb')
    }
})

const addItem = asyncHandler(async (req, res) => {
    try {
        const body = req.body
        const item = new Item ({
            title: body.title,
            done: body.done,
            _id: body._id
        }) 

        await item.save()
        const allItems = await Item.find()

        res.status(200).json({ 
            message: 'item added', 
            items: allItems })
    } catch (error) {
        res.status(400)
        throw new Error('Invalid data, cant add mdb')
    }
})

const updateItem = asyncHandler(async (req, res) => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateItem = await Item.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allItems = await Item.find()

        res.status(200).json({
            message: 'Item updated',
            items: allItems,
        })
    } catch (error) {
        res.status(400)
        throw new Error('Invalid data, cant up mdb')
    }
})

const deleteItem = asyncHandler(async (req, res) => {
    try {
        await Item.findByIdAndRemove(
            req.params.id
        )
        const allItems = await Item.find()
        res.status(200).json({
            message: 'Item deleted',
            items:allItems,
        })
    } catch (error) {
        console.log(error.message)
        res.status(400)
        throw new Error('cant remove item mdb')
    }
})

const deleteAll = asyncHandler(async (req, res) => {
    try {
        await Item.deleteMany()
        const allItems = await Item.find()

        res.status(200).json({
            message: 'All Item deleted',
            items:allItems,
        })
    } catch (error) {
        res.status(400)
        throw new Error('cant remove all items mdb')
    }
})

export { getItems, addItem, updateItem, deleteItem, deleteAll }
