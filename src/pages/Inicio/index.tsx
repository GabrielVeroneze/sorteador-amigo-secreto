import { useNavigate } from 'react-router-dom'
import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import { Lista, Participante, Wrapper } from './styles'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import Formulario from '@/components/Formulario'
import Botao from '@/components/Botao'
import imagemSm from '@/assets/images/sacolas-de-compras.png'
import imagemMd from '@/assets/images/sacolas-de-compras-1024.png'

const Inicio = () => {
    const { listaDeParticipantes } = useListaDeParticipantes()
    const navigate = useNavigate()

    const navegarRotas = () => {
        navigate('/sorteio')
    }

    return (
        <>
            <Formulario />
            <Lista>
                {listaDeParticipantes.map((participante, index) => (
                    <Participante key={index}>
                        {participante}
                    </Participante>
                ))}
            </Lista>
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
