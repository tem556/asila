import './IntroText.css'

function SubjectIntroText({grade, subject}) {
    const marginTopStyle = window.innerWidth < 576 ? '20%' : '7%';
    const paraTopStyle = window.innerWidth < 576 ? '15%' : '5%';

    return (
        <div>
        <h1 className="intro-text-style" style={{marginTop: marginTopStyle}}>موارد مادة الكيمياء</h1>
        <p className="intro-para-style">
        هنا يمكنك العثور على المراجعات المتنوعة، والامتحانات السابقة، وحلول التمارين الخاصة بمادة الكيمياء للمرحلة الثانوية في قطر
        </p>
        <p className='intro-para-style' style={{marginTop: paraTopStyle}}>
        اضغط على القائمة المناسبة للتنقل بين الامتحانات السابقة، الملازم، والكتب:
        </p>
        </div>
    )
}

export default SubjectIntroText;