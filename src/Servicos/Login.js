import axios from "axios"

const registrosAPI = axios.create({ baseURL: 'https://alura-books-backend.vercel.app/login' })

async function getDestaques()  {
    const response = await registrosAPI.get('/')

    return response.data
}

export {
    getDestaques
}