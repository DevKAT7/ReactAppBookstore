import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


export const Description = () => {
    return (
        <Container fluid>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <img src="image/HarryPotter.png" style={{ width: "300px", height: "450px" }} />
                </div>
                <div className="productDesc" style={{ width: "350px", height: "450px" }}>
                    <p>
                        <h2>Harry Potter i kamień filozoficzny (Ravenclaw)</h2>
                        Autor: J.K. Rowling
                        <br/>
                        Oceń produkt
                    </p>
                    <p>
                        Wydawca: Media Rodzina
                        <br/>
                        Data wydania: 01.07.2020
                        <br/>
                        Seria: Harry Potter
                        <br/>
                        Typ okładki: miękka okładka
                        <br/>
                        EAN: 9788380087620
                    </p>
                </div>
                <div>
                    <Card style={{ width: "300px", height: "350px"}}>
                        <Card.Body>
                            <Card.Title className="cart-CardTitle">
                                Nasza Cena: 24,99 zł
                            </Card.Title>
                            <Card.Text className ="cart-CardText">
                                Cena sugerowana przez wydawcę: 39,99 zł
                            </Card.Text>
                            <Card.Text style={{display: "flex"} }>
                                <Form.Select className="cart-quantity">
                                    <option>1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">4+</option>
                                </Form.Select>
                                <Button variant="light" className="buttons" style={{ width: '80%', marginLeft: '10px' }}>
                                    Dodaj do koszyka
                                </Button>
                            </Card.Text>
                            < hr className="solid-divider" />
                            <Card.Text style={{ display: "flex"}}>
                                <img src="image\icon-time.png" style={{marginRight: "10px"} }></img>
                                Wysyłamy w 24h
                            </Card.Text>
                            < hr className="solid-divider"/>
                            <Card.Text style={{ display: "flex" }}>
                                <img src="image\icon-shop.png" style={{ marginRight: "10px" }}></img>
                                Dostawa do księgarni 0 zł
                            </Card.Text>
                            < hr className="solid-divider" />
                            <Card.Text style={{ display: "flex" }}>
                                <img src="image\icon-delivery.png" style={{ marginRight: "10px" }}></img>
                                Sprawdź koszt dostawy
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div style={{ marginTop: "30px" }}>
                < hr className="solid-divider" />
                <h5>
                    Opis
                </h5>
                <p className="info">
                    Edycja Specjalna z okazji dwudziestolecia wydania książki Harry Potter i Kamień Filozoficzny - pozycja
                    <br/>
                    obowiązkowa dla najwierniejszych fanów Hogwartu!
                    <br/>
                    <br />
                    Gryffindor, Slytherin Hufflepuff, Ravenclaw... Dwadzieścia lat temu te słowa ukazały się drukiem w
                    <br />
                    Polsce, uwalniając Harry-ego z komórki pod schodami. Od tego czasu wiele nowych pokoleń poznało
                    <br />
                    historię młodego czarodzieja i dołączyło do grona pottermaniaków. Świętując dwadzieścia lat z
                    <br />
                    Harrym Potterem, oddajemy do rąk czytelników pierwszy tom w barwach czterech domów. Każde
                    <br />
                    wydanie różni się kolorem okładki, godłem domu oraz ilustracją ducha rezydenta. W środku można
                    <br />
                    znależć mnóstwo ciekawostek o założycielach, opiekunach, znanych Gryfonach, relikwiach, a także o
                    <br />
                    Ceremonii Przydziału, pokoju wspólnym, Pucharze Domów, jest też quiz o Hogwarcie, a to wszystko
                    <br />
                    zilustrował Levi Pinfold!
                </p>
                < hr className="solid-divider" />
                <h5>
                    Szczegóły
                </h5>
                <p className="info-details">
                    Data wydania: 01.07.2020
                    <br />
                    Liczba stron: 352
                    <br />
                    Wymiary: 13.5 x 20.5
                    <br />
                    Typ okładki: miękka okładka
                    <br />
                    Wydawca: Media Rodzina
                    <br />
                    Autor: J.K. Rowling
                    <br />
                    Seria: Harry Potter
                    <br />
                    Tytuł: Harry Potter i kamień filozoficzny (Ravenclaw)
                    <br />
                    Kategorie: Książki / Książki dla młodzieży / fantastyka dla młodzieży               
                    <br />
                    EAN: 9788380087620
                </p>
            </div>
        </Container>
    )
}