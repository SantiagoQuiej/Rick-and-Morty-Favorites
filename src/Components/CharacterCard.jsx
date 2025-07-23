import { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { usercontext } from "../Context/FavoritesContext";
import { Link } from "react-router-dom";
const CharacterCard = ({ image, name, id, favorito }) => {
    const { obtenerfavorito } = useContext(usercontext)
    return (
        <>
            <Col md={3} className="mt-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body className="text-center">
                        <Link  to={`/character/${id}`}>{name}</Link>
                    </Card.Body>
                    <div className="d-flex justify-content-center mb-3">
                        <Button onClick={() => obtenerfavorito(id)} variant={`${favorito ? 'danger' : 'info'}`}>{!favorito ? 'Agregar a favorito' : 'Quitar de favoritos'}</Button>
                    </div>
                </Card>
            </Col>
        </>
    );
}
export default CharacterCard;