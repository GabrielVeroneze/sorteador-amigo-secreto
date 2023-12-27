import { Botao, Campo, Icone, Input } from './styles'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const Formulario = () => {
    return (
        <Campo>
            <Icone>
                <PersonAddIcon />
            </Icone>
            <Input
                type="text"
                placeholder="Insira os nomes dos participantes"
            />
            <Botao disabled>Adicionar</Botao>
        </Campo>
    )
}

export default Formulario
