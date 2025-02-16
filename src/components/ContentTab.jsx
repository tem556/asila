import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row, Col, Image } from 'react-bootstrap'
import "./ContentTab.css"
import TestImg from '../assets/TestImgs/TestBook.png'

function ContentTab() {
    const SingleFile = () => {
        return (
            <Container className="d-flex custom-container justify-content-end">
                <Row className="d-flex flex-row file-row">
                    <Col className="d-flex flex-column justify-content-center text-col">
                        <p className="custom-strong">ملزمة التفوق السبسي</p>
                        <p><span className="custom-strong">المؤلف:</span> الأستاذ نادر</p>
                        <p><span className="custom-strong">التاريخ:</span> 2024-08-11</p>
                        <p><span className="custom-strong">الدروس:</span> التكامل, التفاضل</p>
                        <p><span className="custom-strong">التقييم:</span> 5/5</p>
                        <p><span className="custom-strong">عدد الصفحات:</span> 51</p>
                    </Col>
                    <Col className="d-flex justify-content-end  img-col-1">
                        <div className='d-flex img-container'>
                            <Image src={TestImg} alt="Image" className="d-flex img-col-file" />
                        </div>

                    </Col>
                </Row>
            </Container>
        );
    };

    return (
        <Tabs
            defaultActiveKey="profile"
            id="subject-tab"
            className="mb-3 custom-tabs"
            justify
        >
            <Tab
                eventKey="contact"
                title={"الكتب"}>
                Tab content for Contact
            </Tab>
            <Tab eventKey="home"
                title={"الاختبارات"}>
                Tab content for Home
            </Tab>
            <Tab
                eventKey="profile"
                title={"الملازم"}>
                <SingleFile />
                <hr className="custom-hr" />
                <SingleFile />
                <hr className="custom-hr" />
                <SingleFile />
                <hr className="custom-hr" />
                <SingleFile />
            </Tab>
        </Tabs>
    );
}

export default ContentTab;