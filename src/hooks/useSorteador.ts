import { useSetRecoilState } from 'recoil'
import { resultadoAmigoSecreto } from '@/state/atom'
import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import shuffle from 'just-shuffle'

export const useSorteador = () => {
    const { listaDeParticipantes } = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)

    const sortearParticipantes = () => {
        const totalDeParticipantes = listaDeParticipantes.length
        const listaEmbaralhada = shuffle(listaDeParticipantes)

        const resultado = new Map<string, string>()

        for (let index = 0; index < totalDeParticipantes; index++) {
            const indiceAmigo =
                index === totalDeParticipantes - 1 ? 0 : index + 1

            resultado.set(
                listaEmbaralhada[index],
                listaEmbaralhada[indiceAmigo]
            )
        }

        setResultado(resultado)
    }

    return {
        sortearParticipantes,
    }
}
