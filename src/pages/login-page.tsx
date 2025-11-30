import { criarUsuario } from '../api/criar-usuario';
import Button from '../components/button';
import EmailInput, { PasswordInput } from '../components/input';
import Logo from "../assets/CT JUNIOR 1.svg"
import { CadastroLink } from '../components/link';


export default function LoginPage() {

  async function criar () {
    await criarUsuario()
  }
  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center bg-background'>
        <div className='flex flex-col place-items-center gap-8'>
          <div className='flex flex-col gap-18'>
          <img src={Logo} className='w-lg h-32 object-contain'/>
            <EmailInput/>
            <PasswordInput />
          </div>
          <Button>
            Entrar
          </Button>
          <div className='cadastro'>
            <CadastroLink />
          </div>
        </div>
      </div>
    </>
  )
}
