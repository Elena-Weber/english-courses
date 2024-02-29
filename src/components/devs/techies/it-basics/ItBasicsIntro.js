import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function ItBasicsIntro() {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5>Кому подойдёт курс IT Basics?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Тем, кто уже владеет английским языком (на базовом уровне, плюс-минус) и хотел бы расширить словарный запас на тему компьютеров, интернета и email</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто хочет понимать, из чего состоит их компьютер, что в нём происходит после нажатия на кнопку включения, а также - как работают интернет и email</ListGroup.Item><ListGroup.Item as="li">Тем, кто любит информацию, логично разложенную по полочкам и без воды, поданную так, что поймёт даже ребёнок</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5>Кому курс не подойдёт?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Тем, у кого English на уровне ниже Pre-Intermediate (не знаете свой уровень? напишите мне в личку)</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кому нужно подтянуть все аспекты языка (Внимание: акцент в курсе будет только на расширении словарного запаса)</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто уже владеет лексикой на компьютерную тему</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5>Какие темы изучаются?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Компоненты компьютера (монитор, материнская плата, процессор, чипсет, ОЗУ, ПЗУ, хранилище, видео и звуковая карты, модем и т.д.) и за что каждый из них отвечает</ListGroup.Item>
            <ListGroup.Item as="li">Прочее оборудование: клавиатура, мышка, микрофон, колонки, наушники, камера, модем, раутер, принтер/сканер/ксерокс, портативные хранилища и т.п.</ListGroup.Item>
            <ListGroup.Item as="li">Кабели и зарядка, серверы и данные, беспроводные технологии</ListGroup.Item>
            <ListGroup.Item as="li">Клавиатура и все (!) клавиши на ней</ListGroup.Item>
            <ListGroup.Item as="li">Операционная система, файлы и приложения, иконки и ярлыки, основные операции на компьютере</ListGroup.Item>
            <ListGroup.Item as="li">Компьютерные проблемы</ListGroup.Item>
            <ListGroup.Item as="li">Локальная сеть, интернет, браузер, вебсайт и действия на нём</ListGroup.Item>
            <ListGroup.Item as="li">Email и действия с электронной почтой</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h5>Как выглядит учёба?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Курс длится 6 или 8 недель (зависит от тарифа)</ListGroup.Item>
            <ListGroup.Item as="li">Учёба проходит на сайте getcourse.ru (нестрашно, если у вас там пока нет аккаунта)</ListGroup.Item>
            <ListGroup.Item as="li">Дважды в неделю (по понедельникам и четвергам) вы будете получать новый урок, на выполнение которого у вас будет 3-4 дня</ListGroup.Item>
            <ListGroup.Item as="li">На выполнение каждого такого урока у вас будет уходить 2-4 часа</ListGroup.Item>
            <ListGroup.Item as="li">Вы также будете добавлены в чат в Телеграм, где можно будет задавать вопросы и общаться со мной и единомышленниками</ListGroup.Item>
            <ListGroup.Item as="li">Если выбранный вами тариф включает еженедельные созвоны, раз в неделю (по воскресеньям) мы будем с вами встречаться в Zoom и обсуждать пройденный материал (in English)</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ItBasicsIntro;