import styled from 'styled-components'
import { device } from '@/styles/Breakpoints'

export const Lista = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 1.125rem 0;
`

export const Participante = styled.li`
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: 1rem;
    line-height: normal;

    @media ${device.lg} {
        font-size: 1.125rem;
    }
`