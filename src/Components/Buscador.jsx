import { Form } from 'react-bootstrap';
import { useState } from 'react';
const Buscador = ({ personaje, setPersonajes }) => {

    const [copia] = useState([...personaje])
    const encontrar = (e) => {
        e.preventDefault()
        if (e.target.value === '') {
            setPersonajes(personaje)
        } else {
            let nuevo = copia.filter(item => item.name.toLowerCase().startsWith(e.target.value.toLowerCase()))
            setPersonajes(nuevo)
        }
    }
    return (
        <>
            < Form.Control className='mt-3 w-50' onChange={encontrar} placeholder='Ingrese el nombre del personaje' />
        </>
    );
}

export default Buscador;