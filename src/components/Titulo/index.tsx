import { Title } from './styles'

interface TituloProps {
    children: string
}

const Titulo = ({ children }: TituloProps) => {
    return (
        <Title>{children}</Title>
    )
}

export default Titulo
