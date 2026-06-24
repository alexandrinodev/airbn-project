import { Link } from "react-router-dom";

export const Item = () => {
    return (
        <Link to="/" className="flex flex-col gap-2">
            <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-824027016129337645/original/55b303a0-8f3d-406d-90e1-6456e8b98d64.jpeg?im_w=720"
                alt="Imagem da acomodação"
                className="aspect-square object-cover rounded-2xl"
            />

            <div>
                <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
                <p className="truncate text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi reiciendis quas aut tempora molestias. Vero, minus nihil. Impedit expedita temporibus soluta. Fugiat, commodi reprehenderit! Nemo itaque repudiandae modi quae.</p>
            </div>

            <p><span className="font-semibold">R$550 </span>por noite</p>
        </Link>
    )
}
