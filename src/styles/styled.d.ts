import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        cores: {
            primaria: string
            secundaria: string
            terciaria: string
            fundo: {
                primaria: string
                secundario: string
            }
            texto: {
                primaria: string
                secundaria: string
                terciaria: string
            }
        }
        fontes: {
            familia: {
                primaria: string
            }
            tamanho: {
                pequeno: string
                medio: string
                grande: string
            }
        }
        paddings: {
            lateral: {
                pequeno: string
                medio: string
                grande: string
            }
        }
    }
}
