import { useSetRecoilState } from 'recoil'
import { listaParticipantes } from '@/state/atom'

export const useAdicionarParticipante = () => {
    const setListaParticipantes = useSetRecoilState(listaParticipantes)

    const adicionarParticipante = (nomeParticipante: string) => {
        setListaParticipantes(listaAtual => [
            ...listaAtual,
            nomeParticipante,
        ])
    }

    return {
        adicionarParticipante,
    }
}
