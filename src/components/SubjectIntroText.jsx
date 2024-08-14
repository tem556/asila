import './IntroText.css'

function SubjectIntroText({ grade, subject, term }) {
    const subjectText = {
        1: "التربية الإسلامية", 2: "اللغة العربية", 3: "الفيزياء",
        4: "الكيمياء", 5: "الأحياء", 6: "الرياضيات",
        7: "اللغة الإنجليزية", 8: "تكنولوجيا المعلومات"
    }

    const gradeText = {
        1: "الأول", 2: "الثاني", 3: "الثالث", 4: "الرابع",
        5: "الخامس", 6: "السادس", 7: "السابع", 8: "الثامن",
        9: "التاسع", 10: "العاشر", 11: "الحادي عشر", 12: "الثاني عشر"
    }

    const termText = {
        1: "الفصل الأول",
        2: "الفصل الثاني"
    }



    const marginTopStyle = window.innerWidth < 576 ? '20%' : '7%'
    const paraTopStyle = window.innerWidth < 576 ? '15%' : '5%'

    return (
        <div>
            <h1 className="intro-text-style" style={{ marginTop: marginTopStyle }}> موارد مادة {subjectText[subject]} </h1>
            <p className="intro-para-style">
                هنا يمكنك العثور على المراجعات المتنوعة، والامتحانات السابقة، وحلول التمارين الخاصة بمادة {subjectText[1]}  للصف {gradeText[grade]} في قطر
            </p>
            <p className='intro-para-style' style={{ marginTop: paraTopStyle }}>
                اضغط على القائمة المناسبة للتنقل بين الامتحانات السابقة، الملازم، والكتب:
            </p>
        </div>
    )
}

export default SubjectIntroText;