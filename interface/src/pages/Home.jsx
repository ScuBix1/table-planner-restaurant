import React, { useState, useEffect } from 'react'
import {
    Table,
    TableFivePeople,
    TableFivePeopleReserved,
    TableReserved,
    TableTwoPeople,
    TableTwoPeopleReserved,
} from '../components/table'
import { GrandSalon, GrandSalonReserved, PetitSalon, PetitSalonReserved } from '../components/salon'
import Logo from '../assets/img/logo.png'
import { ModalDefault } from '../components/modal'
import { AnnulationButton, ValidationButton } from '../components/button'
import { useReservation } from '../contexts/reservation'
import axios from 'axios'
import { HeroLarge } from '../components/hero'
import { ParcoursUtilisateurs } from '../components/parcoursUtilisateur'
import { Link } from 'react-router-dom'

export const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const { setIdTableSelected, idTableSelected, setModalState, modalState, tables, getAllTables } = useReservation()
    const [reservationData, setReservationData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        timeReservation: '2024-06-16T16:00:00Z/2024-06-16T23:00:00Z',
        termsAccepted: false,
        menu: '',
    })
    const [errorMessage, setErrorMessage] = useState('')
    //fonction de requete pour le formulaire
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`https://table-planner-restaurant-1.onrender.com/api/reservation`, {
                tableNumber: idTableSelected,
                customerName: reservationData.name,
                email: reservationData.email,
                phoneNumber: reservationData.phoneNumber,
                timeReservation: reservationData.timeReservation,
                termsAccepted: reservationData.termsAccepted,
                typeMenu: reservationData.menu,
            })
            if (reservationData.menu === '2') {
                window.location.href = 'https://buy.stripe.com/9AQ5mh1O09ZG4Vi3cg'
            } else if (reservationData.menu === '4') {
                window.location.href = 'https://buy.stripe.com/4gw3e99gs1tacnKbII'
            } else if (reservationData.menu === '5') {
                window.location.href = 'https://buy.stripe.com/5kA4id0JW7RyfzWcMO'
            } else if (reservationData.menu === '15') {
                window.location.href = 'https://buy.stripe.com/5kAeWR64g5Jq9by003'
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message)
            } else {
                setErrorMessage('Une erreur est survenue. Veuillez réessayer.')
            }
        }
    }
    //création des tables de deux personnes du restaurant
    const renderTablesTwo = (initCount, count, idNumber) => {
        const tablesTab = []
        for (let i = initCount; i < initCount + count; i++) {
            if (tables[i]?.numberTable === idNumber && tables[i]?.statusTable === 'reserved') {
                tablesTab.push(
                    <TableTwoPeopleReserved
                        key={'table-' + i}
                        id={idNumber}
                        onClick={() => {
                            setIdTableSelected(tables[i].numberTable)
                            setModalState('')
                        }}
                    />
                )
            } else {
                tablesTab.push(
                    <TableTwoPeople
                        key={'table-' + i}
                        id={idNumber}
                        onClick={() => {
                            setIdTableSelected(tables[i].numberTable)
                            setModalState('menu')
                            setReservationData({ menu: '2' })
                        }}
                    />
                )
            }
            idNumber++
        }
        return tablesTab
    }
    //création des tables de quatre personnes du restaurant
    const renderTables = (initCount, count, idNumber) => {
        const tablesTab = []
        for (let i = initCount; i < initCount + count; i++) {
            if (tables[i]?.numberTable === idNumber && tables[i]?.statusTable === 'reserved') {
                tablesTab.push(
                    <TableReserved
                        key={'table-' + i}
                        id={idNumber}
                        onClick={() => {
                            setIdTableSelected(tables[i].numberTable)
                            setModalState('')
                        }}
                    />
                )
            } else {
                tablesTab.push(
                    <Table
                        key={'table-' + i}
                        id={idNumber}
                        onClick={() => {
                            setIdTableSelected(tables[i].numberTable)
                            setModalState('menu')
                            setReservationData({ menu: '4' })
                        }}
                    />
                )
            }
            idNumber++
        }
        return tablesTab
    }
    //creation des tables de cinq personnes du restaurant
    const renderTablesCinq = (initCount, count, idNumber) => {
        const tablesTab = []
        for (let i = initCount; i < initCount + count; i++) {
            if (tables[i]?.numberTable === idNumber && tables[i]?.statusTable === 'reserved') {
                tablesTab.push(
                    <TableFivePeopleReserved
                        key={'table-' + i}
                        id={idNumber}
                        onClick={() => {
                            setIdTableSelected(tables[i].numberTable)
                            setModalState('')
                        }}
                    />
                )
            } else {
                tablesTab.push(
                    <TableFivePeople
                        key={'table-' + i}
                        id={idNumber}
                        onClick={() => {
                            setIdTableSelected(tables[i].numberTable)
                            setModalState('menu')
                            setReservationData({ menu: '5' })
                        }}
                    />
                )
            }
            idNumber++
        }
        return tablesTab
    }
    //création des petits salons du restaurant
    const renderPetitsSalons = (initCount, count, idNumber) => {
        const petitsSalons = []
        for (let i = initCount; i < initCount + count; i++) {
            if (tables[i]?.numberTable === idNumber && tables[i]?.statusTable === 'reserved') {
                petitsSalons.push(
                    <PetitSalonReserved
                        key={i}
                        id={idNumber}
                        onClick={() => {
                            setIdTableSelected(tables[i].numberTable)
                            setModalState('')
                        }}
                    />
                )
            } else {
                petitsSalons.push(
                    <PetitSalon
                        key={i}
                        id={idNumber}
                        onClick={() => {
                            setIdTableSelected(tables[i].numberTable)
                            setModalState('menu')
                            setReservationData({ menu: '5' })
                        }}
                    />
                )
            }
            idNumber++
        }

        return petitsSalons
    }
    //création des petits salons du restaurant
    const renderGrandsSalons = (initCount, count, idNumber) => {
        const petitsSalons = []
        for (let i = initCount; i < initCount + count; i++) {
            if (tables[i]?.numberTable === idNumber && tables[i]?.statusTable === 'reserved') {
                petitsSalons.push(
                    <GrandSalonReserved
                        key={i}
                        id={idNumber}
                        onClick={() => {
                            setIdTableSelected(tables[i].numberTable)
                            setModalState('')
                        }}
                        className={'flex justify-center items-center'}
                    />
                )
            } else {
                petitsSalons.push(
                    <GrandSalon
                        key={i}
                        id={idNumber}
                        onClick={() => {
                            setIdTableSelected(tables[i].numberTable)
                            setModalState('menu')
                            setReservationData({ menu: '15' })
                        }}
                        className={'flex justify-center items-center'}
                    />
                )
            }
            idNumber++
        }

        return petitsSalons
    }
    //useEffect de redimensionnement de la fenetre
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    //useEffect pour accéder aux tables réservées
    useEffect(() => {
        
        setIdTableSelected(idTableSelected)
        getAllTables()
    }, [idTableSelected])
    return (
        <>
            {windowWidth > 800 ? (
                <>
                    <header className="flex justify-around items-center">
                        <img src={Logo} alt="logo du Royaume de Saba Paris 16ème" className="w-[100px] rounded-full" />
                        <h1 className="md:text-[64px] text-[32px] text-center font-great-vibes">Royaume de Saba</h1>
                        <img src={Logo} alt="logo du Royaume de Saba Paris 16ème" className="w-[100px] rounded-full" />
                    </header>
                </>
            ) : (
                <>
                    <header className="flex justify-center items-center gap-x-2">
                        <img src={Logo} alt="logo du Royaume de Saba Paris 16ème" className="w-[100px] rounded-full" />
                        <h1 className="md:text-[64px] text-[32px] text-center font-great-vibes">Royaume de Saba</h1>
                    </header>
                </>
            )}
            {modalState === 'open' ? (
                <div className="h-[70vh] w-[100vw] flex flex-col justify-center items-center">
                    <h2 className="text-center">Informations de la réservation</h2>
                    <form method="post" className="w-[60vw] mx-auto">
                        <div>
                            <p className="text-red-600 flex justify-around items-center">{errorMessage}</p>
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                {' '}
                                Nom pour la réservation:{' '}
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="John Doe"
                                value={reservationData.name}
                                onChange={(e) => {
                                    const { value } = e.target
                                    setReservationData((prevState) => ({
                                        ...prevState,
                                        name: value,
                                    }))
                                }}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                {' '}
                                Email:{' '}
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="email@email.com"
                                value={reservationData.email}
                                onChange={(e) => {
                                    const { value } = e.target
                                    setReservationData((prevState) => ({
                                        ...prevState,
                                        email: value,
                                    }))
                                }}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                {' '}
                                Téléphone:{' '}
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="0601010101"
                                value={reservationData.phoneNumber}
                                onChange={(e) => {
                                    const { value } = e.target
                                    setReservationData((prevState) => ({
                                        ...prevState,
                                        phoneNumber: value,
                                    }))
                                }}
                                required
                            />
                        </div>
                        <div className="flex items-start my-5">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    checked={reservationData.termsAccepted}
                                    onChange={(e) =>
                                        setReservationData((prevState) => ({
                                            ...prevState,
                                            termsAccepted: e.target.checked,
                                        }))
                                    }
                                    required
                                />
                            </div>
                            <label
                                htmlFor="terms"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                            >
                                J'accepte les{' '}
                                <Link to="/termes-et-conditions" target="_blank" className="text-blue-600 hover:underline dark:text-blue-500">
                                    termes et conditions
                                </Link>
                            </label>
                        </div>
                        <div className=" w-full md:w-[30vw] mx-auto flex justify-around items-center gap-4">
                            <AnnulationButton
                                onClick={() => setModalState('')}
                                className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:cursor-pointer hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] mb-6"
                                textButton={'Annuler'}
                            />
                            <button
                                type="submit"
                                className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#66f466] via-[#0dac0e] to-[#105712] hover:cursor-pointer hover:shadow-md hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#105712] hover:to-[#66f466] mb-6"
                                onClick={handleSubmit}
                            >
                                payer
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <>
                    <HeroLarge/>
                    <ParcoursUtilisateurs/>
                    <h2 className="text-center">Réservez votre table pour l'événement</h2>
                    <div className="h-[700px] md:w-[70vw] bg-[#484d48] relative rounded-xl mx-auto p-auto">
                        <div className="absolute bottom-0 left-4">{renderTables(0, 9, 100)}</div>
                        <div className="absolute bottom-0 left-[30vw]">
                            {renderTablesTwo(9, 6, 200)}
                            {renderTablesCinq(15, 2, 206)}
                            {renderTablesTwo(17, 1, 208)}
                            {renderTables(18, 4, 209)}
                        </div>
                        <div className="absolute bottom-0 right-0 w-[50vw] md:w-[28vw] h-[30vh]">
                            <div className="absolute left-0 bottom-32">{renderPetitsSalons(22, 2, 500)}</div>
                            <div className="absolute bottom-0">{renderGrandsSalons(24, 1, 502)}</div>
                            <div className="absolute right-0 bottom-32">{renderPetitsSalons(25, 2, 503)}</div>
                        </div>
                    </div>
                </>
            )}
            <ModalDefault
                title="Choix du menu"
                isOpen={modalState === 'menu'}
                setIsOpen={() => setModalState('')}
                confirmButton={
                    reservationData.menu !== '' && (
                        <ValidationButton textButton={'Continuer'} onClick={() => setModalState('open')} />
                    )
                }
            >
                <form className="md:flex grid" method="post">
                    <>
                        <div className="flex flex-col justify-center items-center border-2 border-black p-4 m-4">
                            <h3 className="font-bold mb-2">Menu pour {reservationData.menu} personnes:</h3>
                            <h4 className="font-bold mb-2 text-green-700">
                                {reservationData.menu === '2' ? (
                                    <>80 €</>
                                ) : reservationData.menu === '4' ? (
                                    <>150 €</>
                                ) : reservationData.menu === '5' ? (
                                    <>200 €</>
                                ) : (
                                    reservationData.menu === '15' && <>720 €</>
                                )}
                            </h4>
                            <p>Entrée</p>
                            <span>+</span>
                            <p>Plat et boisson</p>
                            <span>+</span>
                            <p>Dessert</p>
                        </div>
                    </>
                </form>
                {reservationData.menu !== '' && (
                    <p className="text-center my-4">{`Vous avez choisi le menu ${reservationData.menu} personnes`}</p>
                )}
            </ModalDefault>
        </>
    )
}
