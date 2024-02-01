import { createContext, useState } from "react";
import Carrossel from "../Components/Carrossel";

export const PesquisaContext = createContext()

export const PesquisaProvider = ({children}) => {

    const [ texto, setTexto] = useState(false)

    return (
        <PesquisaContext.Provider value={{ texto, setTexto }}>
            {children}
        </PesquisaContext.Provider>
    )
}