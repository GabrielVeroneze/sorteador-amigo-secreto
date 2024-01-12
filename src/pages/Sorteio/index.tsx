import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import { MenuOpcoes } from './styles'

const Sorteio = () => {
    const { listaDeParticipantes } = useListaDeParticipantes()

    return (
        <>
            <MenuOpcoes defaultValue="">
                <option value="" disabled hidden>
                    Selecione seu nome
                </option>
                {listaDeParticipantes.map(participante => (
                    <option key={participante}>{participante}</option>
                ))}
            </MenuOpcoes>
        </>
    )
}

export default Sorteio
