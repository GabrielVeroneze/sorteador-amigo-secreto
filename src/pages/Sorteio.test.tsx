import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import { useResultadoSorteio } from '@/hooks/useResultadoSorteio'
import { theme } from '@/styles/Theme'
import Sorteio from '@/pages/Sorteio'

jest.mock('@/hooks/useListaDeParticipantes', () => ({
    useListaDeParticipantes: jest.fn()
}))

jest.mock('@/hooks/useResultadoSorteio', () => ({
    useResultadoSorteio: jest.fn()
}))

describe('na página de sorteio', () => {
    const listaDeParticipantes: string[] = ['João', 'Maria', 'José', 'Lúcia']
    const resultadoSorteio: Map<string, string> = new Map([
        ['Lúcia', 'João'],
        ['João', 'José'],
        ['José', 'Maria'],
        ['Maria', 'Lúcia'],
    ])

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue({ listaDeParticipantes });
        (useResultadoSorteio as jest.Mock).mockReturnValue({ resultadoSorteio });
    })

    test('todos os participantes podem exibir seu amigo secreto', () => {
        render(
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <Sorteio />
                </RecoilRoot>
            </ThemeProvider>
        )

        const opcoes = screen.queryAllByRole('option')

        expect(opcoes).toHaveLength(listaDeParticipantes.length)
    })

    test('o amigo secreto é exibido quando solicitado', () => {
        render(
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <Sorteio />
                </RecoilRoot>
            </ThemeProvider>
        )

        const select = screen.getByRole('combobox')
        const botao = screen.getByRole('button')

        fireEvent.change(select, {
            target: {
                value: listaDeParticipantes[0]
            }
        })
        fireEvent.click(botao)

        const amigoSecreto = screen.getByRole('alert')

        expect(amigoSecreto).toBeInTheDocument()
    })
})
