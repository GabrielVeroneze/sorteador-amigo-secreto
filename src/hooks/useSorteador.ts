import { useSetRecoilState } from 'recoil'
import { resultadoAmigoSecreto } from '@/state/atom'
import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import { realizarSorteio } from '@/helpers/realizarSorteio'

export const useSorteador = () => {
    const { listaDeParticipantes } = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)

    const sortearParticipantes = () => {
        const resultado = realizarSorteio(listaDeParticipantes)

        setResultado(resultado)
    }

    return {
        sortearParticipantes,
    }
}
