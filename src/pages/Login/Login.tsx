import { Link, useNavigate } from "react-router-dom"
import { FormEvent, useState } from "react" 

import { ToastContainer, toast } from "react-toastify";
import { BsRobot } from "react-icons/bs";
import { API } from "../../lib/api"

import Button from "../../components/button/Button"
import Input from "../../components/input/Input"

import 'react-toastify/dist/ReactToastify.css';
import "../../index.css"
import "./Login.css"
import { AxiosError } from "axios";


export default function Login() {

    const [email, setUser] = useState("")
    const [password, setPassword] = useState("")

    const handleInputUser = (event: FormEvent<HTMLInputElement>) => {
        setUser(event.currentTarget.value)
    }

    const handleInputPassword = (event: FormEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }
    
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        
        try{

        const result = API.post("/users/login", {email, password})

        } catch(error) {
            if(error instanceof AxiosError) {
                toast.error(error.response?.data.title)
            }
        }
    }

    return(
        <div className="conteiner">
            <div className="conteiner__left">
                <div className="conteiner__text">
                    <h1>
                        LURIN IPSUN
                    </h1>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h3>
                </div>
            </div>
            <div className="conteiner__logo">
                <h1>
                    <BsRobot />
                </h1>
            </div> 
            <div className="conteiner__login__right">
             <ToastContainer theme="colored" />

                <div className="conteiner__login">
                    <form onSubmit={handleSubmit}>
                        <h1>Acesse o Sistema</h1>
                            <Input
                            name="User"
                            value={email}
                            onChange={handleInputUser}
                            placeholder="Email"
                            type="Email"
                            />
                            <Input 
                            name="Password"
                            value = {password}
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
                        <Link to="/Register">Registrar</Link>
                    </form>
                </div>
            </div>
        </div>
        
    )
}
