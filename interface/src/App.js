import { Routes, useNavigate, Route } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import { Home } from './pages/Home'
import { ReservationContextProvider } from './contexts/reservation'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
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
