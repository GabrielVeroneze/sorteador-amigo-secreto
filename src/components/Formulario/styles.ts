import styled from 'styled-components'

export const Campo = styled.form`
    border-radius: 37.5px;
    box-shadow: 4px 4px 0px 0px #000000;
    color: ${({ theme }) => theme.cores.texto.primaria};
    display: flex;
    font-size: 1rem;
    height: 82px;
    position: relative;
`

export const Icone = styled.div`
    color: #0000004d;
    left: 52px;
    position: absolute;
    top: 28px;
`

export const Input = styled.input`
    border: 2px solid #000000;
    border-radius: 37.5px 0px 0px 37.5px;
    flex-grow: 1;
    outline: none;
    padding: 1.125rem 2.25rem 1.125rem 6.625rem;

    &::placeholder {
        color: #0000004d;
    }
`

export const Botao = styled.button`
    background-color: ${({ theme }) => theme.cores.fundo.secundario};
    border: 2px solid #000000;
    border-radius: 0px 37.5px 37.5px 0px;
    width: 227px;
`
