import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) => theme.fontes.familia.primaria};
        min-height: 100vh;
    }
`

export default GlobalStyles
