import { atom } from 'recoil'

export const listaParticipantes = atom<string[]>({
    key: 'listaParticipantes',
    default: [],
})

export const resultadoAmigoSecreto = atom<Map<string, string>>({
    key: 'resultadoAmigoSecreto',
    default: new Map(),
})

export const mensagemErroState = atom<string>({
    key: 'mensagemErroState',
    default: '',
})
