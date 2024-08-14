import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./ContentTab.css"

function ContentTab() {
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
                Tab content for Profile
            </Tab>
        </Tabs>
    );
}

export default ContentTab;