import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {

  return (
    
    <Navbar expand="lg" className="custom-nav rtl-direction full-width-navbar">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Changa:wght@200..800&family=Reem+Kufi:wght@400..700&display=swap" rel="stylesheet"/>
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white header-style">بيت المذاكرة</Navbar.Brand>
        <Navbar.Toggle 
        aria-controls="basic-navbar-nav"   
        className='custom-toggler navbar-toggler-border'/>
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