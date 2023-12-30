import styled from 'styled-components'
import { device } from '@/styles/Breakpoints'

export const Campo = styled.form`
    align-items: center;
    border-radius: 37.5px;
    color: ${({ theme }) => theme.cores.texto.primaria};
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    gap: 0.5rem 0;
    position: relative;

    @media ${device.lg} {
        flex-direction: row;
    }
`

export const Icone = styled.div`
    color: #0000004d;
    left: 26px;
    position: absolute;
    top: 12px;
    
    @media ${device.lg} {
        left: 52px;
        top: 28px;
    }
`

export const Input = styled.input`
    border: 1px solid #000000;
    border-radius: 37.5px;
    box-shadow: 2px 2px 0px 0px #000000;
    font-size: 0.875rem;
    height: 48px;
    outline: none;
    padding: 0.875rem 1.625rem 0.875rem 4rem;
    width: 100%;

    &::placeholder {
        color: #0000004d;
    }

    @media ${device.lg} {
        border: 2px solid #000000;
        border-radius: 37.5px 0px 0px 37.5px;
        box-shadow: 4px 4px 0px 0px #000000;
        font-size: 1rem;
        height: 82px;;
        padding: 1.125rem 2.25rem 1.125rem 6.625rem;
    }
`

export const Botao = styled.button`
    background-color: ${({ theme }) => theme.cores.fundo.secundario};
    border: 1px solid #000000;
    border-radius: 37.5px;
    box-shadow: 2px 2px 0px 0px #000000;
    font-size: 1rem;
    height: 48px;
    width: 155px;

    @media ${device.lg} {
        border: 2px solid #000000;
        border-radius: 0px 37.5px 37.5px 0px;
        box-shadow: 4px 4px 0px 0px #000000;
        height: 82px;
        width: 227px;
    }
`
