import { Button, Row, Col } from 'react-bootstrap';
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

    const ImgButton = ({ src, text }) => {
        return (
            <Col xs={6}
            sm={4}
            md={3}
            lg={3}>
                <Button className="circular-button">
                    <img src={src} alt="icon" className="button-icon" />
                </Button>
                <Button className={'symbol-text'}> <div className=" align-content-center"> {text} </div> </Button>
            </Col>
        )
    }

    const ImgRow = ({ img1, img2, img3, img4, text1, text2, text3, text4 }) => (
        <Row className="icon-row-pos d-flex flex-row justify-content-center">
            <ImgButton src={img1} text={text1} />
            <ImgButton src={img2} text={text2} />
            <ImgButton src={img3} text={text3} />
            <ImgButton src={img4} text={text4} />
        </Row>
    )

    return (
        <div className="deck-pos">
            <h1 className="heading-style">أختر المادة المناسبة:</h1>
            <ImgRow
                img1={ArabicImg} img2={ChemistryImg} img3={BiologyImg} img4={MathImg}
                text1={'اللغة العربية'} text2={'الكيمياء'} text3={'الأحياء'} text4={'الرياضيات'}
            />
            <ImgRow
                img1={PhysicsSymbol} img2={ITSymbol} img3={ISSymbol} img4={EnglishSymbol}
                text1={'الفيزياء'} text2={'تكنولوجيا المعلمومات'} text3={'التربية الإسلامية'} text4={'اللغة الأنجليزية'}
            />
        </div>
    )
}


export default SubjectDeck;