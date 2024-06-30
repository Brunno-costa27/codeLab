import { useContext, useState } from 'react';
import logo1 from '../assets/logo1.svg'
import { Input } from '../components/Input'
import { InputContext } from '../context/InputContext';


export function Header({content}) {

    const { inputValue, updateInputValue } = useContext(InputContext)

  console.log(inputValue);

  const handleChange = (e) => {
    updateInputValue(e.target.value);
  };

   // Filtrar os blogs com base no termo de busca
   const filteredCards = content.filter((item) =>

    item.title.includes(inputValue)

);

console.log(filteredCards.length)

    return (
        <header className='w-full h-60 flex flex-col justify-center items-center sm:py-16 bg-[#17171A] gap-12'>
            <div>
                <img 
                    src={logo1} 
                    alt=""
                    className='w-28 sm:w-[136px]'
                 />
            </div>

            <div className='min-w-[70%]'>
                <Input
                    placeholder="Pesquisar no blog"
                    
                />

                {
                    filteredCards.length === 0 ? (
                        <p className="mt-4 ml-1 text-red-500 text-xs sm:text-base">Nenhum blog encontrado pelo nome {inputValue}</p>
                    ) : (
                        <p></p>
                    )
                
                }
            </div>
        </header>
    )
}