import axios from "axios"

const livrosAPI = axios.create({ baseURL: 'http://localhost:8000/categorias' })

async function getDestaques()  {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getDestaques
}