import { criarUsuario } from './api/criar-usuario'

function App() {

  async function criar () {
    await criarUsuario()
  }
  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center bg-cyan-400'>
        <button onClick={() => criar()} className='cursor-pointer border border-white font-semibold text-red-300 lg:bg-blue-500'> 
            cadastrar usuario
        </button>
      </div>
    </>
  )
}

export default App
