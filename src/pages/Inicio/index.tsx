import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import { Lista, Participante } from './styles'
import Formulario from '@/components/Formulario'
import Botao from '@/components/Botao'

const Inicio = () => {
    const { listaDeParticipantes } = useListaDeParticipantes()

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
            <Botao>
                Iniciar brincadeira!
            </Botao>
        </>
    )
}

export default Inicio
