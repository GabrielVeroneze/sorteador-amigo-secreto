import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/Theme'
import Formulario from './Formulario'

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(
        <ThemeProvider theme={theme}>
            <Formulario />
        </ThemeProvider>
    )

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    const botao = screen.getByRole('button')

    expect(input).toBeInTheDocument()

    expect(botao).toBeDisabled()
})
