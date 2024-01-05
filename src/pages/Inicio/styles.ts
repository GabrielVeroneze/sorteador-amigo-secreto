import styled from 'styled-components'
import { device } from '@/styles/Breakpoints'

export const Wrapper = styled.div`
    align-items: center;
    align-self: self-end;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media ${device.lg} {
        flex-direction: row;
        justify-content: space-between;
    }
`
