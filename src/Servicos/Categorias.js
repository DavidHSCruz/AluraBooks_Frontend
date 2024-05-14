import axios from "axios"

const livrosAPI = axios.create({ baseURL: 'https://alurabooks-backend.onrender.com/categorias' })

async function getDestaques()  {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getDestaques
}