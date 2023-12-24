import { Outlet } from 'react-router-dom'
import Banner from '@/components/Banner'

const Layout = () => {
    return (
        <>
            <Banner />
            <Outlet />
        </>
    )
}

export default Layout
