import styled from 'styled-components'
import { device } from '@/styles/Breakpoints'

export const Menu = styled.select`
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

export const Texto = styled.p`
    color: ${({ theme }) => theme.cores.texto.primaria};
    font-size: 1.125rem;
    line-height: normal;
    margin: 2rem 0 1.375rem;
    text-align: center;

    @media ${device.lg} {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
    }
`

export const TextoDestaque = styled.p`
    color: ${({ theme }) => theme.cores.secundaria};
    font-size: 1.125rem;
    line-height: normal;
    margin-top: 0.875rem;

    @media ${device.lg} {
        font-size: 1.625rem;
        margin-top: 1rem;
    }
`

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const Imagem = styled.picture`
    margin-top: 1.25rem;

    @media ${device.lg} {
        margin-top: 2rem;
    }
`
