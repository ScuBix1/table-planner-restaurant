import React, {useState, useEffect} from 'react'
import { Table } from '../components/table'
import { GrandSalon, PetitSalon } from '../components/salon'
import Logo from '../assets/img/logo.png'
export const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
          };
      
          window.addEventListener('resize', handleResize);
      
          // Nettoyez l'écouteur lorsque le composant est démonté
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, [])
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
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                </div>
                <div className="absolute bottom-0 left-[30vw]">
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                    <Table />
                </div>
                <Table className="absolute right-1 lg:right-4 lg:bottom-[27rem] md:bottom-[21rem] bottom-[20rem] origin-center rotate-[-90deg]" />
                <Table className="absolute md:right-[20vw] lg:right-[23vw] right-[38vw] lg:bottom-[27rem] md:bottom-[21rem] bottom-[20rem]" />
                <div className="absolute bottom-0 right-0 w-[50vw] md:w-[28vw] h-[45vh]">
                    <div className="absolute left-0 bottom-32">
                        <PetitSalon />
                        <PetitSalon />
                    </div>
                    <GrandSalon className="absolute bottom-0 right-0 flex justify-center items-center" />
                    <div className="absolute right-0 bottom-32">
                        <PetitSalon />
                        <PetitSalon />
                    </div>
                </div>
            </div>
        </>
    )
}
