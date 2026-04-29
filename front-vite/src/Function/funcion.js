import axios from "axios"

const API = import.meta.env.VITE_API_URL

// OBTENER USUARIOS
export const getUsers = async (state) => {
    try {
        const peticion = await axios.get(`${API}/users`)
        state(peticion.data)
    } catch (error) {
        console.error("Error al obtener usuarios:", error)
    }
}

// OBTENER MAQUINAS
export const getMachines = async (state) => {
    try {
        const peticion = await axios.get(`${API}/machines`)
        state(peticion.data)
    } catch (error) {
        console.error("Error al obtener maquinas:", error)
    }
}