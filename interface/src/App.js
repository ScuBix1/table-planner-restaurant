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
    
const stripeTestPromise = loadStripe(process.env.PUBLIC_KEY)
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
