import React from 'react'
import { useReservation } from '../contexts/reservation'

export const Table = ({ className, id, onClick }) => {
    return (
        <div
            className={`cursor-pointer ${className ? className : ''}`}
            id={id ? id : ''}
            onClick={onClick ? onClick : ''}
        >
            <div className={`w-12 h-14 relative origin-center rotate-90`}>
                <div className={`w-12 h-4 rounded-full bg-gray-400 absolute z-0 top-2`}></div>
                <div
                    className={`w-6 h-14 bg-[#49df4a] border-[#15a416] border-[1px] relative mx-auto asolute z-50 rounded-xl flex items-center justify-center`}
                >
                    {' '}
                    <p className="origin-center rotate-[-90deg] flex items-center justify-center flex-nowrap">4</p>{' '}
                </div>
                <div className={`w-12 h-4 rounded-full bg-gray-400 absolute z-0 bottom-2`}></div>
            </div>
        </div>
    )
}
export const TableReserved = ({ className, id, onClick }) => {
    return (
        <div
            className={`cursor-pointer ${className ? className : ''}`}
            id={id ? id : ''}
            onClick={onClick ? onClick : ''}
        >
            <div className={`w-12 h-14 relative origin-center rotate-90`}>
                <div className={`w-12 h-4 rounded-full bg-gray-400 absolute z-0 top-2`}></div>
                <div
                    className={`w-6 h-14 bg-red-400 border-red-900 border-[1px] relative mx-auto asolute z-50 rounded-xl flex items-center justify-center`}
                >
                    {' '}
                    <p className="origin-center rotate-[-90deg] flex items-center justify-center flex-nowrap">4</p>{' '}
                </div>
                <div className={`w-12 h-4 rounded-full bg-gray-400 absolute z-0 bottom-2`}></div>
            </div>
        </div>
    )
}
export const TableTwoPeople = ({ className, id, onClick }) => {
    return (
        <div
            className={`cursor-pointer  ${className ? className : ''}`}
            id={id ? id : ''}
            onClick={onClick ? onClick : ''}
        >
            <div className={`w-10 h-12 relative origin-center rotate-90 mx-auto`}>
                <div className={`w-10 h-4 rounded-full bg-gray-400 absolute z-0 top-4`}></div>
                <div
                    className={`w-6 h-12 bg-[#49df4a] border-[#15a416] border-[1px] relative mx-auto asolute z-50 rounded-xl flex items-center justify-center`}
                >
                    {' '}
                    <p className="origin-center rotate-[-90deg] flex items-center justify-center flex-nowrap">2</p>{' '}
                </div>
            </div>
        </div>
    )
}
export const TableTwoPeopleReserved = ({ className, id, onClick }) => {
    return (
        <div
            className={`cursor-pointer ${className ? className : ''}`}
            id={id ? id : ''}
            onClick={onClick ? onClick : ''}
        >
            <div className={`w-12 h-14 relative origin-center rotate-90`}>
                <div className={`w-12 h-4 rounded-full bg-gray-400 absolute z-0 top-5`}></div>
                <div
                    className={`w-6 h-14 bg-red-400 border-red-900 border-[1px] relative mx-auto asolute z-50 rounded-xl flex items-center justify-center`}
                >
                    {' '}
                    <p className="origin-center rotate-[-90deg] flex items-center justify-center flex-nowrap">2</p>{' '}
                </div>
            </div>
        </div>
    )
}
export const TableFivePeople = ({ className, id, onClick })=>{
    return(
        <div
            className={`cursor-pointer ${className ? className : ''}`}
            id={id ? id : ''}
            onClick={onClick ? onClick : ''}
        >
            <div className={`w-10 h-10 relative origin-center rotate-90 px-auto`}>
                <div
                    className={`w-8 h-8 bg-[#49df4a] border-[#15a416] border-[1px] relative mx-auto asolute z-50 flex items-center justify-center rounded-full`}
                >
                    {' '}
                    <p className="origin-center rotate-[-90deg] flex items-center justify-center flex-nowrap">5</p>{' '}
                </div>
            </div>
        </div>
    )
}
export const TableFivePeopleReserved = ({ className, id, onClick })=>{
    return(
        <div
            className={`cursor-pointer ${className ? className : ''}`}
            id={id ? id : ''}
            onClick={onClick ? onClick : ''}
        >
            <div className={`w-10 h-10 relative origin-center rotate-90 px-auto`}>
                <div
                    className={`w-8 h-8 bg-red-400 border-red-900 border-[1px] relative mx-auto asolute z-50 flex items-center justify-center rounded-full`}
                >
                    {' '}
                    <p className="origin-center rotate-[-90deg] flex items-center justify-center flex-nowrap">5</p>{' '}
                </div>
            </div>
        </div>
    )
}
