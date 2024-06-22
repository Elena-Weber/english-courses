import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import Techies from './techies/Techies';
import ItBasics from './techies/ItBasics';
// import Programmers from './techies/Programmers';
// import WorkCareer from './techies/WorkCareer';

function DevsModules() {
  return (
    <>
    <Tabs defaultActiveKey="it-basics" id="justify-tab" className="mb-3 mx-3 fs-5 navi-tabs" justify>
      {/* <Tab eventKey="techies" title="Techies">
        <Techies/>
      </Tab> */}
      <Tab eventKey="it-basics" title="IT Basics">
        <ItBasics/>
      </Tab>
      {/* <Tab eventKey="programmers" title="Programming">
        <Programmers/>
      </Tab> */}
      {/* <Tab eventKey="work-career" title="Work and Career">
        <WorkCareer/>
      </Tab> */}
    </Tabs>
    </>
  )
}

export default DevsModules;