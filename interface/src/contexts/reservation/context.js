import React, { createContext, useContext, useEffect, useState } from "react";
const ReservationContext = createContext({
    modalState: String,
    idTableSelected: Number,
    setModalState: ()=>{},
    setIdTableSelected: ()=>{},
})

export function ReservationContextProvider({children}){
    const [modalState, setModalState] = useState('')
    const [idTableSelected, setIdTableSelected] = useState('')
    return(
        <ReservationContext.Provider value={{
            modalState: modalState,
            idTableSelected: idTableSelected,
            setModalState: setModalState,
            setIdTableSelected: setIdTableSelected,
        }}>
            {children}
        </ReservationContext.Provider>
    )
}

export const useReservation = ()=>useContext(ReservationContext)