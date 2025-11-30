import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";


const CadastroLinkVariants = cva(`text-white underline cursor-pointer flex justify-center items-center w-[528px] h-[97px] text-[24px] font-sans text-center`);
const LoginLinkVariants = cva(`text-white underline cursor-pointer flex justify-center items-center w-[528px] h-[97px] text-[24px] font-sans text-center`);

export function CadastroLink() {
    return (
        <Link to="/cadastro" className={CadastroLinkVariants()}>
            Não possui cadastro? Clique aqui<br/>
            para se cadastrar.
        </Link>
    )
}

export function LoginLink() {
    return (
        <Link to="/" className={LoginLinkVariants()}>
            Voltar ao login
        </Link>
    )
}