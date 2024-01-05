import { Button } from './styles'

interface BotaoProps {
    children: React.ReactNode
    onClick?: () => void
}

const Botao = ({ children, onClick }: BotaoProps) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    )
}

export default Botao
