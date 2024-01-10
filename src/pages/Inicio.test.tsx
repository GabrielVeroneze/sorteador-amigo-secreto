import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { theme } from '@/styles/Theme'
import Inicio from '@/pages/Inicio'

const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavegacao
}))

describe('a página de configuração', () => {
    test('deve ser renderizada corretamente', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <Inicio />
                </RecoilRoot>
            </ThemeProvider>
        )

        expect(container).toMatchSnapshot()
    })
})
