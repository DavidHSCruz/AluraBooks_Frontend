import axios from "axios"

const livrosAPI = axios.create({ baseURL: 'https://alura-books-backend.vercel.app/sacola' })

async function getSacola()  {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getSacola
}