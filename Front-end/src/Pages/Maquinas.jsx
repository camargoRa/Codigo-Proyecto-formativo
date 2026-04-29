import React, { useEffect, useState } from 'react'
import NavbarMaquinas from '../Components/NavbarMaquinas'
import { getUsers } from "../Function/funcion"
const Maquinas = () => {
    const [users, setUsers] = useState(null)

    useEffect(()=>{
    getUsers(setUsers)
    },[])
  return (
    <>
        <NavbarMaquinas/>
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="rounded-2" style={{backgroundColor: '#858585', marginTop: "250px", padding: '200px'}}>
                  {users != null ? (
                    <table className="table mt-4 text-center">
                      <thead>
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">nombre del taller</th>
                          <th scope="col">rut</th>
                          <th scope="col">direccion</th>
                          <th scope="col">correo electronico</th>
                          <th scope="col">numero telefonico</th>
                          <th scope="col">tipo de usuario</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name_entity}</td>
                            <td>{user.rut}</td>
                            <td>{user.u_address}</td>
                            <td>{user.email}</td>
                            <td>{user.Phone_number}</td>
                            <td>{user.user_type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ):
                  ('no pasa nada')}
            </div>

        </div>
    </>
  )
}

export default Maquinas