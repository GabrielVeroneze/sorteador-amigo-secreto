import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { theme } from '@/styles/Theme'
import Rodape from '@/components/Rodape'

describe('onde não existem participantes suficientes', () => {
    test('a brincadeira não pode ser iniciada', () => {
        render(
            <ThemeProvider theme={theme}>
                <Router>
                    <RecoilRoot>
                        <Rodape />
                    </RecoilRoot>
                </Router>
            </ThemeProvider>
        )

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})
