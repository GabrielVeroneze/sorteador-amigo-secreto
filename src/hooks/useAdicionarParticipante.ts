import { useRecoilState, useSetRecoilState } from 'recoil'
import { listaParticipantes, mensagemErroState } from '@/state/atom'

export const useAdicionarParticipante = () => {
    const [listaDeParticipantes, setListaParticipantes] = useRecoilState(listaParticipantes)
    const setMensagemDeErro = useSetRecoilState(mensagemErroState)

    const adicionarParticipante = (nomeParticipante: string) => {

        if(listaDeParticipantes.includes(nomeParticipante)) {
            setMensagemDeErro('Nomes duplicados não são permitidos!')
            return
        }

        setListaParticipantes(listaAtual => [
            ...listaAtual,
            nomeParticipante,
        ])
    }

    return {
        adicionarParticipante,
    }
}
