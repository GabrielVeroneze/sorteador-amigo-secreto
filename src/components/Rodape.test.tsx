import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import { theme } from '@/styles/Theme'
import Rodape from '@/components/Rodape'

jest.mock('@/hooks/useListaDeParticipantes', () => ({
    useListaDeParticipantes: jest.fn()
}))

const mockSorteio = jest.fn()

jest.mock('@/hooks/useSorteador', () => ({
    useSorteador: () =>  ({ sortearParticipantes: mockSorteio })
}))

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavegacao
}))

describe('quando não existem participantes suficientes', () => {
    const listaDeParticipantes: string[] = []

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue({ listaDeParticipantes })
    })

    test('a brincadeira não pode ser iniciada', () => {
        render(
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <Rodape />
                </RecoilRoot>
            </ThemeProvider>
        )

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})

describe('quando existem participantes suficientes', () => {
    const listaDeParticipantes: string[] = ['João', 'Maria', 'José', 'Lúcia']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue({ listaDeParticipantes })
    })

    test('a brincadeira pode ser iniciada', () => {
        render(
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <Rodape />
                </RecoilRoot>
            </ThemeProvider>
        )

        const botao = screen.getByRole('button')

        expect(botao).not.toBeDisabled()
    })

    test('a brincadeira foi iniciada', () => {
        render(
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <Rodape />
                </RecoilRoot>
            </ThemeProvider>
        )

        const botao = screen.getByRole('button')
        fireEvent.click(botao)

        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})
