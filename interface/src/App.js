import { Routes, useNavigate, Route } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import { Home } from './pages/Home'
import { ReservationContextProvider } from './contexts/reservation'
import { TermesEtConditions } from './pages/TermesConditions'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/termes-et-conditions' element={<TermesEtConditions/>}/>
        </Routes>
    )
}
export default function App() {
    const navigate = useNavigate()
    return (
        <NextUIProvider navigate={navigate}>
            <ReservationContextProvider>
                <Router />
            </ReservationContextProvider>
        </NextUIProvider>
    )
}
