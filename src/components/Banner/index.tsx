import { Container, Imagem, Logo } from './styles'
import imagemSm from '@/assets/images/banner-figura.png'
import imagemMd from '@/assets/images/banner-figura-1024.png'

const Banner = () => {
    return (
        <Container>
            <Logo />
            <Imagem>
                <source srcSet={imagemMd} media="(min-width: 1024px)" />
                <img src={imagemSm} />
            </Imagem>
        </Container>
    )
}

export default Banner
