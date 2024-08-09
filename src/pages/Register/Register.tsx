import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FormEvent, useState } from "react";
import { AxiosError } from "axios";

import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

import { BsRobot } from "react-icons/bs";
import { API } from "../../lib/api";

import 'react-toastify/dist/ReactToastify.css';
import '../../index.css'
import './Register.css'

export default function Register() {
    try{
    
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        password:"",
        email:"",
        phone:""
    })

    const handlerInputData = (event: FormEvent<HTMLInputElement>) => {
        const {name, value} = event.currentTarget

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (event: FormEvent) => {
        try{
        event.preventDefault()

        const data = formData

       const response = await API.post("/users/register", data)

       if(response) {
        toast.success("Usuario cadastrado com Sucesso")
       }

    } catch (error) {
       
        if(error instanceof AxiosError) {
            toast.error(error.response?.data.title)
        }
    }
}

    return (
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
                <ToastContainer theme="colored"/>
                <div className="conteiner__login">
                
                    <h1>Cadastro</h1>
                    <form className="register" onSubmit={handleSubmit}>
                        <div className = "conteiner__register">
                            <label htmlFor="Nome">Nome</label>
                            <Input
                            value={formData.name}
                            onChange={handlerInputData}
                            name="name"
                            id="Nome" 
                            type="Name"
                            placeholder="Nome"/>
                            <label >Sobrenome</label>
                            <Input
                            value={formData.surname}
                            onChange={handlerInputData}
                            name="surname"
                            placeholder="Sobrenome"/>
                            <label >Senha</label>
                            <Input
                            value={formData.password}
                            onChange={handlerInputData}
                            name="password"
                            type="password"
                            placeholder="Senha"/>
                            <label>Email</label>
                            <Input 
                            value={formData.email}
                            onChange={handlerInputData}
                            name="email"
                            placeholder="Email"/>
                            <label>Telefone</label>
                            <Input
                            value={formData.phone}
                            onChange={handlerInputData}
                            name="phone"
                            placeholder="Telefone"/>
                        </div>
                        <Button onClick={handleSubmit}>
                            Concluir
                            <Link to={"/"} />

                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
    } catch(err) {
        console.log(err)
    }
}