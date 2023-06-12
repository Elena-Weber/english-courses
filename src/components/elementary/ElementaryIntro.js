import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import ElementaryTopics from './ElementaryTopics'

function ElementaryIntro() {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>Кому подойдёт данный курс?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Тем, кто уже умеет читать на английском языке (даже если не всегда правильно)</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто когда-то уже изучал English (но не очень успешно)</ListGroup.Item>
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
            <ListGroup.Item as="li">Тем, кто не никогда не изучал English</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто уже имеет базовые знания по английскому языку</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто любит долгие разговоры ни о чём</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кому нужно подтянуть лишь один аспект языка (произношение, грамматика, аудирование, лексика, разговор)</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто хочет комплексный результат за 2 часа</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5>Что будет на этом курсе?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ElementaryTopics/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ElementaryIntro;