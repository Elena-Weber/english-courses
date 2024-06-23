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
            <ListGroup.Item as="li">Начинающим <span className='fw-bold'>айтишникам</span> и тем, кто ещё только думает о переходе в АйТи (а также - родителям будущих айтишников)</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто уже владеет английским языком (на базовом уровне, плюс-минус) и хотел бы <span className='fw-bold'>расширить словарный запас</span> на тему компьютеров, интернета и email</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто хочет понимать, <span className='fw-bold'>из чего состоит и как работает компьютер</span>, что в нём происходит после нажатия на кнопку включения, а также - <span className='fw-bold'>как функционируют интернет и email</span></ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто хочет научиться <span className='fw-bold'>выбирать компьютерную технику</span> под свои цели и задачи</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто любит информацию, <span className='fw-bold'>логично разложенную по полочкам и без воды</span>, поданную так, что поймёт даже ребёнок</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5>Кому курс не подойдёт?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li">Тем, у кого English на уровне <span className='fw-bold'>ниже Pre-Intermediate</span> (не знаете свой уровень? напишите мне в личку)</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кому нужно подтянуть <span className='fw-bold'>все аспекты языка</span> (Внимание: акцент в курсе будет только на расширении словарного запаса)</ListGroup.Item>
            <ListGroup.Item as="li">Тем, кто <span className='fw-bold'>уже владеет лексикой</span> на компьютерную тему</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5>Какие темы изучаются?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup as="ul" variant="flush" className="text-start">
            <ListGroup.Item as="li"><span className='fw-bold'>Компоненты компьютера</span> (монитор, материнская плата, процессор, чипсет, ОЗУ, ПЗУ, хранилище, видео и звуковая карты, модем и т.д.) и за что каждый из них отвечает</ListGroup.Item>
            <ListGroup.Item as="li"><span className='fw-bold'>Прочее оборудование:</span> клавиатура, мышка, микрофон, колонки, наушники, камера, модем, раутер, принтер/сканер/ксерокс, портативные хранилища и т.п.</ListGroup.Item>
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
            <ListGroup.Item as="li">Курс длится <span className='fw-bold'>6 или 8 недель</span> (зависит от тарифа)</ListGroup.Item>
            <ListGroup.Item as="li">Учёба проходит на сайте <span className='fw-bold'>getcourse.ru</span> (нестрашно, если у вас там пока нет аккаунта)</ListGroup.Item>
            <ListGroup.Item as="li"><span className='fw-bold'>Дважды в неделю</span> (по понедельникам и четвергам) вы будете получать новый урок, на выполнение которого у вас будет 3-4 дня</ListGroup.Item>
            <ListGroup.Item as="li">На выполнение каждого такого урока у вас будет уходить <span className='fw-bold'>3-4 часа</span> (по часу в день)</ListGroup.Item>
            <ListGroup.Item as="li">Если данный график вам не подходит, есть возможность заниматься <span className='fw-bold'>в своём темпе</span> и растянуть учёбу</ListGroup.Item>
            <ListGroup.Item as="li">Вы также будете добавлены в <span className='fw-bold'>чат в Телеграм</span>, где можно будет задавать вопросы и общаться со мной и единомышленниками</ListGroup.Item>
            <ListGroup.Item as="li">Если выбранный вами тариф включает <span className='fw-bold'>еженедельные созвоны</span>, раз в неделю (по воскресеньям) мы будем с вами встречаться в Zoom и обсуждать пройденный материал (in English)</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ItBasicsIntro;