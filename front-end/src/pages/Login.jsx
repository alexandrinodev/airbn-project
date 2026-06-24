import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <section className="flex items-center">
            <div className="flex flex-col mx-auto max-w-96 items-center gap-4 w-full">
                <h1 className="text-3xl font-bold">Faça seu login</h1>
                <form action="" className="flex flex-col gap-2 w-full">
                    <input type="email" className=" px-4 py-2 w-full rounded-full border border-gray-300 "
                        placeholder="Digite seu e-mail" />
                    <input type="password" className="w-full rounded-full border border-gray-300 px-4 py-2"
                        placeholder="Digite sua senha" />
                    <button className="cursor-pointer bg-primary-400 text-white w-full rounded-full border border-gray-300 px-4 py-2">Login</button>
                </form>

                <p>Ainda nao tem conta ? <Link to="/register" className="underline font-semibold"> Registre-se aqui !</Link></p>
            </div>
        </section>
    )
}
