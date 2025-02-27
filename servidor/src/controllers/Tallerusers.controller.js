import {getConnection,sql,queries} from '../database'

//CONTROLADORES DE TALLERES
// GET de talleres 
export const getUsers = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool
        .request()
        .query(queries.getUsers);
        res.json(result.recordset) 
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }

};
//POST de talleres
export const addUsers = async (req, res) => {

    const { name_entity, rut, u_address, email, Phone_number, user_type } = req.body
    if (name_entity == null || rut == null || u_address == null ) {
        return res.status(400).json({msg: "petición erronea, por favor llena todos los campos"})
    }
    try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("name_entity", sql.VarChar, name_entity)
    .input("rut", sql.VarChar, rut)
    .input("u_address", sql.VarChar, u_address)
    .input("email", sql.VarChar, email)
    .input("Phone_number", sql.VarChar, Phone_number)
    .input("user_type", sql.VarChar, user_type)
    .query(queries.addUsers);
    res.json({name_entity, rut, u_address, email, Phone_number,user_type})
    } catch (error) {
        res.status(500);
    }
};
// GET BY ID de talleres
export const getUsersById = async  (req,res) => {
    const {id} = req.params
    const pool = await getConnection()
    const result = await pool.request()
    .input('id', id)
    .query(queries.getUsersById)
    res.send(result.recordset)

}
//DELETE BY ID de talleres
export const deleteUsersById = async  (req,res) => {
    try {
        const {id} = req.params
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('id', id)
        .query(queries.deleteUsersById)
        res.send(result)
    } catch (error) {
        res.sendStatus(204)
    }
}
//UPDATE BY ID de talleres
export const updateUserById = async (req,res) => {
    const {name_entity, rut, u_address, email, Phone_number, user_type} = req.body
    const {id} = req.params
    try {
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('id', id)
        .input("name_entity", sql.VarChar, name_entity)
        .input("rut", sql.VarChar, rut)
        .input("u_address", sql.VarChar, u_address)
        .input("email", sql.VarChar, email)
        .input("Phone_number", sql.VarChar, Phone_number)
        .input("user_type", sql.VarChar, user_type)
        .query(queries.updateUserById);
        res.json({name_entity, rut, u_address, email, Phone_number, user_type})
    } catch (error) {
        res.send(error.message)
        res.sendStatus(500)
    }

}

//CONTROLADORES DE MAQUINAS
//GET de maquinas
export const getMachines = async (req,res) => {
    const pool = await getConnection()
    const result = await pool
    .request()
    .query(queries.getMachines)
    res.send(result.recordset)
}