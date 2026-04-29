import { Router } from 'express'
import { 
    addUsers, 
    deleteUsersById, 
    getMachines, 
    getUsersById, 
    getUsers, 
    updateUserById 
} from '../controllers/Tallerusers.controller.js'

const router = Router()

// Rutas de usuarios
router.get('/users', getUsers)
router.post('/users', addUsers)
router.get('/users/:id', getUsersById)
router.delete('/users/:id', deleteUsersById)
router.put('/users/:id', updateUserById)

// Rutas de máquinas
router.get('/machines', getMachines)

export default router