import { Container, Imagem, Logo } from './styles'
import imagemSm from '@/assets/images/participante.png'
import imagemMd from '@/assets/images/participante-1024.png'

const Banner = () => {
    return (
        <Container>
            <Logo />
            <Imagem>
                <source srcSet={imagemMd} media="(min-width: 1024px)" />
                <img src={imagemSm} alt="Participante com um presente na mão" />
            </Imagem>
        </Container>
    )
}

export default Banner
