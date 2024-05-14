import axios from "axios"

const livrosAPI = axios.create({ baseURL: 'https://alurabooks-backend.onrender.com/sacola' })

async function getSacola()  {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getSacola
}