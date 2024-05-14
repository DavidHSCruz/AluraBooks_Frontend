import axios from "axios"

const registrosAPI = axios.create({ baseURL: 'https://alurabooks-backend.onrender.com/login' })

async function getDestaques()  {
    const response = await registrosAPI.get('/')

    return response.data
}

export {
    getDestaques
}