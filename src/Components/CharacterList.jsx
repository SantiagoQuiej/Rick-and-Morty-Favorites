import { Row, Spinner } from "react-bootstrap";
import { useContext } from "react";
import { usercontext } from "../Context/FavoritesContext";
import CharacterCard from "./CharacterCard";
import Buscador from "./Buscador";
const CharacterList = () => {
    const { loadin, personaje } = useContext(usercontext)
    return (
        <>
            <Buscador />
            {loadin &&
                <div className="d-flex justify-content-center mt-2">
                    <Spinner animation="border" role="status"></Spinner>
                </div>
            }
            {!loadin &&
                <Row>
                    {personaje.map(item =>
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