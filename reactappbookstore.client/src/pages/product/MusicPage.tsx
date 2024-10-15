import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Music = () => {
    return (
        <Container fluid>
            <h2 style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                Przenieś się do świata muzyki
            </h2>
            <div style={{ display: "flex", flexwrap: "wrap" }}>
                <div style={{ width: "550px", height: "990px" }}>
                    <img className="genre-table" style={{ width: "100%", height: "100%", border: "none" }} src="image/image6.png"></img>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <Row style={{ justifyContent: "space-evenly" }}>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                            <Card.Img src="/image/music1.jpg" style={{ marginTop: "40px" }} />
                            <Card.Body>
                                <Card.Title>Blue Electric Light</Card.Title>
                                <Card.Text>
                                    Lenny Kravitz
                                </Card.Text>
                            </Card.Body>
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                            </Link>
                        </Card>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                            <Card.Img src="/image/music4.jpg" style={{ marginTop: "40px" }} />
                            <Card.Body>
                                <Card.Title>Loom</Card.Title>
                                <Card.Text>
                                    Imagine Dragons
                                </Card.Text>
                            </Card.Body>
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                            </Link>
                        </Card>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                            <Card.Img src="/image/music2.jpg" style={{ marginTop: "40px" }} />
                            <Card.Body>
                                <Card.Title>Hit Me Hard And Soft</Card.Title>
                                <Card.Text>
                                    Billie Eilish
                                </Card.Text>
                            </Card.Body>
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                            </Link>
                        </Card>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                            <Card.Img src="/image/music3.jpg" style={{ marginTop: "40px" }} />
                            <Card.Body>
                                <Card.Title>The Dream Of Delphi</Card.Title>
                                <Card.Text>
                                    Bat For Lashes
                                </Card.Text>
                            </Card.Body>
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                            </Link>
                        </Card>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                            <Card.Img src="/image/music1.jpg" style={{ marginTop: "40px" }} />
                            <Card.Body>
                                <Card.Title>Blue Electric Light</Card.Title>
                                <Card.Text>
                                    Lenny Kravitz
                                </Card.Text>
                            </Card.Body>
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                            </Link>
                        </Card>
                        <Card style={{ width: '16rem', marginBottom: "20px" }}>
                            <Card.Img src="/image/music4.jpg" style={{ marginTop: "40px" }} />
                            <Card.Body>
                                <Card.Title>Loom</Card.Title>
                                <Card.Text>
                                    Imagine Dragons
                                </Card.Text>
                            </Card.Body>
                            <Link to="/shoppingcart">
                                <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                            </Link>
                        </Card>
                    </Row>
                </div>
            </div>
            <Row style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img src="/image/music1.jpg" style={{ marginTop: "40px" }} />
                    <Card.Body>
                        <Card.Title>Blue Electric Light</Card.Title>
                        <Card.Text>
                            Lenny Kravitz
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img src="/image/music4.jpg" style={{ marginTop: "40px" }} />
                    <Card.Body>
                        <Card.Title>Loom</Card.Title>
                        <Card.Text>
                            Imagine Dragons
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img src="/image/music2.jpg" style={{ marginTop: "40px" }} />
                    <Card.Body>
                        <Card.Title>Hit Me Hard And Soft</Card.Title>
                        <Card.Text>
                            Billie Eilish
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img src="/image/music3.jpg" style={{ marginTop: "40px" }} />
                    <Card.Body>
                        <Card.Title>The Dream Of Delphi</Card.Title>
                        <Card.Text>
                            Bat For Lashes
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img src="/image/music1.jpg" style={{ marginTop: "40px" }} />
                    <Card.Body>
                        <Card.Title>Blue Electric Light</Card.Title>
                        <Card.Text>
                            Lenny Kravitz
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img src="/image/music4.jpg" style={{ marginTop: "40px" }} />
                    <Card.Body>
                        <Card.Title>Loom</Card.Title>
                        <Card.Text>
                            Imagine Dragons
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img src="/image/music2.jpg" style={{ marginTop: "40px" }} />
                    <Card.Body>
                        <Card.Title>Hit Me Hard And Soft</Card.Title>
                        <Card.Text>
                            Billie Eilish
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
                <Card style={{ width: '16rem', marginBottom: "20px" }}>
                    <Card.Img src="/image/music3.jpg" style={{ marginTop: "40px" }} />
                    <Card.Body>
                        <Card.Title>The Dream Of Delphi</Card.Title>
                        <Card.Text>
                            Bat For Lashes
                        </Card.Text>
                    </Card.Body>
                    <Link to="/shoppingcart">
                        <Button variant="light" className="buttons" style={{ width: '100%', marginBottom: '35px' }}>Dodaj do koszyka</Button>
                    </Link>
                </Card>
            </Row>
        </Container>
    )
}