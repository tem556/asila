import { Container, Image, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import Book from '../assets/Book.png'
import Medal from '../assets/Medal.png'
import './InfoCard.css'

const gradeText = {
    1: "الأول", 2: "الثاني", 3: "الثالث", 4: "الرابع",
    5: "الخامس", 6: "السادس", 7: "السابع", 8: "الثامن",
    9: "التاسع", 10: "العاشر", 11: "الحادي عشر", 12: "الثاني عشر"
}

const termText = {
    1: "الفصل الأول",
    2: "الفصل الثاني"
}



const GradeRow = ({ grade, setGrade }) => (
    <Row className="left-row-pos">
        <h5 className="custom-card-font">اختر المستوى الأكاديمي:</h5>
        <DropdownButton
            id="dropdown-basic-button"
            onSelect={(eventKey) => setGrade(eventKey)}
            title={gradeText[grade]}
            className="dropdown-pos"
            align="end"
        >
            {Object.values(gradeText).map((value, index) => (
                <Dropdown.Item
                    key={index + 1}
                    eventKey={index + 1}
                    className='custom-dropdown-item'
                >
                    {value}
                </Dropdown.Item>
            ))}

        </DropdownButton>
    </Row>
)

const TermRow = ({ term, setTerm }) => (
    <Row className="bottom-left-row-pos">
        <h5 className="custom-card-font">اختر الفصل الدراسي:</h5>
        <DropdownButton
            id="dropdown-basic-button"
            title={termText[term]}
            className="dropdown-pos"
            align="end"
            onSelect={(eventKey) => setTerm(eventKey)}
        >
            <Dropdown.Item eventKey={1} className='custom-dropdown-item'>الفصل الأول</Dropdown.Item>
            <Dropdown.Item eventKey={2} className='custom-dropdown-item'>الفصل الثاني</Dropdown.Item>
        </DropdownButton>
    </Row>
)

const FirstCol = ({ grade, setGrade, term, setTerm }) => (
    <Col className="text-right order-2 order-md-1 col-pos">
        <GradeRow grade={grade} setGrade={setGrade} />
        <TermRow term={term} setTerm={setTerm} />
    </Col>
)

const SecondCol = () => (
    <Col className="d-flex flex-column justify-content-center align-items-start text-right order-1 order-md-2">
        <Row className="row-pos">
            <Col className="d-flex">
                <p className="custom-card-font">
                    أفضل محتوى للتفوق و تحسين المستوى الأكاديمي لدى طلاب المدارس الحكومية في قطر
                </p>
            </Col>
            <Col xs={1} className="d-flex justify-content-center img-col">
                <Image src={Medal} className="img-size-medal" />
            </Col>
        </Row>
        <Row className="bottom-row-pos">
            <Col className="d-flex">
                <p className="custom-card-font">
                    مئات الملازم في شتى المواضيع في مكان واحد, سهلة التحميل و الاستخدام
                </p>
            </Col>
            <Col xs={1} className="d-flex justify-content-center">
                <Image src={Book} className="img-size" />
            </Col>
        </Row>
    </Col>
)


function InfoCard({ grade, setGrade, term, setTerm }) {
    return (
        <div className="full-width-wrapper">
            <Container fluid>
                <Row className="flex-column flex-md-row full-width-box below-navbar">
                    <FirstCol
                        grade={grade}
                        setGrade={setGrade}
                        term={term}
                        setTerm={setTerm}
                    />
                    <SecondCol />
                </Row>
            </Container>
        </div>
    );
}

export default InfoCard;