import styled from 'styled-components'
import bannerImagem from '/public/images/banner-figura.png'

export const Container = styled.header`
    align-items: center;
    background-color: ${({ theme }) => theme.cores.primaria};
    display: flex;
    flex-direction: column;
    height: 384px;
    justify-content: space-between;
    padding: 2rem ${({ theme }) => theme.paddings.lateral.pequeno};
`

export const Logo = styled.h1`
    background-image: url('images/logo-vertical.svg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 157px;
    width: 186px;
`

export const Imagem = styled.img.attrs({
    src: bannerImagem,
})`
    height: 158px;
    width: 328px;
    z-index: 1;
`
