import styled from 'styled-components'
import { device } from '@/styles/Breakpoints'

export const Principal = styled.main`
    background-color: ${({ theme }) => theme.cores.fundo.primaria};
    border: 1px solid #000000;
    border-radius: 48px 48px 0px 0px;
    flex-grow: 1;
    margin-bottom: -53px;
    padding: 3.125rem ${({ theme }) => theme.paddings.lateral.pequeno};
    position: relative;
    top: -53px;

    @media ${device.lg} {
        border: 2px solid #000000;
        border-radius: 64px 64px 0px 0px;
        margin-bottom: -90px;
        padding: 5.375rem ${({ theme }) => theme.paddings.lateral.medio};
        top: -90px;
    }
`
