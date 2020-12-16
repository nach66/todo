const baseUrl = 'http://localhost:5000/postgresql-items'

//call to action of postgresql

export const addItemPsql = async (item) => {
    try {
        const res = await fetch(baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });
        return res;
    } catch (error) {
        throw new Error(error)
    }
}

export const updateItemPsql = async (item) => {
    try {
        const res = await fetch( baseUrl + `/${item._id}`, { 
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });
        return res;
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteItemPsql = async (id) => {
    try {
        const res = await fetch(baseUrl + `/${id}`, {method: "DELETE"});
        return res;
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteAllPsql = async () => {
    try {
        const res = await fetch( `http://localhost:5000/postgresql-delete-all/`, {method: "DELETE"});
        return res;
    } catch (error) {
        throw new Error(error)
    }
}