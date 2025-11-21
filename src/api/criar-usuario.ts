import { api } from "../lib/api";

export async function criarUsuario() {
    console.log("to aqui")
    await api.post(
        "/user", 
        {
            name:"Joao Pedro", 
            email:"joaopedromagalhaesg@gmail.com",
            senha: "123456",
        },
    )
}