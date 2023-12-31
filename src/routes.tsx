import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Layout from '@/pages/Layout'
import Inicio from '@/pages/Inicio'
import Sorteio from '@/pages/Sorteio'

const AppRoutes = () => {
    return (
        <Router>
            <RecoilRoot>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Inicio />} />
                        <Route path="sorteio" element={<Sorteio />} />
                    </Route>
                </Routes>
            </RecoilRoot>
        </Router>
    )
}

export default AppRoutes
