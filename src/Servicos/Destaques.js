import axios from "axios"

const livrosAPI = axios.create({ baseURL: 'http://localhost:8000/destaques' })

async function getDestaques()  {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getDestaques
}