import { useContext } from 'react';
import { Container, Nav, Navbar, Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { usercontext } from '../Context/FavoritesContext';
const Menu = () => {
    const { favoritos } = useContext(usercontext)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={({ isActive }) => isActive ? 'active text-primary nav-link' : 'nav-link'} to='/'>Lista de personajes</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'active text-primary nav-link' : 'nav-link'} to='/favoritos'>Favoritos
                                <Badge bg="danger" className='m-1 rounded-5'>{favoritos.length}</Badge>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;