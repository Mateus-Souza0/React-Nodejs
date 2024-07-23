
import './style.css'
import Trash from '../../assets/16qg.svg'



const users = [{
  id: '432423',
  name: 'mateus',
  email: 'rerw@gfd.com'
}]

function Home() {
  return (

    <div className='container'>

      <form action="">
        <h1>Cadastro Usuários</h1>
        <input placeholder='Nome' name='nome' type="text" />
        <input placeholder='E-mail' name='email' type="email" />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome:<span>{user.name}</span></p>
            <p>Email:<span>{user.email}</span></p>
          </div>

          <div>
            <button>
              <img src={Trash} />
            </button>
          </div>

        </div>
      ))}



    </div>

  )
}

export default Home
