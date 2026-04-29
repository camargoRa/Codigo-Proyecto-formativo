import axios from "axios";

//OBTENER TALLERES
export const getUsers = async (state) =>{
    try{
    const peticion = await axios.get('http://localhost:5000/users')
    state(peticion.data)
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
//OBTENER MAQUINAS
// export const ObtenerMaquinas = async ()=>{
//     const peticion = await Axios.get('http://localhost:5000/maquinas')
//     console.log(peticion)
// }