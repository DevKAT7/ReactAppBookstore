import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ShoppingCart = () => {
    return (
        <Container fluid>
            <h4>
                 Produkty dodane do koszyka
            </h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "block" }}>
                    <div className="shopping-cart-item">
                        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                            <div>
                                <img src="image\OczySmoka.png" style={{ width: "90px", height: "130px" }}></img>
                            </div>
                            <div>
                                <p><strong>Oczy Smoka (ilustrowane brzegi)</strong></p>
                                <p>Stephen King</p>
                                <p className="shopping-cart-item-delivery">
                                    <img className="shopping-cart-item-delivery-icon" src="image\icon-check-mark.png"/>WYSYŁAMY W 24H
                                </p>
                            </div>
                        </div>
                        <div className="shopping-cart-item-price">
                            <Form.Select className="cart-quantity" style={{ height: "50px" }} >
                                <option>1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4+</option>
                            </Form.Select>
                            <div>
                                <p><strong>32,99 zł</strong></p>
                                <img className="shopping-cart-item-delete-icon" src="image\icon-trash-can.png" />
                            </div>
                        </div>
                    </div>
                    <div className="shopping-cart-item">
                        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                            <div>
                                <img src="image\KameliowySklepPapierniczy.png" style={{ width: "90px", height: "130px" }}></img>
                            </div>
                            <div>
                                <p><strong>Kameliowy sklep papierniczy</strong></p>
                                <p>Ito Ogawa</p>
                                <p className="shopping-cart-item-delivery">
                                    <img className="shopping-cart-item-delivery-icon" src="image\icon-check-mark.png" />WYSYŁAMY W 24H
                                </p>
                            </div>
                        </div>
                        <div className="shopping-cart-item-price">
                            <Form.Select className="cart-quantity" style={{ height: "50px" }} >
                                <option>1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4+</option>
                            </Form.Select>
                            <div>
                                <p><strong>49,99 zł</strong></p>
                                <img className="shopping-cart-item-delete-icon" src="image\icon-trash-can.png" />
                            </div>
                        </div>
                    </div>
                    <div className="shopping-cart-item">
                        <div style={{ display: "flex", gap: "20px", alignItems: "center"}}>
                            <div>
                                <img src="image\HarryPotter.png" style={{ width: "90px", height: "130px" }}></img>
                            </div>
                            <div>
                                <p><strong>Harry Potter i kamień filozoficzny</strong></p>
                                <p>J.K. Rowling</p>
                                <p className="shopping-cart-item-delivery">
                                    <img className="shopping-cart-item-delivery-icon" src="image\icon-check-mark.png" />WYSYŁAMY W 24H
                                </p>
                            </div>
                        </div>
                        <div className="shopping-cart-item-price">
                            <Form.Select className="cart-quantity" style={{ height: "50px" }} >
                                <option>1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4+</option>
                            </Form.Select>
                            <div>
                                <p><strong>24,99 zł</strong></p>
                                <img className="shopping-cart-item-delete-icon" src="image\icon-trash-can.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Card style={{ width: "400px", height: "230px", backgroundColor: "#F5F5F5"}}>
                        <Card.Body>
                            <Card.Text className="shopping-cart-text">
                                <span>Wartość produktów:</span>
                                <span>107,97 zł</span>
                            </Card.Text>
                            < hr className="solid-divider" />
                            <Card.Title className= "shopping-cart-title">
                                <span>Do zapłaty:</span>
                                <span>107,97 zł</span>
                            </Card.Title>
                            <Card.Text style={{marginTop: "30px"} }>
                                <Button variant="light" className="buttons" style={{ width: '100%'}}>
                                    Przejdź do dostawy
                                </Button>
                            </Card.Text>                        
                            <Card.Text style={{display: "flex", justifyContent: "center", color: "blue"} }>
                                Do bezpłatnej dostawy brakuje 42,03 zł
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    )
}