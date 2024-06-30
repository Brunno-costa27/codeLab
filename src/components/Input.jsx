
import { useContext } from 'react';
import { InputContext } from '../context/InputContext';

export function Input({ type = 'text', placeholder  }){


  const { inputValue, updateInputValue } = useContext(InputContext)

  console.log(inputValue);

  const handleChange = (e) => {
    updateInputValue(e.target.value);
  };


    return (
      
        <div className="w-full">
        <input
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          className="w-full h-8 sm:h-12  text-xs sm:text-base text-white border-2 border-slate-600 rounded-lg  py-3 px-3 sm:py-4 sm:px-6 gap-4 bg-[#252529] focus:outline-none"
        />
      </div>
    )
}