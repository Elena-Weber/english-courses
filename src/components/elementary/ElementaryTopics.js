import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function ElementaryTopics() {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>Произношение</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Согласные звуки</ListGroup.Item>
            <ListGroup.Item as="li">Гласные звуки</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5>Грамматика</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Местоимения</ListGroup.Item>
            <ListGroup.Item as="li">Правильные и неправильные глаголы (4 времени)</ListGroup.Item>
            <ListGroup.Item as="li">Порядок слов в предложении</ListGroup.Item>
            <ListGroup.Item as="li">Отрицание и вопросы</ListGroup.Item>
            <ListGroup.Item as="li">Исчисляемость и числительные</ListGroup.Item>
            <ListGroup.Item as="li">Степени сравнения прилагательных</ListGroup.Item>
            <ListGroup.Item as="li">Конструкция There is/are</ListGroup.Item>
            <ListGroup.Item as="li">Конструкция would like</ListGroup.Item>
            <ListGroup.Item as="li">Конструкция be going to</ListGroup.Item>
            <ListGroup.Item as="li">Конструкция used to</ListGroup.Item>
            <ListGroup.Item as="li">Артикль</ListGroup.Item>
            <ListGroup.Item as="li">Притяжательность</ListGroup.Item>
            <ListGroup.Item as="li">Предлоги</ListGroup.Item>
            <ListGroup.Item as="li">Повелительное наклонение</ListGroup.Item>
            <ListGroup.Item as="li">Модальные глаголы (can, could, may, might, must, should)</ListGroup.Item>
            <ListGroup.Item as="li">Have и have got</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5>Лексика и разговор</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">О себе</ListGroup.Item>
            <ListGroup.Item as="li">Время и дата</ListGroup.Item>
            <ListGroup.Item as="li">Описание предметов и помещений</ListGroup.Item>
            <ListGroup.Item as="li">Внешность</ListGroup.Item>
            <ListGroup.Item as="li">Город и страна мечты</ListGroup.Item>
            <ListGroup.Item as="li">Ресторан</ListGroup.Item>
            <ListGroup.Item as="li">Распорядок дня</ListGroup.Item>
            <ListGroup.Item as="li">Шоппинг</ListGroup.Item>
            <ListGroup.Item as="li">Ориентация на местности</ListGroup.Item>
            <ListGroup.Item as="li">Small talk</ListGroup.Item>
            <ListGroup.Item as="li">Фразовые глаголы</ListGroup.Item>
            <ListGroup.Item as="li">Словосочетания с предлогами</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h5>Аудирование</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">О себе</ListGroup.Item>
            <ListGroup.Item as="li">Числительные</ListGroup.Item>
            <ListGroup.Item as="li">Описание внешности</ListGroup.Item>
            <ListGroup.Item as="li">Описание помещения</ListGroup.Item>
            <ListGroup.Item as="li">Описание города и страны</ListGroup.Item>
            <ListGroup.Item as="li">В ресторане</ListGroup.Item>
            <ListGroup.Item as="li">Распорядок дня</ListGroup.Item>
            <ListGroup.Item as="li">Отпуск</ListGroup.Item>
            <ListGroup.Item as="li">Шоппинг</ListGroup.Item>
            <ListGroup.Item as="li">Разговор по телефону</ListGroup.Item>
            <ListGroup.Item as="li">Small talk</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <h5>Письмо</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">О себе</ListGroup.Item>
            <ListGroup.Item as="li">Описание внешности</ListGroup.Item>
            <ListGroup.Item as="li">Описание города</ListGroup.Item>
            <ListGroup.Item as="li">Мой типичный день: вчера, сегодня: заавтра</ListGroup.Item>
            <ListGroup.Item as="li">Ориентация на местности</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ElementaryTopics;