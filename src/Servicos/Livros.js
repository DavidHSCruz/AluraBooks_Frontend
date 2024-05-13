import axios from "axios"

const livrosAPI = axios.create({ baseURL: 'https://alura-books-backend.vercel.app/livros' })

async function getLivros()  {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getLivros
}