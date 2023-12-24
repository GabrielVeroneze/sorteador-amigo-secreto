import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Inicio from '@/pages/Inicio'
import Sorteio from '@/pages/Sorteio'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Inicio />} />
                    <Route path="sorteio" element={<Sorteio />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
