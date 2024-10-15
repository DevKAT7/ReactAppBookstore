import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import CustomNavbar from './CustomNavbar';

export function Layout() {
    return (
        <div className="layout-container"> 
            <CustomNavbar />
            <div className="content-wrapper" style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <div style={{ width: '100%', maxWidth: '1200px' }}>
                    <div className="px-3">
                        <Container fluid>
                            <Outlet />
                        </Container>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}