import { useRecoilValue } from 'recoil'
import { listaParticipantes } from '@/state/atom'

export const useListaDeParticipantes = () => {
    const listaDeParticipantes = useRecoilValue(listaParticipantes)

    return {
        listaDeParticipantes,
    }
}
