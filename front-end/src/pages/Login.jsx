import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export const Login = () => {

    const { user, setUser } = useUserContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email && !password) {
            alert("Preencha usario e senha")
        }

        try {
            const { data: userDoc } = await axios.post('/users/login', {
                email,
                password
            })
            setUser(userDoc)
            setRedirect(true)

        } catch (error) {
            alert(error.response.data)
        }
    }

    if (redirect || user) return <Navigate to='/' />

    return (
        <section className="flex items-center">
            <div className="flex flex-col mx-auto max-w-96 items-center gap-4 w-full">
                <h1 className="text-3xl font-bold">Faça seu login</h1>
                <form action="" className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
                    <input type="email" className=" px-4 py-2 w-full rounded-full border border-gray-300 "
                        placeholder="Digite seu e-mail"
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="w-full rounded-full border border-gray-300 px-4 py-2"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)} />
                    <button className="cursor-pointer bg-primary-400 text-white w-full rounded-full border border-gray-300 px-4 py-2">Login</button>
                </form>

                <p>Ainda nao tem conta ? <Link to="/register" className="underline font-semibold"> Registre-se aqui !</Link></p>
            </div>
        </section>
    )
}
