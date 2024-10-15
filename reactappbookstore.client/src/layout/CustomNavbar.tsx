import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
    return (
        <div style={{ backgroundColor: '#c39ff7' }}>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="navItem" style={{ fontFamily: 'cursive', fontSize: '18px', marginRight: '20px' }}>
                                <Link to="/" className="d-block">DreamBOOK</Link>
                            </Nav.Link>

                            <NavDropdown className="navItem" title="Kategorie" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to="/books" className="d-block">Książki</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/games" className="d-block">Gry</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/stationery" className="d-block">Artykuły papiernicze</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/music" className="d-block">Muzyka</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="navItem" title="Konto" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to="/signinformik" className="d-block">Zaloguj się</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/signupformik" className="d-block">Stwórz konto</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Link to="/shoppingcart">
                            <Button variant="light" className="shopping-cart-icon">
                                <img src="image\icon-shopping-cart.png" />
                                <span className= "shopping-cart-icon-quantity">0</span>
                        </Button>
                        </Link>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Szukaj"
                                className="me-2"
                                aria-label="Szukaj"
                                style={{ width: '600px' }}
                            />
                            <Button variant="light" className="buttons">Szukaj</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default CustomNavbar;
