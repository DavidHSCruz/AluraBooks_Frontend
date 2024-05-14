import axios from "axios"

const livrosAPI = axios.create({ baseURL: 'https://alurabooks-backend.onrender.com/livros' })

async function getLivros()  {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getLivros
}