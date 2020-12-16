import Item from '../models/itemModel.js'
import asyncHandler from 'express-async-handler'
import pool from '../config/db.js'
import express from 'express'
import cors from 'cors'

//actions, postgresql

//change the res status, to fake a db fails, and swich between them :)
const getItems = asyncHandler(async (req, res) => {
    try {
        const allItems = await pool.query("SELECT * FROM todoI ORDER BY title");

        res.status(200).json({ 
            message: 'get items from psql', 
            items: allItems.rows,
            status: 200
        })
    } catch (error) {
        res.status(404)
        throw new Error('not found, psql')
    }
})

const addItem = asyncHandler(async (req, res) => {
    try {
        const body = req.body
        const item = await pool.query(
            "INSERT INTO todoI (_id, title, done) VALUES($1,$2,$3)",
            [body._id,body.title,body.done]
        );
        const allItems = await pool.query("SELECT * FROM todoI");
        res.status(200).json({ 
            message: 'item added to psql', 
            items: allItems.rows
        })
    } catch (error) {
        res.status(400)
        throw new Error('Invalid data, add psql')
    }
})

const updateItem = asyncHandler(async (req, res) => {
    try {
        const {
            params: { id },
            body,
        } = req
        
        const item = await pool.query(
            "UPDATE todoI SET title=$1, done=$2, _id=$3 WHERE _id = $3",
            [body.title, body.done, id]
        );

        const allItems = await pool.query("SELECT * FROM todoI");
        res.status(200).json({
            message: 'Item updated',
            items: allItems.rows,
        })
    } catch (error) {
        res.status(400)
        throw new Error('Invalid data, up psql')
    }
})

const deleteItem = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM todoI WHERE _id = $1", [id]);

        const allItems = await pool.query("SELECT * FROM todoI");
        res.status(200).json({
            message: 'Item deleted',
            items:allItems.rows,
        })
    } catch (error) {
        res.status(400)
        throw new Error('cant delete item, up psql')
    }
})

const deleteAll = asyncHandler(async (req, res) => {
    try {
        await pool.query("DELETE FROM todoI")
        const allItems = await pool.query("SELECT * FROM todoI");

        res.status(200).json({
            message: 'All Item deleted',
            items:allItems.rows,
        })
    } catch (error) {
        res.status(400)
        throw new Error('cant delete all, up psql')
    }
})

export { getItems, addItem, updateItem, deleteItem, deleteAll }
