import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const AlphaPayment = () => {
  return (
    <>
      <h2 className="subheading text-center animation">Оплатить Alpha Club</h2>
      <div className="d-flex justify-content-around mb-5 mt-3 payment-div">
        <div className="payment-card">
          <Card className="text-center h-100">
            <Card.Header className="tariff">1 любой месяц</Card.Header>
            <Card.Body>
              <Card.Title className="subsubheading">Что вас ждёт в клубе:</Card.Title>
              <Card.Text>
                <span className='text-danger fw-bold'>26 мини-уроков</span> (по буквам алфавита A-Z) в Telegram, каждый из которых включает:
                <li>ВИДЕО объяснения</li>
                <li>Актуальные ПРИМЕРЫ</li>
                <li>ЗАДАНИЯ на произношение, перевод и письмо</li>
                <li>ТЕСТЫ на проверку понимания</li>
                <li>ИГРЫ для повторения изученных слов</li>
                <li>ОБЩЕНИЕ со мной и одногруппниками</li>
                <li>В КОНЦЕ МЕСЯЦА: кроссворды, поиск слов и другие задания по пройденным за месяц словам</li>
                <li>ПРОВЕРКА мной всех ваших аудио</li>
                <li>ДОСТУП к клубам - навсегда</li>
                <span className='accent'>--------------------</span>
                <span className='d-flex flex-column fw-bold fs-4'>
                  <span className='navi-tabs'>Стоимость:</span>
                  <span className='text-danger'>$20</span>
                  <span className='text-danger'>₽1.800</span>
                </span>
              </Card.Text>
              <Tabs defaultActiveKey="card" id="elementary-payment-tab-1" className="my-4" justify>
                <Tab eventKey="card" title="Картой">
                  <a className="button" href="https://buy.stripe.com/28og0beE47eGgRG28u" role="button" target="_blank" rel="noopener noreferrer">Оплата картой</a>
                  <h6 className="dark-text m-3">Доступ к Алфа-клубу в Телеграм будет выслан на <u>имейл</u>, указанный при оплате</h6>
                </Tab>
                <Tab eventKey="zelle" title="Zelle">
                  <h6 className='text-danger'>ElenaAndEnglish@gmail.com</h6>
                  <h6 className="dark-text">Данный способ доступен только тем, кто живёт в США. Пожалуйста, укажите свой <u>имэйл</u> в поле 'Memo', иначе я не узнаю, как с вами связаться (либо напишите мне на <span className='text-danger'>ElenaAndEnglish@gmail.com</span> или в личку)</h6>
                  <a href="https://www.zellepay.com/" target="_blank" rel="noopener noreferrer">Как оплатить через Zelle</a>
                </Tab>
                <Tab eventKey="other" title="Другое">
                  <h6 className="dark-text mt-4">Ни один из этих способов вам не подходит? Не беда! Напишите мне в личку или на почту <span className='text-danger'>ElenaAndEnglish@gmail.com</span>, и мы вместе найдём подходящий вам вариант</h6>
                </Tab>
              </Tabs>
            </Card.Body>
            <Card.Footer className="text-muted mt-2">Для тех, кто не уверен, но хочет попробовать</Card.Footer>
          </Card>
        </div>
        <div className="payment-card">
          <Card className="text-center h-100">
            <Card.Header className="tariff">3 любых месяца</Card.Header>
            <Card.Body>
              <Card.Title className="subsubheading">Что вас ждёт в клубе:</Card.Title>
              <Card.Text>
                Всё то же самое, что в 1-ом любом месяце, но помноженное на 3 и <span className='text-danger fw-bold'>со скидкой $10</span>
                <br></br><br></br>
                Вы сами выбираете, какие темы вам нужны<br></br><br></br>
                <span className='accent'>Клубы на выбор:</span>
                <li>природа и окружение</li>
                <li>медицина и здоровье</li>
                <li>товары и шоппинг</li>
                <li>продукты и питание</li>
                <li>путешествия и мир</li>
                <li>сленг и идиомы</li>
                <span className='accent'>--------------------</span>
                  <span className='d-flex flex-column fw-bold fs-4'>
                    <span className='navi-tabs'>Стоимость:</span>
                    <span className='text-danger'><span className='text-decoration-line-through dark-text'>$60</span> $50</span>
                    <span className='text-danger'><span className='text-decoration-line-through dark-text'>₽5.400</span> ₽4.500</span>
                  </span>
              </Card.Text>
              <Tabs defaultActiveKey="card" id="elementary-payment-tab-2" className="my-4" justify>
                <Tab eventKey="card" title="Картой">
                  <a className="button" href="https://buy.stripe.com/fZe7tF7bCcz00SI4gD" role="button" target="_blank" rel="noopener noreferrer">Оплата картой</a>
                  <h6 className="dark-text m-3">Доступ к Алфа-клубу в Телеграм будет выслан на <u>имейл</u>, указанный при оплате</h6>
                </Tab>
                <Tab eventKey="zelle" title="Zelle">
                  <h6 className='text-danger'>ElenaAndEnglish@gmail.com</h6>
                  <h6 className="dark-text">Данный способ доступен только тем, кто живёт в США. Пожалуйста, укажите свой <u>имэйл</u> в поле 'Memo', иначе я не узнаю, как с вами связаться (либо напишите мне на <span className='text-danger'>ElenaAndEnglish@gmail.com</span> или в личку)</h6>
                  <a href="https://www.zellepay.com/" target="_blank" rel="noopener noreferrer">Как оплатить через Zelle</a>
                </Tab>
                <Tab eventKey="other" title="Другое">
                  <h6 className="dark-text mt-4">Ни один из этих способов вам не подходит? Не беда! Напишите мне в личку или на почту <span className='text-danger'>ElenaAndEnglish@gmail.com</span>, и мы вместе найдём подходящий вам вариант</h6>
                </Tab>
              </Tabs>
            </Card.Body>
            <Card.Footer className="text-muted mt-2">Для тех, кто хочет выбрать самое актуальное</Card.Footer>
          </Card>
        </div>
        <div className="payment-card">
          <Card className="text-center h-100">
            <Card.Header className="tariff">все 6 месяцев</Card.Header>
            <Card.Body>
              <Card.Title className="subsubheading">Что вас ждёт в клубе:</Card.Title>
              <Card.Text>
                Всё то же самое, что в 1-ом любом месяце, но помноженное на 6 и <span className='text-danger fw-bold'>со скидкой $20</span>
                <br></br>+
                <li className='mb-3'>Финальные задания за все 6 клубов</li>
                <span className='accent'>Темы всех клубов:</span>
                <li>природа и окружение</li>
                <li>медицина и здоровье</li>
                <li>товары и шоппинг</li>
                <li>продукты и питание</li>
                <li>путешествия и мир</li>
                <li>сленг и идиомы</li>
                <span className='accent'>--------------------</span>
                <span className='d-flex flex-column fw-bold fs-4'>
                  <span className='navi-tabs'>Стоимость:</span>
                  <span className='text-danger'><span className='text-decoration-line-through dark-text'>$120</span> $100</span>
                  <span className='text-danger'><span className='text-decoration-line-through dark-text'>₽10.800</span> ₽9.000</span>
                </span>
              </Card.Text>
              <Tabs defaultActiveKey="card" id="elementary-payment-tab-2" className="my-4" justify>
                <Tab eventKey="card" title="Картой">
                  <a className="button" href="https://buy.stripe.com/28odS3eE4fLc44U14p" role="button" target="_blank" rel="noopener noreferrer">Оплата картой</a>
                  <h6 className="dark-text m-3">Доступ к Алфа-клубу в Телеграм будет выслан на <u>имейл</u>, указанный при оплате</h6>
                </Tab>
                <Tab eventKey="zelle" title="Zelle">
                  <h6 className='text-danger'>ElenaAndEnglish@gmail.com</h6>
                  <h6 className="dark-text">Данный способ доступен только тем, кто живёт в США. Пожалуйста, укажите свой <u>имэйл</u> в поле 'Memo', иначе я не узнаю, как с вами связаться (либо напишите мне на <span className='text-danger'>ElenaAndEnglish@gmail.com</span> или в личку)</h6>
                  <a href="https://www.zellepay.com/" target="_blank" rel="noopener noreferrer">Как оплатить через Zelle</a>
                </Tab>
                <Tab eventKey="other" title="Другое">
                  <h6 className="dark-text mt-4">Ни один из этих способов вам не подходит? Не беда! Напишите мне в личку или на почту <span className='text-danger'>ElenaAndEnglish@gmail.com</span>, и мы вместе найдём подходящий вам вариант</h6>
                </Tab>
              </Tabs>
            </Card.Body>
            <Card.Footer className="text-muted mt-2">Для тех, кто со мной всерьёз и надолго</Card.Footer>
          </Card>
        </div>
      </div>
    </>
  )
};

export default AlphaPayment;