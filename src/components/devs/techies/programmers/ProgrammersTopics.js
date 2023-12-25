import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

const ProgrammersTopics = () => {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>Programmers</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Как называется оборудование</ListGroup.Item>
            <ListGroup.Item as="li">Что на нём можно делать</ListGroup.Item>
            <ListGroup.Item as="li">Клавиши на клавиатуре</ListGroup.Item>
            <ListGroup.Item as="li">Работа на компьютере</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5>Programming</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Переменные</ListGroup.Item>
            <ListGroup.Item as="li">Типы данных</ListGroup.Item>
            <ListGroup.Item as="li">Порядок выполнения</ListGroup.Item>
            <ListGroup.Item as="li">Форматы идентификаторов</ListGroup.Item>
            <ListGroup.Item as="li">Функции</ListGroup.Item>
            <ListGroup.Item as="li">Псевдокод и алгоритмы</ListGroup.Item>
            <ListGroup.Item as="li">Баги и тестирование</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5>Work and Career</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Планёрка</ListGroup.Item>
            <ListGroup.Item as="li">Переписка</ListGroup.Item>
            <ListGroup.Item as="li">Работа над задачами</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default ProgrammersTopics;