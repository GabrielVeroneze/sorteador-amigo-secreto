import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useListaDeParticipantes } from '@/hooks/useListaDeParticipantes'
import ListaParticipantes from '@/components/ListaParticipantes'

jest.mock('@/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('uma lista vazia de participantes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })

    test('deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <ListaParticipantes />
            </RecoilRoot>
        )

        const itens = screen.queryAllByRole('listitem')

        expect(itens).toHaveLength(0)
    })
})

