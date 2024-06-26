import React, { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
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
import { useReservation } from '../contexts/reservation'
import { HeroLarge } from '../components/hero'
import { ParcoursUtilisateurs } from '../components/parcoursUtilisateur'
import { Footer } from '../components/footer'
import { Message } from '../components/produit'

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
    const [message, setMessage] = useState('')
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
        
    }, [idTableSelected])
    useEffect(()=>{
        getAllTables()
    }, [idTableSelected, modalState])
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search)

        if (query.get('payment_success')) {
            confetti({
                particleCount: 200,
                spread: 70,
                origin: { y: 0.6 }
              });
            setMessage(<p className='text-green-700 text-center'>Paiement réalisé avec succès !</p>)
        }

        if (query.get('canceled')) {
            setMessage(<p className='text-red-700 text-center'>Votre paiement a échoué !</p>)
        }
    }, [])
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
            {
                <>
                    {message && <Message message={message} />}
                    <HeroLarge />
                    <ParcoursUtilisateurs />
                    <h2 className="text-center">Réservez votre table pour l'événement</h2>
                    <div className="h-[700px] md:w-[70vw] bg-[#484d48] relative rounded-xl mx-auto p-auto mb-14">
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
                    <Footer />
                </>
            }
            <ModalDefault
                title="Choix du menu"
                isOpen={modalState === 'menu'}
                setIsOpen={() => setModalState('')}
                confirmButton={<></>}
                backButton={<></>}
            >
                <form  action={'https://table-planner-restaurant-1.onrender.com/api/stripe/charge'} className="grid" method="POST">
                    <>
                        <input type="hidden" name="menu" value={reservationData.menu}/>
                        <input type="hidden" name="tableNumber" value={idTableSelected}/>
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
                        <div className="flex justify-center items-center">

                            <button
                    type="submit"
                    className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#66f466] via-[#0dac0e] to-[#105712] hover:cursor-pointer hover:shadow-md hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#105712] hover:to-[#66f466] mb-6"
                    
                >
                    Continuer
                </button>
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
