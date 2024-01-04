import { Button } from './styles'

interface BotaoProps {
    children: React.ReactNode
}

const Botao = ({ children }: BotaoProps) => {
    return (
        <Button>{children}</Button>
    )
}

export default Botao
