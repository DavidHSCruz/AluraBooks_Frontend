import axios from "axios"

const livrosAPI = axios.create({ baseURL: 'https://alura-books-backend.vercel.app/destaques' })

async function getDestaques()  {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getDestaques
}