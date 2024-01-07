import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import Botao from '@/components/Botao'
import imagemSm from '@/assets/images/sacolas-de-compras.png'
import imagemMd from '@/assets/images/sacolas-de-compras-1024.png'

const Rodape = () => {
    const navigate = useNavigate()

    const navegarRotas = () => {
        navigate('/sorteio')
    }

    return (
        <Container>
            <Botao onClick={navegarRotas}>
                <PlayCircleOutlineIcon />
                Iniciar brincadeira!
            </Botao>
            <picture>
                <source srcSet={imagemMd} media="(min-width: 1024px)" />
                <img src={imagemSm} alt="Sacolas de compras" />
            </picture>
        </Container>
    )
}

export default Rodape
