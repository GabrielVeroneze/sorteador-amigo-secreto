import { atom } from 'recoil'

export const listaParticipantes = atom<string[]>({
    key: 'listaParticipantes',
    default: [],
})

export const mensagemErroState = atom<string>({
    key: 'mensagemErroState',
    default: '',
})
