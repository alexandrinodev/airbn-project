import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export const Register = ({ setUser }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email && !password && name) {
            alert("Preencha nome, email e senha")
        }

        try {
            const { data: userDoc } = await axios.post('/users', {
                name,
                email,
                password
            })
            setUser(userDoc)
            setRedirect(true)
        } catch (error) {
            alert(error.response.data)
        }
    }

    if (redirect) return <Navigate to='/' />

    return (
        <section className="flex items-center">
            <div className="flex flex-col mx-auto max-w-96 items-center gap-4 w-full">
                <h1 className="text-3xl font-bold">Faça seu cadastro</h1>
                <form action="" className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
                    <input type="text"
                        className=" px-4 py-2 w-full rounded-full border border-gray-300 "
                        placeholder="Digite seu Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <input type="email"
                        className=" px-4 py-2 w-full rounded-full border border-gray-300 "
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="password"
                        className="w-full rounded-full border border-gray-300 px-4 py-2"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button
                        className="cursor-pointer bg-primary-400 text-white w-full rounded-full border border-gray-300 px-4 py-2">
                        Registrar
                    </button>
                </form>

                <p>
                    Já tem conta ?
                    <Link to="/login" className="underline font-semibold">
                        Logue aqui !
                    </Link>
                </p>
            </div>
        </section>
    )
}