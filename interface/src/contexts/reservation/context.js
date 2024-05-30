import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'
const ReservationContext = createContext({
    tables: Array,
    modalState: String,
    idTableSelected: Number,
    setModalState: () => {},
    setIdTableSelected: () => {},
    getAllTables: async () => {
        return Promise.resolve()
    },
})

export function ReservationContextProvider({ children }) {
    const [modalState, setModalState] = useState('')
    const [idTableSelected, setIdTableSelected] = useState('')
    const [tables, setTables] = useState([{}])

    const getAllTables = async () => {
        axios
            .get(`https://table-planner-restaurant-1.onrender.com/api/table`)
            .then((response) => {
                setTables(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <ReservationContext.Provider
            value={{
                modalState: modalState,
                idTableSelected: idTableSelected,
                tables: tables,
                setModalState: setModalState,
                setIdTableSelected: setIdTableSelected,
                getAllTables: getAllTables,
            }}
        >
            {children}
        </ReservationContext.Provider>
    )
}

export const useReservation = () => useContext(ReservationContext)
