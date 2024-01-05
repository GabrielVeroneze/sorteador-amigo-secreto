import { useNavigate } from 'react-router-dom'
import { Wrapper } from './styles'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import Titulo from '@/components/Titulo'
import Formulario from '@/components/Formulario'
import ListaParticipantes from '@/components/ListaParticipantes'
import Botao from '@/components/Botao'
import imagemSm from '@/assets/images/sacolas-de-compras.png'
import imagemMd from '@/assets/images/sacolas-de-compras-1024.png'

const Inicio = () => {
    const navigate = useNavigate()

    const navegarRotas = () => {
        navigate('/sorteio')
    }

    return (
        <>
            <Titulo>Vamos começar!</Titulo>
            <Formulario />
            <ListaParticipantes />
            <Wrapper>
                <Botao onClick={navegarRotas}>
                    <PlayCircleOutlineIcon />
                    Iniciar brincadeira!
                </Botao>
                <picture>
                    <source srcSet={imagemMd} media="(min-width: 1024px)" />
                    <img src={imagemSm} alt="Sacolas de compras" />
                </picture>
            </Wrapper>
        </>
    )
}

export default Inicio
