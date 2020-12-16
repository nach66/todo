import axios from 'axios'
const baseUrl = 'http://localhost:5000/items'

//call to action of moongoDB

export const addItem = async (item) => {
    try {
        const saveItem = await axios.post(baseUrl,item)
        return saveItem
    } catch (error) {
        throw new Error(error)
    }
}

export const updateItem = async (item) => {
    try {
        const updateItem = await axios.put(
            `${baseUrl}/${item._id}`,
            item
        )
        return updateItem
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteItem = async (id) => {
    try {
        const deletedItem = await axios.delete(
        `${baseUrl}/${id}`
        )
        return deletedItem
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteAll = async () => {
    try {
        const deletedItem = await axios.delete(
        `http://localhost:5000/delete-all/`
        )
        return deletedItem
    } catch (error) {
        throw new Error(error)
    }
}