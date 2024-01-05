import styled from 'styled-components'
import { device } from '@/styles/Breakpoints'

export const Title = styled.h2`
    color: ${({ theme }) => theme.cores.texto.terciaria};
    font-size: 1.25rem;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 2.25rem;
    text-align: center;

    @media ${device.lg} {
        font-size: 2rem;
    }
`
