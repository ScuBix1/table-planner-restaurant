import React from 'react'

export const Table = ({ className }) => {
    return (
        <div className={`${className ? className : ''}`}>
            <div className={`w-12 h-14 relative origin-center rotate-90`}>
                <div className={`w-12 h-4 rounded-full bg-gray-400 absolute z-0 top-2`}></div>
                <div
                    className={`w-6 h-14 bg-[#49df4a] border-[#15a416] border-[1px] relative mx-auto asolute z-50 rounded-xl flex items-center justify-center`}
                >
                    {' '}
                    <p className="origin-center rotate-[-90deg]">4</p>{' '}
                </div>
                <div className={`w-12 h-4 rounded-full bg-gray-400 absolute z-0 bottom-2`}></div>
            </div>
        </div>
    )
}
