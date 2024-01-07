import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import Rodape from '@/components/Rodape'

describe('onde não existem participantes suficientes', () => {
    test('a brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape />
            </RecoilRoot>
        )

        const botao = screen.getByRole('button')

        expect(botao).toBeDisabled()
    })
})
