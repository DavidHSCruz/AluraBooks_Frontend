import axios from "axios"

const favoritosAPI = axios.create({ baseURL: 'https://alura-books-backend.vercel.app/favoritos' })

async function getFavoritos()  {
    const response = await favoritosAPI.get('/')
    return response.data
}

async function postFavoritos(id) {
    await favoritosAPI.post(`/${id}`)
}

async function deleteFavoritos(id) {
    await favoritosAPI.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}