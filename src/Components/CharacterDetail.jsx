import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import { useContext } from "react";
import { usercontext } from "../Context/FavoritesContext";
const CharacterDetail = () => {
    const { personaje } = useContext(usercontext)
    const { id } = useParams()
    const obtener = personaje.find(item => item.id == id)
    const navigate = useNavigate()
    return (
        <>
            <Col md={3} className="mt-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={obtener.image} />
                    <Card.Body>
                        <Card.Title>{obtener.name}</Card.Title>
                        <Card.Text>status:{obtener.status}</Card.Text>
                        <Card.Text>Especie:{obtener.species}</Card.Text>
                        <Card.Text>Gender:{obtener.gender}</Card.Text>
                        <Button className="mt-3" variant="danger" onClick={() => navigate('/')}>Regresar a lista personaje</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default CharacterDetail;