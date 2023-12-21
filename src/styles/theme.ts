import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    cores: {
        primaria: '#4B69FD',
        secundaria: '#FE652B',
        terciaria: '#000000',
        fundo: {
            primaria: '#FFF9EB',
            secundario: '#C4C4C4',
        },
        texto: {
            primaria: '#444444',
            secundaria: '#FFFFFF',
            terciaria: '#4B69FDFC',
        },
    },
    fontes: {
        familia: {
            primaria: 'Poppins',
        },
        tamanho: {
            pequeno: '1rem',
            medio: '1.25rem',
            grande: '2rem',
        },
    },
    paddings: {
        lateral: {
            pequeno: '1rem',
            medio: '9.375rem',
            grande: '17.125rem',
        },
    },
}
