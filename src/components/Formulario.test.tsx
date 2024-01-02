import { act, fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/Theme'
import Formulario from '@/components/Formulario'

describe('o comportamento do Formulario.tsx', () => {
    test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <Formulario />
                </RecoilRoot>
            </ThemeProvider>
        )

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        expect(input).toBeInTheDocument()
        expect(botao).toBeDisabled()
    })

    test('adicionar um participante caso exista um nome preenchido', () => {
        render(
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <Formulario />
                </RecoilRoot>
            </ThemeProvider>
        )

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'John'
            }
        })
        fireEvent.click(botao)

        expect(input).toHaveFocus()
        expect(input).toHaveValue('')
    })

    test('nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <Formulario />
                </RecoilRoot>
            </ThemeProvider>
        )

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'John'
            }
        })
        fireEvent.click(botao)

        fireEvent.change(input, {
            target: {
                value: 'John'
            }
        })
        fireEvent.click(botao)

        const mensagemDeErro = screen.getByRole('alert')

        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })
    
    test('a mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers()

        render(
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <Formulario />
                </RecoilRoot>
            </ThemeProvider>
        )

        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')

        fireEvent.change(input, {
            target: {
                value: 'John'
            }
        })
        fireEvent.click(botao)

        fireEvent.change(input, {
            target: {
                value: 'John'
            }
        })
        fireEvent.click(botao)

        let mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()

        act(() => {
            jest.runAllTimers()
        })

        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    })
})
