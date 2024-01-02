import { useRef, useState } from 'react'
import { useAdicionarParticipante } from '@/hooks/useAdicionarParticipante'
import { useMensagemDeErro } from '@/hooks/useMensagemDeErro'
import { Botao, Campo, Icone, Input } from './styles'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const Formulario = () => {
    const { adicionarParticipante } = useAdicionarParticipante()
    const { mensagemDeErro } = useMensagemDeErro()

    const [nome, setNome] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        adicionarParticipante(nome)

        setNome('')
        inputRef.current?.focus()
    }

    return (
        <Campo onSubmit={evento => handleSubmit(evento)}>
            <Icone>
                <PersonAddIcon />
            </Icone>
            <Input
                type="text"
                placeholder="Insira os nomes dos participantes"
                value={nome}
                onChange={evento => setNome(evento.target.value)}
                ref={inputRef}
            />
            <Botao disabled={!nome}>Adicionar</Botao>
            {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
        </Campo>
    )
}

export default Formulario
