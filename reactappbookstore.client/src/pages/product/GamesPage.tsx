import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export const Games = () => {
    return (
        <Container fluid>
            <h2 style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                Witaj w świecie gier planszowych
            </h2>
            <div style={{ display: "flex", flexwrap: "wrap" }}>
                <div style={{ width: "430px", height: "990px"}}>
                    <img className= "genre-table" style={{width: "100%", height: "100%"}} src="image/image5.png"></img>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <Row style={{ justifyContent: "space-evenly" }}>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                            <Card.Img src="/image/gra-o-kotach.jpg" />
                            <Card.Body>
                                <Card.Title>Najlepsza gra o kotach</Card.Title>
                                <Card.Text>
                                    FoxGames
                                </Card.Text>
                            </Card.Body>
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                            </Link>
                        </Card>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                            <Card.Img variant="top" src="/image/gra-sowy.jpg" />
                            <Card.Body>
                                <Card.Title>Sowy</Card.Title>
                                <Card.Text>
                                    Sophia Wagner
                                </Card.Text>
                            </Card.Body>
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                            </Link>
                        </Card>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                            <Card.Img variant="top" src="/image/gra-ekosystem.jpg" />
                            <Card.Body>
                                <Card.Title>Ekosystem 2 - Rafa Koralowa</Card.Title>
                                <Card.Text>
                                    Matt Simpson
                                </Card.Text>
                            </Card.Body>
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                            </Link>
                        </Card>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                            <Card.Img src="/image/gra-o-kotach.jpg" />
                            <Card.Body>
                                <Card.Title>Najlepsza gra o kotach</Card.Title>
                                <Card.Text>
                                    FoxGames
                                </Card.Text>
                            </Card.Body>
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                            </Link>
                        </Card>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                            <Card.Img variant="top" src="/image/gra-sowy.jpg" />
                            <Card.Body>
                                <Card.Title>Sowy</Card.Title>
                                <Card.Text>
                                    Sophia Wagner
                                </Card.Text>
                            </Card.Body>
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                            </Link>
                        </Card>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                            <Card.Img variant="top" src="/image/gra-ekosystem.jpg" />
                            <Card.Body>
                                <Card.Title>Ekosystem 2 - Rafa Koralowa</Card.Title>
                                <Card.Text>
                                    Matt Simpson
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
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img src="/image/gra-o-kotach.jpg" />
                    <Card.Body>
                        <Card.Title>Najlepsza gra o kotach</Card.Title>
                        <Card.Text>
                            FoxGames
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img variant="top" src="/image/gra-sowy.jpg" />
                    <Card.Body>
                        <Card.Title>Sowy</Card.Title>
                        <Card.Text>
                            Sophia Wagner
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img variant="top" src="/image/gra-ekosystem.jpg" />
                    <Card.Body>
                        <Card.Title>Ekosystem 2 - Rafa Koralowa</Card.Title>
                        <Card.Text>
                            Matt Simpson
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img variant="top" src="/image/gra-sowy.jpg" />
                    <Card.Body>
                        <Card.Title>Sowy</Card.Title>
                        <Card.Text>
                            Sophia Wagner
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img src="/image/gra-o-kotach.jpg" />
                    <Card.Body>
                        <Card.Title>Najlepsza gra o kotach</Card.Title>
                        <Card.Text>
                            FoxGames
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img variant="top" src="/image/gra-sowy.jpg" />
                    <Card.Body>
                        <Card.Title>Sowy</Card.Title>
                        <Card.Text>
                            Sophia Wagner
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img variant="top" src="/image/gra-ekosystem.jpg" />
                    <Card.Body>
                        <Card.Title>Ekosystem 2 - Rafa Koralowa</Card.Title>
                        <Card.Text>
                            Matt Simpson
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '10px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img src="/image/gra-o-kotach.jpg" />
                    <Card.Body>
                        <Card.Title>Najlepsza gra o kotach</Card.Title>
                        <Card.Text>
                            FoxGames
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