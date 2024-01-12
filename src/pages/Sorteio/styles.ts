import styled from 'styled-components'

export const MenuOpcoes = styled.select`
    border: 1px solid #000000;
    border-radius: 32px;
    box-shadow: 2px 2px 0px 0px #000000;
    font-family: ${({ theme }) => theme.fontes.familia.primaria};
    font-size: 1rem;
    height: 56px;
    line-height: normal;
    outline: none;
    padding: 1rem 1.75rem;
    width: 100%;
`
