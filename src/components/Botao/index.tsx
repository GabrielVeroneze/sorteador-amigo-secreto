import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import { Button } from './styles'

interface BotaoProps {
    children: React.ReactNode
    onClick?: () => void
}

const Botao = ({ children, onClick }: BotaoProps) => {
    const { listaDeParticipantes } = useListaDeParticipantes()

    return (
        <Button
            disabled={listaDeParticipantes.length < 3}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default Botao
