import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/16qg.svg'
import api from '../../services/api'


function Home() {


  const [users, setUsers] = useState([])


  const inputName = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
  }

  async function creatUsers() {
    const usersFromApi = await api.post('/users', {
      name: inputName.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }
  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)

    getUsers()
  }


  useEffect(() => {
    getUsers()
  }, []);


  return (

    <div className='container'>

      <form action="">
        <h1>Cadastro Usuários</h1>
        <input placeholder='Nome' name='nome' type="text" ref={inputName} />
        <input placeholder='E-mail' name='email' type="email" ref={inputEmail} />
        <button type='button' onClick={creatUsers}>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome:<span>{user.name}</span></p>
            <p>Email:<span>{user.email}</span></p>
          </div>

          <div>
            <button onClick={() =>deleteUsers(user.id)}>
              <img src={Trash} />
            </button>
          </div>

        </div>
      ))}



    </div>

  )
}

export default Home
