import { createContext, useState, useEffect } from "react"

export const LivrosAPIContext = createContext()

export const LivrosAPIProvider = ({children}) => {

    const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
    const [ favoritosPesquisados, setFavoritosPesquisados ] = useState([])
    const [ destaquesPesquisados, setDestaquesPesquisados ] = useState([])

    return (
        <LivrosAPIContext.Provider value={{ livrosPesquisados,
                                            setLivrosPesquisados, 
                                            favoritosPesquisados, 
                                            setFavoritosPesquisados,
                                            destaquesPesquisados, 
                                            setDestaquesPesquisados 
                                        }}>
            {children}
        </LivrosAPIContext.Provider>
    )
}