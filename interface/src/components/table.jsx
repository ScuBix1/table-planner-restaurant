import React from 'react'
import { useReservation } from '../contexts/reservation'

export const Table = ({ className, id, onClick}) => {
    
    return (
        <div className={`cursor-pointer ${className ? className : ''}`} id={id?id:''} onClick={onClick?onClick:''}>
            <div className={`w-12 h-16 relative origin-center rotate-90`}>
                <div className={`w-12 h-4 rounded-full bg-gray-400 absolute z-0 top-2`}></div>
                <div
                    className={`w-6 h-16 bg-[#49df4a] border-[#15a416] border-[1px] relative mx-auto asolute z-50 rounded-xl flex items-center justify-center`}
                >
                    {' '}
                    <p className="origin-center rotate-[-90deg] flex items-center justify-center flex-nowrap">2-4</p>{' '}
                </div>
                <div className={`w-12 h-4 rounded-full bg-gray-400 absolute z-0 bottom-2`}></div>
            </div>
        </div>
    )
}
export const TableReserved = ({ className, id, onClick}) => {
    
    return (
        <div className={`cursor-pointer ${className ? className : ''}`} id={id?id:''} onClick={onClick?onClick:''}>
            <div className={`w-12 h-16 relative origin-center rotate-90`}>
                <div className={`w-12 h-4 rounded-full bg-gray-400 absolute z-0 top-2`}></div>
                <div
                    className={`w-6 h-16 bg-red-400 border-red-900 border-[1px] relative mx-auto asolute z-50 rounded-xl flex items-center justify-center`}
                >
                    {' '}
                    <p className="origin-center rotate-[-90deg] flex items-center justify-center flex-nowrap">2-4</p>{' '}
                </div>
                <div className={`w-12 h-4 rounded-full bg-gray-400 absolute z-0 bottom-2`}></div>
            </div>
        </div>
    )
}