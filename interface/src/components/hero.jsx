import Flyers from '../assets/img/flyers.webp'
export const HeroLarge = () => {
    return(
        <section id="hero" className='w-[100vw] h-[80vh] flex justify-center items-center overflow-hidden mb-14'>
            <img src={`${Flyers}`} alt="fiche fête Aïdkum royaume de saba paris 18 ème 16 juin 2024" className='w-[400px]'/>
        </section>
    )
}