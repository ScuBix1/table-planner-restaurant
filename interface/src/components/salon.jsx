export const PetitSalon = ({id, onClick}) => {
    return(
        <div className="lg:w-32 md:w-24 w-20 lg:h-32 md:h-24 h-20 bg-[#49df4a] border-[#15a416] border-[1px] flex items-center justify-center cursor-pointer" id={id?id:''} onClick={onClick?onClick:''}>5</div>
    )
}
export const PetitSalonReserved = ({id, onClick}) => {
    return(
        <div className="lg:w-32 md:w-24 w-20 lg:h-32 md:h-24 h-20 bg-red-400 border-red-900 border-[1px] flex items-center justify-center cursor-pointer" id={id?id:''} onClick={onClick?onClick:''}>5</div>
    )
}
export const GrandSalon = ({className, id, onClick}) => {
    return(
        <div className={`h-32 md:w-[28vw] w-[50vw] bg-[#49df4a] border-[#15a416] border-[1px] cursor-pointer ${className?className:''}`} id={id?id:''} onClick={onClick?onClick:''}>15</div>
    )
}
export const GrandSalonReserved = ({className, id, onClick}) => {
    return(
        <div className={`h-32 md:w-[28vw] w-[50vw] bg-red-400 border-red-900 border-[1px] cursor-pointer ${className?className:''}`} id={id?id:''} onClick={onClick?onClick:''}>15</div>
    )
}