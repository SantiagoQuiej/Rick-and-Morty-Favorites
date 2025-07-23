import { useContext, useState } from "react";
import { usercontext } from "../Context/FavoritesContext";
import { Alert, Row } from "react-bootstrap";
import CharacterCard from "./CharacterCard";


const FavoritesPage = () => {
    const { favoritos } = useContext(usercontext)
    return (

        <>
            {favoritos.length == 0 ? <Alert variant="danger" className="mt-4"><h4>Aun no hay favoritos</h4></Alert> :
                <Row>
                    <h2 className="text-center mt-3 text-primary">Tus Favoritos</h2>
                    {favoritos.map(item =>
                        <CharacterCard
                            key={item.id}
                            {...item}
                        />)}
                </Row >
            }
        </>
    );
}

export default FavoritesPage;