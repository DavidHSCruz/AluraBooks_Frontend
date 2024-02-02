import { createContext, useState } from "react"

export const PesquisaContext = createContext()

export const PesquisaProvider = ({children}) => {

    const [ texto, setTexto] = useState('')

    return (
        <PesquisaContext.Provider value={{ texto, setTexto }}>
            {children}
        </PesquisaContext.Provider>
    )
}