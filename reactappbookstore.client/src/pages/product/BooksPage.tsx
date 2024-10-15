import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Books = () => {
    return (
        <Container fluid>
            <h2 style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                Książki
            </h2>
            <div style={{ display: "flex", flexwrap: "wrap" }}>
            <div className="genre-table">
                <h5 style={{ textAlign: "center", marginTop: "20px" }}>
                    Wybierz gatunek
                </h5>
                <ul>
                    <li>Biografie</li>
                    <li>Biznes</li>
                    <li>Dla dzieci</li>
                    <li>Dla młodzieży</li>
                    <li>Fantastyka</li>
                    <li>Historia</li>
                    <li>Informatyka</li>
                    <li>Komiksy</li>
                    <li>Kryminał i sensacja</li>
                    <li>Kultura i sztuka</li>
                    <li>Lektury</li>
                    <li>Literatura faktu</li>
                    <li>Literatura piękna</li>
                    <li>Lit. obyczajowa i romans</li>
                    <li>Nauka języków</li>
                    <li>Nauki humanistyczne</li>
                    <li>Nauki ścisłe</li>
                    <li>Podróże i turystyka</li>
                    <li>Popularnonaukowa</li>
                    <li>Poezja i dramat</li>
                    <li>Poradniki</li>
                    <li>Religia</li>
                    <li>Sport</li>
                    <li>Young adult</li>
                    <li>Książki audio</li>
                </ul>
            </div>
                <div style={{ display: "flex", flexWrap: "wrap"}}>
                    <Row style={{ justifyContent: "space-evenly"}}>
                        <Card style={{ width: '16rem', marginBottom: "20px"}}>
                        <Card.Img src="/image/HarryPotter.png" />
                        <Card.Body>
                            <Card.Title>Harry Potter i kamień filozoficzny</Card.Title>
                            <Card.Text>
                                J.K. Rowling
                            </Card.Text>
                        </Card.Body>
                        <Link to="/shoppingcart">
                            <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                        </Link>
                    </Card>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                        <Card.Img variant="top" src="/image/KameliowySklepPapierniczy.png" />
                        <Card.Body>
                            <Card.Title>Kameliowy sklep papierniczy</Card.Title>
                            <Card.Text>
                                Ito Ogawa
                            </Card.Text>
                        </Card.Body>
                        <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                        </Link>
                    </Card>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                        <Card.Img variant="top" src="/image/OczySmoka.png" />
                        <Card.Body>
                            <Card.Title>Oczy smoka (ilustrowane brzegi)</Card.Title>
                            <Card.Text>
                                Stephen King
                            </Card.Text>
                        </Card.Body>
                        <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
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
                        <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                        </Link>
                        </Card>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img src="/image/HarryPotter.png" />
                            <Card.Body>
                                <Card.Title>Harry Potter i kamień filozoficzny</Card.Title>
                                <Card.Text>
                                    J.K. Rowling
                                </Card.Text>
                            </Card.Body>
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
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
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                            </Link>
                        </Card>
                    </Row>
             </div>
        </div>
            <Row style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/image/HarryPotter.png" />
                    <Card.Body>
                        <Card.Title>Harry Potter i kamień filozoficzny</Card.Title>
                        <Card.Text>
                            J.K. Rowling
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
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
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
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
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
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
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src="/image/HarryPotter.png" />
                    <Card.Body>
                        <Card.Title>Harry Potter i kamień filozoficzny</Card.Title>
                        <Card.Text>
                            J.K. Rowling
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
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
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
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
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
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
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
            </Row>
        </Container>
    )
}