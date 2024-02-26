import axios from "axios"

const registrosAPI = axios.create({ baseURL: 'http://localhost:8000/login' })

async function getDestaques()  {
    const response = await registrosAPI.get('/')

    return response.data
}

export {
    getDestaques
}