import { useState } from 'react'
import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import { useResultadoSorteio } from '@/hooks/useResultadoSorteio'
import { MenuOpcoes } from './styles'
import CasinoIcon from '@mui/icons-material/Casino'
import Botao from '@/components/Botao'

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
            <MenuOpcoes
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
            </MenuOpcoes>
            {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
            <Botao onClick={sortear}>
                <CasinoIcon />
                Sortear!
            </Botao>
        </>
    )
}

export default Sorteio
