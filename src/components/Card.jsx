import { Container, Image, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import Book from '../assets/Book.png'
import Medal from '../assets/Medal.png'

function InfoCard() {
    return (
        <div className="full-width-wrapper">
            <Container fluid>
                <Row className="flex-column flex-md-row full-width-box below-navbar">
                    <Col className="text-right order-2 order-md-1 col-pos">
                        <Row className="left-row-pos">
                            <h5 className="custom-card-font">اختر المستوى الأكاديمي:</h5>
                            <DropdownButton id="dropdown-basic-button" title="12 علمي" className="dropdown-pos" align="end">
                                <Dropdown.Item href="#/action-1">علمي 11</Dropdown.Item>
                            </DropdownButton>
                        </Row>
                        <Row className="bottom-left-row-pos">
                            <h5 className="custom-card-font">اختر الفصل الدراسي:</h5>
                            <DropdownButton id="dropdown-basic-button" title="الفصل الأول" className="dropdown-pos" align="end">
                                <Dropdown.Item href="#/action-1">الفصل الأول</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">الفصل الثاني</Dropdown.Item>
                            </DropdownButton>
                        </Row>
                    </Col>


                    <Col className="d-flex flex-column justify-content-center align-items-start text-right order-1 order-md-2">
                        <Row className="row-pos">
                            <Col className="d-flex justify-content-center align-items-center">
                                <p className="custom-card-font">
                                    أفضل محتوى للتفوق و تحسين المستوى الأكاديمي لدى طلاب المدارس الحكومية في قطر
                                </p>
                            </Col>
                            <Col xs={1} className="d-flex justify-content-center align-items-center">
                                <Image src={Medal} className="img-size-medal"/>
                            </Col>
                        </Row>
                        <Row className="bottom-row-pos">
                            <Col className="d-flex justify-content-center align-items-center">
                                <p className="custom-card-font">
                                    مئات الملازم في شتى المواضيع في مكان واحد, سهلة التحميل و الاستخدام
                                </p>
                            </Col>
                            <Col xs={1} className="d-flex justify-content-center align-items-center">
                                <Image src={Book} className="img-size"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default InfoCard;