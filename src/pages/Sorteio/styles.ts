import styled from 'styled-components'
import { device } from '@/styles/Breakpoints'

export const MenuOpcoes = styled.select`
    border: 1px solid #000000;
    border-radius: 32px;
    box-shadow: 2px 2px 0px 0px #000000;
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-family: ${({ theme }) => theme.fontes.familia.primaria};
    font-size: 1rem;
    height: 50px;
    line-height: normal;
    outline: none;
    padding: 0 1.75rem;
    width: 100%;

    @media ${device.lg} {
        border: 2px solid #000000;
        box-shadow: 4px 4px 0px 0px #000000;
        height: 75px;
        padding: 0 2rem;
    }
`
