import { Row, Spinner } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { usercontext } from "../Context/FavoritesContext";
import CharacterCard from "./CharacterCard";
import Buscador from "./Buscador";
import { useState } from "react";
const CharacterList = () => {
    const { loadin, personaje, setPersonajes } = useContext(usercontext)
    const [render, setRender] = useState([])

    useEffect(() => {
        setRender(personaje)
    }, [personaje])

    return (
        <>
            {!loadin && <Buscador personaje={personaje} setPersonajes={setRender} />}
            {loadin &&
                <div className="d-flex justify-content-center mt-2">
                    <Spinner animation="border" role="status"></Spinner>
                </div>
            }
            {!loadin &&
                <Row>
                    {render.map(item =>
                        <CharacterCard
                            key={item.id}
                            {...item}
                        />
                    )}
                </Row>
            }
        </>
    );
}

export default CharacterList;