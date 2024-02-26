import axios from "axios"

const livrosAPI = axios.create({ baseURL: 'http://localhost:8000/sacola' })

async function getSacola()  {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getSacola
}