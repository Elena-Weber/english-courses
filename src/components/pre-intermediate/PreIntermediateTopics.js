import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function PreIntermediateTopics() {
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
            <ListGroup.Item as="li">Дифтонги</ListGroup.Item>
            <ListGroup.Item as="li">Трифтонги</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5>Грамматика</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Существительные</ListGroup.Item>
            <ListGroup.Item as="li">Числительные</ListGroup.Item>
            <ListGroup.Item as="li">Артикль</ListGroup.Item>
            <ListGroup.Item as="li">Местоимения</ListGroup.Item>
            <ListGroup.Item as="li">Глагол (8 времён в действительном залоге и 3 времени в страдательном залоге)</ListGroup.Item>
            <ListGroup.Item as="li">Прилагательные</ListGroup.Item>
            <ListGroup.Item as="li">Наречия</ListGroup.Item>
            <ListGroup.Item as="li">Предлоги</ListGroup.Item>
            <ListGroup.Item as="li">4 типа вопросов</ListGroup.Item>
            <ListGroup.Item as="li">Инфинитив, герундий, причастие</ListGroup.Item>
            <ListGroup.Item as="li">Модальные глаголы (can, may, must, should, need)</ListGroup.Item>
            <ListGroup.Item as="li">3 типа условных предложений</ListGroup.Item>
            <ListGroup.Item as="li">Конструкция There is/are</ListGroup.Item>
            <ListGroup.Item as="li">Косвенная речь</ListGroup.Item>
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
            <ListGroup.Item as="li">Внешность</ListGroup.Item>
            <ListGroup.Item as="li">Семья</ListGroup.Item>
            <ListGroup.Item as="li">Черты характера</ListGroup.Item>
            <ListGroup.Item as="li">Окружающий мир</ListGroup.Item>
            <ListGroup.Item as="li">Отель, ресторан, аэропорт, транспорт, туризм</ListGroup.Item>
            <ListGroup.Item as="li">Приготовление еды</ListGroup.Item>
            <ListGroup.Item as="li">Одежда и шоппинг</ListGroup.Item>
            <ListGroup.Item as="li">Здоровье</ListGroup.Item>
            <ListGroup.Item as="li">Кино, театр, музыка</ListGroup.Item>
            <ListGroup.Item as="li">Дом, милый дом</ListGroup.Item>
            <ListGroup.Item as="li">Формальная и неформальная речь, сленг</ListGroup.Item>
            <ListGroup.Item as="li">Фразовые глаголы</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h5>Аудирование</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Описание внешности</ListGroup.Item>
            <ListGroup.Item as="li">Знаки зодиака</ListGroup.Item>
            <ListGroup.Item as="li">В ресторане</ListGroup.Item>
            <ListGroup.Item as="li">В аэропорту</ListGroup.Item>
            <ListGroup.Item as="li">Ориентация на местности</ListGroup.Item>
            <ListGroup.Item as="li">Шоппинг</ListGroup.Item>
            <ListGroup.Item as="li">У врача</ListGroup.Item>
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
            <ListGroup.Item as="li">Внешность</ListGroup.Item>
            <ListGroup.Item as="li">Семья</ListGroup.Item>
            <ListGroup.Item as="li">Черты характера</ListGroup.Item>
            <ListGroup.Item as="li">Окружающий мир</ListGroup.Item>
            <ListGroup.Item as="li">Отель, ресторан, аэропорт, транспорт, туризм</ListGroup.Item>
            <ListGroup.Item as="li">Приготовление еды</ListGroup.Item>
            <ListGroup.Item as="li">Одежда и шоппинг</ListGroup.Item>
            <ListGroup.Item as="li">Здоровье</ListGroup.Item>
            <ListGroup.Item as="li">Кино, театр, музыка</ListGroup.Item>
            <ListGroup.Item as="li">Дом, милый дом</ListGroup.Item>
            <ListGroup.Item as="li">Написание письма</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default PreIntermediateTopics;