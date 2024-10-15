import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function App() {
    return (
        <Container fluid>
            <Row>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item style={{ width: '100%', height: '450px' }}>
                        <Link to="/books">
                        <img
                            className="d-block w-100"
                            src="/image/image2.png"
                            alt="First slide"
                            />
                        </Link>
                        <Carousel.Caption >
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ width: '100%', height: '450px' }}>
                        <Link to="/games">
                        <img
                            className="d-block w-100"
                            src="/image/image4.jpg"
                            alt="Second slide"
                            />
                        </Link>
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ width: '100%', height: '450px' }}>
                        <Link to="/books">
                            <img
                                className="d-block w-100"
                                src="/image/image3.jpg"
                                alt="Third slide"
                            />
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop:'30px' } }>
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/image/HarryPotter.png" />
                    <Card.Body>
                        <Card.Title>Harry Potter i kamień filozoficzny</Card.Title>
                        <Card.Text>
                            J.K. Rowling
                        </Card.Text>
                    </Card.Body>
                    <Link to="/description">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Zobacz</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/image/KameliowySklepPapierniczy.png" />
                    <Card.Body>
                        <Card.Title>Kameliowy sklep papierniczy</Card.Title>
                        <Card.Text>
                            Ito Ogawa
                        </Card.Text>
                    </Card.Body>
                    <Link to="/description">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Zobacz</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/image/OczySmoka.png" />
                    <Card.Body>
                        <Card.Title>Oczy smoka (ilustrowane brzegi)</Card.Title>
                        <Card.Text>
                            Stephen King
                        </Card.Text>
                    </Card.Body>
                    <Link to="/description">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Zobacz</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/image/StarWarsThrawnSojusze.png" />
                    <Card.Body>
                        <Card.Title>Star Wars. Thrawn. Sojusze</Card.Title>
                        <Card.Text>
                            Timothy Zahn
                        </Card.Text>
                    </Card.Body>
                    <Link to="/description">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Zobacz</Button>
                    </Link>
                </Card>
            </Row>
        </Container>
    );
}
export default App;
