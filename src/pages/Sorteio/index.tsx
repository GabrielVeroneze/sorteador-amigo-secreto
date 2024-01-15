import { useState } from 'react'
import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import { useResultadoSorteio } from '@/hooks/useResultadoSorteio'
import { Container, Imagem, Menu, Texto, TextoDestaque } from './styles'
import CasinoIcon from '@mui/icons-material/Casino'
import Botao from '@/components/Botao'
import Titulo from '@/components/Titulo'
import imagemSm from '@/assets/images/aviao.png'
import imagemMd from '@/assets/images/aviao-1024.png'

const Sorteio = () => {
    const { listaDeParticipantes } = useListaDeParticipantes()
    const { resultadoSorteio } = useResultadoSorteio()

    const [participanteAtual, setParticipanteAtual] = useState<string>('')
    const [amigoSecreto, setAmigoSecreto] = useState<string | undefined>('')

    const sortear = () => {
        setAmigoSecreto(resultadoSorteio.get(participanteAtual))
    }

    return (
        <>
            <Titulo>Quem vai tirar o papelzinho?</Titulo>
            <Menu
                value={participanteAtual}
                onChange={evento => setParticipanteAtual(evento.target.value)}
                required
            >
                <option value="" disabled hidden>
                    Selecione seu nome
                </option>
                {listaDeParticipantes.map(participante => (
                    <option key={participante}>{participante}</option>
                ))}
            </Menu>
            <Texto>
                Clique em em sortear para ver quem é seu amigo secreto!
            </Texto>
            <Container>
                <Botao onClick={sortear}>
                    <CasinoIcon />
                    Sortear!
                </Botao>
                {amigoSecreto && (
                    <TextoDestaque role="alert">{amigoSecreto}</TextoDestaque>
                )}
                <Imagem>
                    <source srcSet={imagemMd} media="(min-width: 1024px)" />
                    <img src={imagemSm} alt="Avião de papel" />
                </Imagem>
            </Container>
        </>
    )
}

export default Sorteio
