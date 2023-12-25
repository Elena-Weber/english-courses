import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import WorkCareerTopics from './WorkCareerTopics';

const WorkCareerIntro = () => {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>Кому подойдёт курс English for Work adn Career?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Тем, кто уже владеет английским языком (на среднем уровне, плюс-минус) и хотел бы расширить словарный запас на тему компьютеров и программирования. <br></br><br></br>Обратите внимание, что в курсе <u>3 модуля</u>, посвящённых разным темам, и их можно приобрести по отдельности или пакетом (3-в-1)</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5>Кому курс не подойдёт?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Тем, у кого English на уровне ниже среднего (на курсе нет грамматики, аудирования, произношения, чтения и письма - акцент будет на словарном запасе)</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто уже владеет лексикой на тему компьютеров и программирования</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5>Что вас ждёт на этом курсе?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <WorkCareerTopics/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default WorkCareerIntro;