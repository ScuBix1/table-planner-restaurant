import React, { useState, useEffect } from 'react'
import { Table, TableReserved } from '../components/table'
import { GrandSalon, GrandSalonReserved, PetitSalon, PetitSalonReserved } from '../components/salon'
import Logo from '../assets/img/logo.png'
import { ModalDefault } from '../components/modal'
import { ValidationButton, ValidationSubmitButton } from '../components/button'
import { useReservation } from '../contexts/reservation'
import axios from 'axios'

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
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message)
            } else {
                setErrorMessage('Une erreur est survenue. Veuillez réessayer.')
            }
        }
    }
    //fonction pour obtenir le menu choisi
    const handleRadioChange = (e) => {
        setReservationData((prevState) => ({
            ...prevState,
            menu: e.target.value,
        }))
    }
    //création des petites tables du restaurant
    const renderTables = (initCount, count, idNumber) => {
        const tablesTab = []
        for (let i = initCount; i < initCount + count; i++) {
            if (tables[i]?.numberTable == idNumber && tables[i]?.statusTable === 'reserved') {
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
                            setReservationData({ menu: '' })
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
    } //useEffect de redimensionnement de la fenetre
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
    }, [idTableSelected, modalState])
    console.log(reservationData)
    return (
        <>
            {windowWidth > 800 ? (
                <header className="flex justify-around items-center">
                    <img src={Logo} alt="logo du Royaume de Saba Paris 16ème" className="w-[100px] rounded-full" />
                    <h1 className="md:text-[64px] text-[32px] text-center font-great-vibes">Royaume de Saba</h1>
                    <img src={Logo} alt="logo du Royaume de Saba Paris 16ème" className="w-[100px] rounded-full" />
                </header>
            ) : (
                <header className="flex justify-center items-center gap-x-2">
                    <img src={Logo} alt="logo du Royaume de Saba Paris 16ème" className="w-[100px] rounded-full" />
                    <h1 className="md:text-[64px] text-[32px] text-center font-great-vibes">Royaume de Saba</h1>
                </header>
            )}
            <h2 className="text-center">Réservez votre table pour l'événement</h2>
            <div className="h-[80vh] md:w-[70vw] bg-[#484d48] relative rounded-xl mx-auto ">
                <div className="absolute bottom-0 left-4">{renderTables(0, 9, 100)}</div>
                <div className="absolute bottom-0 left-[30vw]">{renderTables(9, 6, 200)}</div>
                {tables[15]?.numberTable === 300 && tables[15]?.statusTable === 'free' ? (
                    <Table
                        className="absolute right-1 lg:right-4 lg:bottom-[27rem] md:bottom-[21rem] bottom-[20rem] origin-center rotate-[-90deg]"
                        id="300"
                        onClick={() => {
                            setIdTableSelected(300)
                            setModalState('menu')
                            setReservationData({ menu: '' })
                        }}
                    />
                ) : (
                    <TableReserved
                        className="absolute right-1 lg:right-4 lg:bottom-[27rem] md:bottom-[21rem] bottom-[20rem] origin-center rotate-[-90deg]"
                        id="300"
                        onClick={() => {
                            setIdTableSelected(300)
                            setModalState('')
                        }}
                    />
                )}
                {tables[16]?.numberTable === 400 && tables[16]?.statusTable === 'free' ? (
                    <Table
                        className="absolute md:right-[20vw] lg:right-[23vw] right-[38vw] lg:bottom-[27rem] md:bottom-[21rem] bottom-[20rem]"
                        id="400"
                        onClick={() => {
                            setIdTableSelected(400)
                            setModalState('menu')
                            setReservationData({ menu: '' })
                        }}
                    />
                ) : (
                    <TableReserved
                        className="absolute md:right-[20vw] lg:right-[23vw] right-[38vw] lg:bottom-[27rem] md:bottom-[21rem] bottom-[20rem]"
                        id="400"
                        onClick={() => {
                            setIdTableSelected(400)
                            setModalState('')
                        }}
                    />
                )}
                <div className="absolute bottom-0 right-0 w-[50vw] md:w-[28vw] h-[30vh]">
                    <div className="absolute left-0 bottom-32">{renderPetitsSalons(17, 2, 500)}</div>
                    {tables[19]?.numberTable === 502 && tables[19]?.statusTable === 'free' ? (
                        <GrandSalon
                            className="absolute bottom-0 right-0 flex justify-center items-center"
                            id="502"
                            onClick={() => {
                                setIdTableSelected(502)
                                setModalState('menu')
                                setReservationData({ menu: '15' })
                            }}
                        />
                    ) : (
                        <GrandSalonReserved
                            className="absolute bottom-0 right-0 flex justify-center items-center"
                            id="502"
                            onClick={() => {
                                setIdTableSelected(502)
                                setModalState('')
                            }}
                        />
                    )}
                    <div className="absolute right-0 bottom-32">{renderPetitsSalons(20, 2, 503)}</div>
                </div>
            </div>
            <ModalDefault
                title="Choix du menu"
                isOpen={modalState === 'menu'}
                setIsOpen={() => setModalState('')}
                confirmButton={<ValidationButton textButton={'Continuer'} onClick={() => setModalState('open')} />}
            >
                <form className="md:flex grid" method="post">
                    {reservationData.menu !== '5' && reservationData.menu !== '15' ? (
                        <>
                            <div className="flex flex-col justify-center items-center border-2 border-black p-4 m-4">
                                <h3 className='font-bold mb-2'>Réservation pour 2 personnes:</h3>
                                <p>Entrée</p>
                                <span>+</span>
                                <p>Plat et boisson</p>
                                <span>+</span>
                                <p>Dessert</p>
                                <input
                                    type="radio"
                                    className="menu"
                                    name="menu"
                                    value="2"
                                    checked={reservationData.menu === '2'}
                                    onChange={handleRadioChange}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center border-2 border-black p-4 m-4">
                                <h3 className='font-bold mb-2'>Réservation pour 4 personnes:</h3>
                                <p>Entrée</p>
                                <span>+</span>
                                <p>Plat et boisson</p>
                                <span>+</span>
                                <p>Dessert</p>
                                <input
                                    type="radio"
                                    className="menu"
                                    name="menu"
                                    value="4"
                                    checked={reservationData.menu === '4'}
                                    onChange={handleRadioChange}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col justify-center items-center border-2 border-black p-4 m-4">
                                <h3 className='font-bold mb-2'>Menu pour {reservationData.menu} personnes:</h3>
                                <p>Entrée</p>
                                <span>+</span>
                                <p>Plat et boisson</p>
                                <span>+</span>
                                <p>Dessert</p>
                            </div>
                        </>
                    )}
                </form>
            </ModalDefault>
            <ModalDefault
                title="Réservation de table"
                isOpen={modalState === 'open'}
                setIsOpen={() => setModalState('')}
                confirmButton={
                    <button type="submit" className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#66f466] via-[#0dac0e] to-[#105712] hover:cursor-pointer hover:shadow-md hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#105712] hover:to-[#66f466] mb-6" onClick={handleSubmit}>
                        payer
                    </button>
                }
            >
                <form method="post">
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
                            placeholder="06 01 01 01 01"
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
                        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                            J'accepte les{' '}
                            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                                termes et conditions
                            </a>
                        </label>
                    </div>
                </form>
            </ModalDefault>
        </>
    )
}
