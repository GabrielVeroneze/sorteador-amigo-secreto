import styled from 'styled-components'
import { device } from '@/styles/Breakpoints'

export const Container = styled.header`
    align-items: center;
    background-color: ${({ theme }) => theme.cores.primaria};
    display: flex;
    flex-direction: column;
    height: 384px;
    justify-content: space-between;
    padding: 2rem ${({ theme }) => theme.paddings.lateral.pequeno};

    @media ${device.lg} {
        flex-direction: row;
        height: 454px;
        justify-content: center;
        padding: 3.5rem;
    }
`

export const Logo = styled.h1`
    background-image: url('images/logo-vertical.svg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 157px;
    width: 186px;

    @media ${device.lg} {
        background-image: url('images/logo-horizontal.svg');
        height: 117px;
        width: 351px;
    }
`

export const Imagem = styled.picture`
    z-index: 1;

    @media ${device.lg} {
        align-self: flex-end;
    }
`
