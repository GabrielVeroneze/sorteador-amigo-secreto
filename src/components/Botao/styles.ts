import styled from 'styled-components'
import { device } from '@/styles/Breakpoints'

export const Button = styled.button`
    background-color: ${({ theme }) => theme.cores.secundaria};
    border: 1px solid #000000;
    border-radius: 37.5px;
    box-shadow: 2px 2px 0px 0px #000000;
    color: ${({ theme }) => theme.cores.texto.secundaria};
    font-size: 1rem;
    font-weight: 600;
    height: 66px;
    letter-spacing: 0.25px;
    padding: 0 1.5rem;
    width: 155px;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }

    svg {
        display: none;
    }

    @media ${device.lg} {
        align-items: center;
        border: 2px solid #000000;
        box-shadow: 4px 4px 0px 0px #000000;
        display: flex;
        font-size: 1.25rem;
        gap: 1.625rem;
        height: 80px;
        padding: 0 2.5rem;
        width: auto;

        svg {
            display: inline-block;
            font-size: 2.5rem;
        }
    }
`
