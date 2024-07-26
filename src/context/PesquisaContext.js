import { createContext, useState, useContext } from "react"

const PesquisaContext = createContext()

export const PesquisaProvider = ({children}) => {

    const [ texto, setTexto] = useState('')

    return (
        <PesquisaContext.Provider value={{ texto, setTexto }}>
            {children}
        </PesquisaContext.Provider>
    )
}

export const usePesquisaValue = () => useContext(PesquisaContext)