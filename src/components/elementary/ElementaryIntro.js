import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import ElementaryTopics from './ElementaryTopics'

function ElementaryIntro() {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>Кому подойдёт курс English for Newbies?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Тем, кто уже умеет читать на английском языке (даже если не всегда правильно)</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто когда-то уже изучал базовый English (но не очень успешно)</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто любит информацию, логично разложенную по полочкам и без воды</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто хочет изучать язык в комплексе (произношение, грамматика, аудирование, лексика, разговор)</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто готов ударно потрудиться ради ощутимого результата</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5>Кому курс не подойдёт?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Тем, кто никогда не изучал English</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто уже имеет знания по английскому выше базового уровня</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто любит долгие разговоры ни о чём</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кому нужно подтянуть лишь один аспект языка (произношение, грамматика, аудирование, лексика, разговор)</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто хочет комплексный результат за пару часов</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5>Что вас ждёт на этом курсе?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ElementaryTopics/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ElementaryIntro;