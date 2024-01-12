import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import Sorteio from '@/pages/Sorteio'

jest.mock('@/hooks/useListaDeParticipantes', () => ({
    useListaDeParticipantes: jest.fn()
}))

describe('na página de sorteio', () => {
    const listaDeParticipantes: string[] = ['João', 'Maria', 'José', 'Lúcia']

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue({ listaDeParticipantes })
    })

    test('todos os participantes podem exibir seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        )

        const opcoes = screen.queryAllByRole('option')

        expect(opcoes).toHaveLength(listaDeParticipantes.length)
    })
})
