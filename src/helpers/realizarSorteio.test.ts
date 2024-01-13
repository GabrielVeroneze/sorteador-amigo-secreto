import { realizarSorteio } from '@/helpers/realizarSorteio'

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participantes = ['João', 'Maria', 'José', 'Lúcia', 'Kevin', 'Michael']

        const sorteio = realizarSorteio(participantes)

        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)

            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})
