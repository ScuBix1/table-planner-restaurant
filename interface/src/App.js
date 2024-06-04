import { Routes, useNavigate, Route } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import { Home } from './pages/Home'
import { ReservationContextProvider } from './contexts/reservation'
import { TermesEtConditions } from './pages/TermesConditions'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/termes-et-conditions' element={<TermesEtConditions/>}/>
        </Routes>
    )
}
export default function App() {
const cle = 'pk_live_51PMsM4BjG7na9ODgPV1nhJrpQ1qlKuO1erTUhcwsO0Sjae2CTRLyWACKXQMu5DZuTwmReQPTcCiLPHotlYZDrkO600RVwGielE'
const stripeTestPromise = loadStripe(cle)
    const navigate = useNavigate()
    return (
        <NextUIProvider navigate={navigate}>
            <Elements stripe={stripeTestPromise}>
            <ReservationContextProvider>
                <Router />
            </ReservationContextProvider>
            </Elements>
        </NextUIProvider>
    )
}
