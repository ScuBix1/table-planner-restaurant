export const ValidationButton = ({ textButton }) => {
    return (
        <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#66f466] via-[#0dac0e] to-[#105712] hover:cursor-pointer hover:shadow-md hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#105712] hover:to-[#66f466] mb-6">
            {textButton ? textButton : 'Valider'}
        </button>
    )
}
export const AnnulationButton = ({ textButton, onClick }) => {
    return (
        <button
            onClick={onClick?onClick:''}
            className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:cursor-pointer hover:shadow-md hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185] mb-6"
        >
            {textButton}
        </button>
    )
}
