import { useSetRecoilState } from 'recoil'
import { resultadoAmigoSecreto } from '@/state/atom'
import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'

export const useSorteador = () => {
    const { listaDeParticipantes } = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)

    const sortearParticipantes = () => {

        setResultado(resultado)
    }

    return {
        sortearParticipantes,
    }
}
