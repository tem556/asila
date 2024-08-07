import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles.css'

function NavBar() {
  const headerStyle = {
    color: 'white',
    backgroundColor: '#1B2F4C',
    direction: 'rtl',
    textAlign: 'start',
    fontFamily: 'Reem Kufi',
    fontSize: 40,
    fontStyle: 'normal'
  }

  return (
    
    <Navbar expand="lg" className="custom-nav rtl-direction full-width-navbar">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Changa:wght@200..800&family=Reem+Kufi:wght@400..700&display=swap" rel="stylesheet"/>
      <Container>
        <Navbar.Brand href="#home" className="text-white" style={headerStyle}>بيت الأسألة</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text className="custom-navbar-font d-none d-md-block">
          مئات من المراجعات و الملازم لمدارس قطر 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;