import React from 'react'

export default function Between1() {
    return (
        <div className=' flex justify-center items-center py-24 gap-4 uppercase'>
            {/* <text>We won Awards</text> */}
            <div className=' flex items-center justify-center'>
                    <text style={{fontFamily:'Montserrat'}} className=' uppercase'>achieved so far</text>
                </div>

            <div className=' rounded-full bg-[#2272EF] flex  gap-7 px-4'>
                <text>Awards</text>
                <text>Awards</text>
                <text>Awards</text>
            </div>
        </div>

    )
}