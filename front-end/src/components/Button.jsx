import { useParams } from 'react-router-dom'

export const Button = ({ text }) => {
    const { subpage } = useParams()

    const normalizedText = (text ?? '').toString().trim().toLowerCase()
    const normalizedSubpage = (subpage ?? '').toString().trim().toLowerCase()

    const buttonClass = () => {
        // Se a URL estiver ausente/invalid, não aplica estilo.
        if (!normalizedSubpage) return ''
        if (normalizedText === normalizedSubpage) return 'bg-primary-400 text-white'
        return ''
    }

    return (
        <button
            className={`hover:bg-primary-400 cursor-pointer rounded-full px-4 py-2 transition hover:text-white ${buttonClass()}`}
        >
            {text}
        </button>
    )
}

