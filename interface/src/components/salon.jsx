export const PetitSalon = () => {
    return(
        <div className="lg:w-32 md:w-24 w-20 lg:h-32 md:h-24 h-20 bg-[#49df4a] border-[#15a416] border-[1px] flex items-center justify-center cursor-pointer">6</div>
    )
}
export const GrandSalon = ({className}) => {
    return(
        <div className={`h-32 md:w-[28vw] w-[50vw] bg-[#49df4a] border-[#15a416] border-[1px] cursor-pointer ${className?className:''}`}>12</div>
    )
}