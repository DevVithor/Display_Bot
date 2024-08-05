import Button from "../../components/button/Button"
import Input from "../../components/input/Input"
import "./Login.css"
import "../../index.css"
import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {

    const [saveUser, setUser] = useState("")
    const [savePassword, setPassword] = useState("")
    

    const handleInputUser = (event: FormEvent<HTMLInputElement>) => {
        setUser(event.currentTarget.value)
    }

    const handleInputPassword = (event: FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const data = {saveUser, savePassword}

        console.log(data)
    //    axios.post(process.env.SERVER!, {data})
    }

    return(
        <div className="conteiner">
            <div className="conteiner__login">
                <form onSubmit={handleSubmit}>
                    <h1>Acesse o Sistema</h1>
                        <Input
                        name="User"
                        value={saveUser}
                        onChange={handleInputUser}
                        placeholder="Email"
                        type="Email"
                        />
                        <Input 
                        name="Password"
                        value = {savePassword}
                        onChange={handleInputPassword}
                        placeholder="Senha" 
                        type="password"
                        />
                        <div className="conteiner__password">
                            <p>Esqueceu a senha?</p>
                            <Link to="#">Recuperar a senha</Link>
                        </div>
                        <div className="conteiner__login__size">
                            <Button onClick={handleSubmit}>
                                Entrar
                            </Button>
                        </div>
                    </form>
                    <div className="conteiner__password">
                        <p>Não tem um cadastro?</p>
                        <Link to="/Register">Registrar</Link>
                    </div>
            </div>
        </div>
    )
}