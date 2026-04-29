import User from '../models/User.js'
import Machine from '../models/Machine.js'

// GET todos los usuarios
export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// POST crear usuario
export const addUsers = async (req, res) => {
    const { name_entity, rut, u_address, email, Phone_number, user_type } = req.body

    if (!name_entity || !rut || !u_address) {
        return res.status(400).json({ msg: "Por favor llena todos los campos obligatorios" })
    }

    try {
        const newUser = new User({ name_entity, rut, u_address, email, Phone_number, user_type })
        await newUser.save()
        res.json(newUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// GET usuario por ID
export const getUsersById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ msg: "Usuario no encontrado" })
        res.json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// DELETE usuario por ID
export const deleteUsersById = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({ msg: "Usuario eliminado" })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// PUT actualizar usuario por ID
export const updateUserById = async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(updated)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// GET todas las máquinas
export const getMachines = async (req, res) => {
    try {
        const machines = await Machine.find()
        res.json(machines)
    } catch (error) {
        res.status(500).send(error.message)
    }
}