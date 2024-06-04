export const Card = ({svg, title, text}) => {
    return(
        <div className="flex flex-col lg:w-[20%] w-[100%] gap-6 bg-gray-300 bg-opacity-80 rounded-lg p-6">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="bg-[#49df4a] bg-opacity-80 p-1.5 rounded-full ">
                        {svg?svg:''}
                    </div>
                    <p className="font-bold">{title?title:''}</p>
                </div>
                <div>
                    <p>
                        {text?text:''}
                    </p>
                </div>
            </div>
    )
}