import { useRecoilValue } from 'recoil'
import { resultadoAmigoSecreto } from '@/state/atom'

export const useResultadoSorteio = () => {
    const resultadoSorteio = useRecoilValue(resultadoAmigoSecreto)

    return {
        resultadoSorteio,
    }
}
