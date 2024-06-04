export const Footer = ()=>{
    return(
        <footer className="flex lg:flex-row flex-col bg-gray-300 py-16 justify-center items-center">
            <ul>
                <h3 className="font-bold text-md">Informations restaurant</h3>
                <li><a href="tel:+33775704006" className='text-blue-500 text-sm cursor-pointer'>07 75 70 40 06</a></li>
                <li><a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e66f3e381b2f9b:0x90809ce11ed4680?sa=X&ved=1t:8290&ictx=111" target='_blank' className='text-blue-500 text-sm cursor-pointer'>3 Rue Marx Dormoy, 75018 Paris</a></li>
            </ul>
        </footer>
    )
}