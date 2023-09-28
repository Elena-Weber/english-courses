import Heading from "./components/Heading";
import Home from './components/Home';
import Elementary from './components/Elementary';
import PreIntermediate from './components/PreIntermediate';
import Devs from './components/Devs';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function App() {
  return (
    <>
    <Heading/>
    <Tabs defaultActiveKey="home" id="justify-tab" className="mb-3 fs-5 navi-tabs" justify>
      <Tab eventKey="home" title="Home">
        <Home/>
      </Tab>
      <Tab eventKey="elementary" title="Elementary">
        <Elementary/>
      </Tab>
      <Tab eventKey="pre-intermediate" title="Pre-Intermediate">
        <PreIntermediate/>
      </Tab>
      <Tab eventKey="techies" title="Techies">
        <Devs/>
      </Tab>
    </Tabs>
    </>
  );
}