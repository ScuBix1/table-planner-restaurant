import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useAsyncValue } from 'react-router-dom'
const ReservationContext = createContext({
    tables: Array,
    modalState: String,
    idTableSelected: Number,
    setModalState: () => {},
    setIdTableSelected: () => {},
    getAllTables: async () => {
        return Promise.resolve()
    },
    getIdTable: async (id) => {
        return Promise.resolve()
    },
})

export function ReservationContextProvider({ children }) {
    const [modalState, setModalState] = useState('')
    const [idTableSelected, setIdTableSelected] = useState('')
    const [tables, setTables] = useState([{}])

    const getAllTables = async () => {
        axios
            .get('http://localhost:3003/api/table')
            .then((response) => {
                setTables(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const getIdTable =  async (id) => {
        axios.get(`http://localhost:3003/api/table/idTable/${id}`)
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
                getIdTable: getIdTable,
            }}
        >
            {children}
        </ReservationContext.Provider>
    )
}

export const useReservation = () => useContext(ReservationContext)
