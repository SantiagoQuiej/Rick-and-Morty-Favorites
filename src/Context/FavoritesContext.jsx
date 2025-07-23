import { createContext } from "react"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const usercontext = createContext()
const FavoritesContext = ({ children }) => {
    const [personaje, setPersonajes] = useState([])
    const [favoritos, setobtenidofavorito] = useState([])
    const [buscador, setbuscar] = useState([])
    const [loadin, setloadin] = useState(true)
    const obtener = async () => {
        try {
            let respone = await axios.get('https://rickandmortyapi.com/api/character')
            setPersonajes(respone.data.results.map(item => item = { ...item, favorito: false }));
            setbuscar(respone.data.results.map(item => item = { ...item, favorito: false }))
            setloadin(false)
        } catch (error) {
          alert(error)
        }
    }
    const obtenerfavorito = (id) => {
        let obtener = personaje.filter(item => {
            if (item.id == id) {
                item.favorito = !item.favorito
                return item
            }
            return item
        })
        setobtenidofavorito(obtener.filter(item => item.favorito == true))
    }

    useEffect(() => {
        obtener()
    }, [])

    return (
        <usercontext.Provider value={{ personaje, setPersonajes, setobtenidofavorito, favoritos, buscador, loadin, obtenerfavorito }}>
            {children}
        </usercontext.Provider>
    )
}

export { FavoritesContext, usercontext };