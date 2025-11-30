import Button from "../components/button";
import { LoginLink } from "../components/link";
import EmailInput, { ConfirmPassword, NameInput, PasswordInput } from "../components/input";
import Logo from "../assets/CT JUNIOR 1.svg"
import { useState } from "react";


export default function SignPage() {
    const [password, setPassword] = useState("");

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-background">
            <div className='flex flex-col place-items-center gap-8'>
                <div className='flex flex-col gap-18'>
                    <img src={Logo} className='w-lg h-32 object-contain'/>
                    <NameInput />
                    <EmailInput/>
                    <PasswordInput onChange={(value: string) => 
                        setPassword(value)
                    }
                    />
                    <ConfirmPassword passwordToMatch={password}/>
                </div>
                    <Button>
                        Cadastrar
                    </Button>
                <div className='cadastro'>
                    <LoginLink />
                </div>
            </div>
        </div>
    );
}