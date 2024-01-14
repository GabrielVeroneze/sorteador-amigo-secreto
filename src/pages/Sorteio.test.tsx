import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import { theme } from '@/styles/Theme'
import Sorteio from '@/pages/Sorteio'

jest.mock('@/hooks/useListaDeParticipantes', () => ({
    useListaDeParticipantes: jest.fn()
}))

describe('na página de sorteio', () => {
    const listaDeParticipantes: string[] = ['João', 'Maria', 'José', 'Lúcia']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue({ listaDeParticipantes })
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
        const amigoSecreto = screen.getByRole('alert')

        fireEvent.change(select, {
            target: {
                value: listaDeParticipantes[0]
            }
        })
        fireEvent.click(botao)

        expect(amigoSecreto).toBeInTheDocument()
    })
})
