import Heading from "./components/Heading";
import Home from './components/Home';
import Elementary from './components/Elementary';
import PreIntermediate from './components/PreIntermediate';
import Devs from './components/Devs';
import Alpha from "./components/Alpha";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function App() {
  // delete or comment out these 3 blocks if not needed anymore
  const url = window.location.href;
  let key = "";

  if (url.includes("elementary")) {
    key = "elementary";
  } else if (url.includes("pre-intermediate")) {
    key = "pre-intermediate";
  } else if (url.includes("techies")) {
    key = "techies";
  } else if (url.includes("alpha")) {
    key = "alpha";
  } else if (url.includes("home")){
    key = "home";
  } else {
    key = "home";
  };

  const handleEventKey = (eventKey) => {
    key = eventKey;
  };

  return (
    <>
    <Heading/>
    <Tabs
      defaultActiveKey="home"
      id="justify-tab"
      className="mb-3 mx-3 fs-5 navi-tabs"
      justify
      // delete or comment out next 2 lines if not needed anymore
      activeKey={key}
      onSelect={(eventKey) => handleEventKey(eventKey)}
    >
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
      <Tab eventKey="alpha" title="Alpha-club">
        <Alpha/>
      </Tab>
    </Tabs>
    </>
  );
}