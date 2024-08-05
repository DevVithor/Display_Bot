import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import './Register.css'
import '../../index.css'
import { FormEvent, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        event.preventDefault()

        const data = formData
        console.log({data})
        await axios({
            method: "post",
            url:"http://localhost:3333/users/create",
            data: data
        })
            
    }

    return (
        <div className="conteiner">
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
                        <Link to={"/"}>
                        Concluir
                        </Link>
                    </Button>
                </form>
            </div>
        </div>
    )
    } catch(err) {
        console.log(err)
    }
}