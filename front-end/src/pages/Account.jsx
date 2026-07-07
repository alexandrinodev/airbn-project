import AccProfile from '../components/AccProfile';
import { Button } from '../components/Button';
import { Link, useParams } from 'react-router-dom'

const Account = ({ user }) => {
    const { subpage } = useParams()
    return (
        <section className="p-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 items-center">
                <div className="flex">
                    <Link to='/account/perfil' >
                        <Button text="perfil" />
                    </Link>

                    <Link to="/account/reservas">
                        <Button text="reservas" />
                    </Link>

                    <Link to="/account/lugares">
                        <Button text="lugares" />
                    </Link>
                </div>

                {subpage === 'perfil' && <AccProfile user={user} />}

            </div>
        </section>
    )
}

export default Account