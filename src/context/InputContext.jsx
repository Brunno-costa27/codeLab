import { useState, createContext } from "react";

// Criar o contexto
export const InputContext = createContext();

// Provedor do contexto que envolve toda a aplicação
export const InputProvider = ({ children }) => {
    const [inputValue, setInputValue] = useState('');
  
    // Função para atualizar o valor do input
    const updateInputValue = (value) => {
      setInputValue(value);
    };

    return (
        <InputContext.Provider value={{ inputValue, updateInputValue }}>
          {children}
        </InputContext.Provider>
      );
    };