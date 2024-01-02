import { useRecoilValue } from 'recoil'
import { mensagemErroState } from '@/state/atom'

export const useMensagemDeErro = () => {
    const mensagemDeErro = useRecoilValue(mensagemErroState)

    return {
        mensagemDeErro,
    }
}
