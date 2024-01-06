import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import { theme } from '@/styles/Theme'
import ListaParticipantes from '@/components/ListaParticipantes'

jest.mock('@/hooks/useListaDeParticipantes', () => ({
    useListaDeParticipantes: jest.fn()
}))

describe('uma lista vazia de participantes', () => {
    const listaDeParticipantes: string[] = []

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue({ listaDeParticipantes })
    })

    test('deve ser renderizada sem elementos', () => {
        render(
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <ListaParticipantes />
                </RecoilRoot>
            </ThemeProvider>
        )

        const itens = screen.queryAllByRole('listitem')

        expect(itens).toHaveLength(0)
    })
})

describe('uma lista preenchida de participantes', () => {
    const listaDeParticipantes: string[] = ['João', 'Maria', 'José', 'Lúcia']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue({ listaDeParticipantes })
    })

    test('deve ser renderizada com elementos', () => {
        render(
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <ListaParticipantes />
                </RecoilRoot>
            </ThemeProvider>
        )

        const itens = screen.queryAllByRole('listitem')

        expect(itens).toHaveLength(listaDeParticipantes.length)
    })
})
