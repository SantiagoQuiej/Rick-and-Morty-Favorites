import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { usercontext } from '../Context/FavoritesContext';

const Buscador = () => {
    const { buscador, setPersonajes } = useContext(usercontext)
    const encontrar = (e) => {
        e.preventDefault()
        setPersonajes(buscador.filter(item => item.name.toLowerCase().startsWith(e.target.value.toLowerCase())))
    }
    return (
        <>
            < Form.Control className='mt-3 w-50' onChange={encontrar} placeholder='Ingrese el nombre del personaje' />
        </>
    );
}

export default Buscador;