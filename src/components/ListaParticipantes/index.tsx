import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import { Lista, Participante } from './styles'

const ListaParticipantes = () => {
    const { listaDeParticipantes } = useListaDeParticipantes()

    return (
        <Lista>
            {listaDeParticipantes.map(participante => (
                <Participante key={participante}>
                    {participante}
                </Participante>
            ))}
        </Lista>
    )
}

export default ListaParticipantes