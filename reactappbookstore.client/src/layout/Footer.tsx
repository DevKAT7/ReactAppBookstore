import { Container, Row, Col } from 'react-bootstrap';

function Footer () {
    return (
        <div className="bg-light text-center text-lg-start" style={{marginTop: "10px"} }>
            <Container>
                <Row className="py-4">
                    <Col lg={6} md={12} className="mb-4 mb-md-0">
                        <h5>DreamBOOK</h5>
                        <p>
                            DreamBOOK to Twoja księgarnia marzeń, gdzie znajdziesz szeroki wybór książek na każdy gust i potrzebę.
                            Przejrzyj naszą kolekcję, odnajdź swoje ulubione tytuły i ciesz się magicznym światem literatury wraz z DreamBOOK.
                        </p>
                    </Col>
                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Linki</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">O nas</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Kontakt</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Wsparcie</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Zasoby</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-dark">FAQ</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Polityka prywatności</a>
                            </li>
                            <li>
                                <a href="#!" className="text-dark">Warunki użytkowania</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="text-center py-3 border-top">
                    <Col>
                        © 2024 DreamBOOK, Wszelkie prawa zastrzeżone
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
