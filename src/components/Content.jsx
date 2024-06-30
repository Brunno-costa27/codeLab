import { useState } from 'react'
import loveRed from '../assets/loveRed.svg'
import loveTransparent from '../assets/loveTransparent.svg'
import '../index.css'
import '../App.css'

export function Content({title, subtitle, content}){

    const [love, setLove] = useState(false)

    function handleIconeChange(){
        setLove(!love)
    }
    return (
        <div className="w-full max-w-[70%] flex flex-col  border border-[#E07B67] p-10 rounded-lg space-y-4 overflow-hidden  animate-fadeIn">
            <div className='w-full flex justify-between items-center'>
            <p className="text-[#E07B67] ">{title}</p>
            {
                love === true ? <img className='w-5 sm:w-6' src={loveRed} alt="" onClick={handleIconeChange} /> : <img className='w-5 sm:w-6' src={loveTransparent} alt="" onClick={handleIconeChange}/>
            }
        

            </div>
            <p className="text-white">{subtitle}</p>
            <p className="text-[#AFABB6]">{content}</p>
        </div>
    )
}