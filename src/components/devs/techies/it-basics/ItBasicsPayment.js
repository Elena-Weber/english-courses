import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const ItBasicsPayment = () => {
  return (
    <div>
      <h2 className="subheading text-center animation">Оплатить курс IT BASICS ("Основы АйТи")</h2>
      <div className="d-flex justify-content-around mb-5 mt-3 payment-div">
        <div className="payment-card">
          <Card className="text-center h-100">
            <Card.Header className="tariff">Тариф "Computer"</Card.Header>
            <Card.Body>
              <Card.Title className="subsubheading">Что входит в курс:</Card.Title>
              <Card.Text>
                <b>11 уроков</b> про <b>компьютер</b>, его компоненты и работу на нём, каждый из которых включает:<br></br><br></br>
                <li>Видеоуроки с объяснениями (на русском языке)</li>
                <li>Аудиозаписи для формирования правильного произношения новых слов (in English)</li>
                <li>Кроссворды и другие головоломки (in English)</li>
                <li>Флэш-карточки для закрепления лексики в приложении Quizlet (in English)</li>
                <div className='mt-3'>
                  <h3><span className='text-danger'>$100</span> <del>$120</del></h3>
                  <h3><span className='text-danger'>₽100</span> <del>₽120</del></h3>
                  <p>Цена со скидкой действительна только до такого-то числа</p>
                </div>
              </Card.Text>
              <Tabs defaultActiveKey="card" id="devs-payment-tab-1" className="my-4" justify>
                <Tab eventKey="card" title="Картой">
                  <a className="button" href="" role="button" target="_blank">Оплата картой</a>
                  <p className="text-danger m-3">Доступ к курсу будет выслан на <u>имейл</u>, указанный при оплате</p>
                </Tab>
                <Tab eventKey="zelle" title="Zelle">
                  <h6 className='email'>ElenaAndEnglish@gmail.com</h6>
                  <p className="text-danger">Данный способ доступен только тем, кто живёт в США. Пожалуйста, укажите свой <u>имэйл</u> в поле 'Memo', иначе я не узнаю, кому и куда высылать доступ к курсу (либо напишите мне имейл или в личку)</p>
                  <a href="https://www.zellepay.com/" target="_blank">Как оплатить через Zelle</a>
                </Tab>
                <Tab eventKey="yoomoney" title="YooMoney (Yandex)">
                  <a className="button" href="https://yoomoney.ru/to/410015981611019" role="button" target="_blank">YooMoney (Yandex)</a>
                  <p className="text-danger mt-4">Если вы платите через YooMoney, пожалуйста, скиньте мне в личку или на почту <span className='email'>ElenaAndEnglish@gmail.com</span> скрин платежа (и ваш имэйл), иначе я не узнаю, кому и куда выслать доступ к курсу</p>
                </Tab>
              </Tabs>
            </Card.Body>
            <Card.Footer className="text-muted mt-2">Для тех, кому интересен только компьютер (и ничего лишнего)</Card.Footer>
          </Card>
        </div>
        <div className="payment-card">
          <Card className="text-center h-100">
            <Card.Header className="tariff">Тариф "Computer Plus"</Card.Header>
            <Card.Body>
              <Card.Title className="subsubheading">Что входит в курс:</Card.Title>
              <Card.Text>
              Всё, что включает тариф "COMPUTER"<br></br>+<br></br><b>3 урока</b> про <b>интернет и email</b><br></br><br></br>Итого: <b>14 уроков</b>, каждый из которых включает:<br></br><br></br>
                <li>Видеоуроки с объяснениями (на русском языке)</li>
                <li>Аудиозаписи для формирования правильного произношения новых слов (in English)</li>
                <li>Кроссворды и другие головоломки (in English)</li>
                <li>Флэш-карточки для закрепления лексики в приложении Quizlet (in English)</li>
                <div className='mt-3'>
                  <h3><span className='text-danger'>$125</span> <del>$150</del></h3>
                  <h3><span className='text-danger'>₽100</span> <del>₽120</del></h3>
                  <p>Цена со скидкой действительна только до такого-то числа</p>
                </div>
              </Card.Text>
              <Tabs defaultActiveKey="card" id="devs-payment-tab-2" className="my-4" justify>
                <Tab eventKey="card" title="Картой">
                  <a className="button" href="" role="button" target="_blank">Оплата картой</a>
                  <p className="text-danger m-3">Доступ к курсу будет выслан на <u>имейл</u>, указанный при оплате</p>
                </Tab>
                <Tab eventKey="zelle" title="Zelle">
                  <h6 className='email'>ElenaAndEnglish@gmail.com</h6>
                  <p className="text-danger">Данный способ доступен только тем, кто живёт в США. Пожалуйста, укажите свой <u>имэйл</u> в поле 'Memo', иначе я не узнаю, кому и куда высылать доступ к курсу (либо напишите мне имейл или в личку)</p>
                  <a href="https://www.zellepay.com/" target="_blank">Как оплатить через Zelle</a>
                </Tab>
                <Tab eventKey="yoomoney" title="YooMoney (Yandex)">
                  <a className="button" href="https://yoomoney.ru/to/410015981611019" role="button" target="_blank">YooMoney (Yandex)</a>
                  <p className="text-danger mt-4">Если вы платите через YooMoney, пожалуйста, скиньте мне в личку или на почту <span className='email'>ElenaAndEnglish@gmail.com</span> скрин платежа (и ваш имэйл), иначе я не узнаю, кому и куда выслать доступ к курсу</p>
                </Tab>
              </Tabs>
            </Card.Body>
            <Card.Footer className="text-muted mt-2">Для тех, кто хочет понимать, как работают компьютер, интернет и email</Card.Footer>
          </Card>
        </div>
        <div className="payment-card">
          <Card className="text-center h-100">
            <Card.Header className="tariff">Тариф "Computer Talk"</Card.Header>
            <Card.Body>
              <Card.Title className="subsubheading">Что входит в курс:</Card.Title>
              <Card.Text>
                Всё, что включает тариф "COMPUTER PLUS"<br></br>+<br></br>еженедельные 60-минутные <b>созвоны в Zoom</b> в маленьких группах (до 4 человек), на которых мы будем обсуждать изученный материал in English<br></br><br></br>Итого: <b>14 уроков</b><br></br>+<br></br><b>7 созвонов</b> (1 раз в неделю по 60 минут)
                <div className='mt-3'>
                  <h3><span className='text-danger'>$250</span> <del>$300</del></h3>
                  <h3><span className='text-danger'>₽100</span> <del>₽120</del></h3>
                  <p>Цена со скидкой действительна только до такого-то числа</p>
                </div>
              </Card.Text>
              <Tabs defaultActiveKey="card" id="devs-payment-tab-2" className="my-4" justify>
                <Tab eventKey="card" title="Картой">
                  <a className="button" href="" role="button" target="_blank">Оплата картой</a>
                  <p className="text-danger m-3">Доступ к курсу будет выслан на <u>имейл</u>, указанный при оплате</p>
                </Tab>
                <Tab eventKey="zelle" title="Zelle">
                  <h6 className='email'>ElenaAndEnglish@gmail.com</h6>
                  <p className="text-danger">Данный способ доступен только тем, кто живёт в США. Пожалуйста, укажите свой <u>имэйл</u> в поле 'Memo', иначе я не узнаю, кому и куда высылать доступ к курсу (либо напишите мне имейл или в личку)</p>
                  <a href="https://www.zellepay.com/" target="_blank">Как оплатить через Zelle</a>
                </Tab>
                <Tab eventKey="yoomoney" title="YooMoney (Yandex)">
                  <a className="button" href="https://yoomoney.ru/to/410015981611019" role="button" target="_blank">YooMoney (Yandex)</a>
                  <p className="text-danger mt-4">Если вы платите через YooMoney, пожалуйста, скиньте мне в личку или на почту <span className='email'>ElenaAndEnglish@gmail.com</span> скрин платежа (и ваш имэйл), иначе я не узнаю, кому и куда выслать доступ к курсу</p>
                </Tab>
              </Tabs>
            </Card.Body>
            <Card.Footer className="text-muted mt-2">Для тех, кто хочет подтянуть говорение на темы: компьютер, интернет и email</Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ItBasicsPayment;