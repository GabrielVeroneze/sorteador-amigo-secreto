import { Outlet } from 'react-router-dom'
import Banner from '@/components/Banner'
import { Principal } from './styles'

const Layout = () => {
    return (
        <>
            <Banner />
            <Principal>
                <Outlet />
            </Principal>
        </>
    )
}

export default Layout
