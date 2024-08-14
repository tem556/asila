import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ArabicImg from '../assets/SubjectSymbols/ArabicSymbol.png'
import ChemistryImg from '../assets/SubjectSymbols/ChemistrySymbol.png'
import BiologyImg from '../assets/SubjectSymbols/BiologySymbol.png'
import MathImg from '../assets/SubjectSymbols/MathSymbol.png'
import EnglishSymbol from '../assets/SubjectSymbols/EnglishSymbol.png'
import ISSymbol from '../assets/SubjectSymbols/ISSymbol.png'
import ITSymbol from '../assets/SubjectSymbols/ITSymbol.png'
import PhysicsSymbol from '../assets/SubjectSymbols/PhysicsSymbol.png'

import './SubjectDeck.css'

function SubjectDeck() {
    const subjects = Array.from({ length: 8}, (_, i) => i + 1);
    const subjectTexts = {
        1: 'التربية الإسلامية', 2: 'اللغة العربية', 3: 'الفيزياء', 4: 'الكيمياء', 
        5: 'الأحياء', 6: 'الرياضيات', 7: 'اللغة الأنجليزية', 8: 'تكنولوجيا المعلمومات'
    }

    const subjectImgs = {
        1: ISSymbol, 2: ArabicImg, 3: PhysicsSymbol, 4: ChemistryImg, 
        5: BiologyImg, 6: MathImg, 7: EnglishSymbol, 8: ITSymbol
    }

    const ImgButton = ({ src, text }) => {
        return (
            <Col xs={6}
                sm={4}
                md={3}
                lg={3}>
                <Button className="circular-button" as={Link} to="/subject">
                    <img src={src} alt="icon" className="button-icon" />
                </Button>
                <Button className='symbol-text'> <div className="align-content-center"> {text} </div> </Button>
            </Col>
        )
    }

    return (
        <div className="deck-pos">
            <h1 className="heading-style">أختر المادة المناسبة:</h1>

            <Row className="icon-row-pos d-flex flex-row justify-content-center">
                {subjects.map((i) => (
                    <ImgButton key={subjectTexts[i]} text={subjectTexts[i]}  src={subjectImgs[i]}  />
                ))

                }
            </Row>
        </div>
    )
}


export default SubjectDeck;