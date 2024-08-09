import { Container, Image, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import './StatCard.css'

import Book from '../assets/Book1.png'
import Database from '../assets/Database.png'
import CheckCircle from '../assets/CheckCircle.png'

function StatCard() {
    let arr = [Book, Database, CheckCircle]
    let arrText = [
        "500+ ملازم مميزة",
        "1000+ أسئلة مختلفة",
        "100+ اختبارات تجريبية"
    ]

    return (
        <div className="stat-wrapper">
            <Container fluid>
                <Row className="flex-column flex-md-row full-width-box below-navbar">
                    {arr.map((img, i) => (
                        <Col key={i} className='flex-row flex-md-column col-style'>
                            <Image className="img-scale" src={img} />
                            <div className="stat-text">{arrText[i]} </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default StatCard;