import { Content } from "./Content";
import { InputContext } from '../context/InputContext';
import { useContext, useState } from "react";
import '../index.css'
import '../App.css'


export function Container({ content }) {


    const { inputValue, updateInputValue } = useContext(InputContext)
    // const [filteredBlogs, setFilteredBlogs] = useState(content)


    // Filtrar os cards com base no termo de busca
    const filteredCards = content.filter((item) =>

        item.title.includes(inputValue)
    
    );

    


    console.log(filteredCards);

    return (
        <div className="sm:w-full sm:flex h-full m-auto text-xs sm:text-base  animate-fadeIn">
            <div className="w-full flex flex-col justify-start items-center  mt-14 gap-5  h-full  animate-fadeIn">

                {
                     filteredCards.map((item) => (

                        <Content
                            key={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            content={item.content}
                            className='opacity-0 animate-fadeIn'
                        />
                    ))
                }
            </div>
        </div>
    )
}