import React, { useState, useEffect } from 'react'
import { Table } from '../components/table'
import { GrandSalon, PetitSalon } from '../components/salon'
import Logo from '../assets/img/logo.png'
import { ModalDefault } from '../components/modal'
import { ValidationButton } from '../components/button'
import { useReservation } from '../contexts/reservation'

export const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const {setIdTableSelected, idTableSelected, setModalState, modalState} = useReservation()
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    useEffect(()=>{
        setIdTableSelected(idTableSelected)
        console.log(idTableSelected)
    },[idTableSelected])
    const renderTables = (count, idNumber) => {
        const tables = [];
        for (let i = 0; i < count; i++) {
          tables.push(<Table key={i} id={idNumber + i} onClick={(id)=>{setIdTableSelected(idNumber + i); setModalState('open')}}/>);
        }
        return tables;
      };
      const renderPetitsSalons = (count, idNumber) => {
        const petitsSalons = [];
        for (let i = 0; i < count; i++) {
          petitsSalons.push(<PetitSalon key={i} id={idNumber + i} onClick={(id)=>{setIdTableSelected(idNumber + i); setModalState('open')}}/>);
        }
        return petitsSalons;
      };
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
                <div className="absolute bottom-0 left-4">
                {renderTables(9, 100)}
                </div>
                <div className="absolute bottom-0 left-[30vw]">
                {renderTables(6, 200)}
                </div>
                <Table className="absolute right-1 lg:right-4 lg:bottom-[27rem] md:bottom-[21rem] bottom-[20rem] origin-center rotate-[-90deg]" id="300" onClick={()=>{setIdTableSelected(300); setModalState('open')}}/>
                <Table className="absolute md:right-[20vw] lg:right-[23vw] right-[38vw] lg:bottom-[27rem] md:bottom-[21rem] bottom-[20rem]" id="400" onClick={()=>{setIdTableSelected(400); setModalState('open')}}/>
                <div className="absolute bottom-0 right-0 w-[50vw] md:w-[28vw] h-[30vh]">
                    <div className="absolute left-0 bottom-32">
                    {renderPetitsSalons(2,500)}
                    </div>
                    <GrandSalon className="absolute bottom-0 right-0 flex justify-center items-center" id="502" onClick={()=>{setIdTableSelected(502); setModalState('open')}}/>
                    <div className="absolute right-0 bottom-32">
                        {renderPetitsSalons(2,503)}
                    </div>
                </div>
            </div>
            <ModalDefault
                title="Réservation de table"
                isOpen={modalState === 'open'}
                setIsOpen={() => setModalState('')}
                confirmButton={<ValidationButton textButton={'Payer'}/>}
            >
                <form action="">
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
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="number" className="block mb-2 text-sm font-medium">
                            {' '}
                            Nombre de personnes:{' '}
                        </label>
                        <input
                            type="number"
                            name="number"
                            id="number"
                            className="shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Ex: 4"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="timeReservation" className="block mb-2 text-sm font-medium"> Heure de réservation: </label>
                        <select id="time" className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value={{ startTime: '2024-05-27T12:00:00Z', endTime: '2024-05-27T15:00:00Z' }}>
                                Après-midi
                            </option>
                            <option value={{ startTime: '2024-05-27T16:00:00Z', endTime: '2024-05-27T123:00:00Z' }}>
                                Soir
                            </option>
                        </select>
                    </div>
                    <div className="flex items-start my-5">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required
                            />
                        </div>
                        <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900">
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
