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
            <Card.Header className="tariff">Тариф "Computer Basic"</Card.Header>
            <Card.Body>
              <Card.Title className="subsubheading">Что входит в курс:</Card.Title>
              <Card.Text>
                <b>11 модулей</b> про <b>компьютер</b>, его компоненты и работу на нём, каждый из которых включает:<br></br><br></br>
                <li>Видео уроки с объяснениями (на русском языке)</li>
                <li>Презентации в PDF (на английском и русском)</li>
                <li>Аудиозаписи для развития навыка аудирования и формирования правильного произношения новых слов</li>
                <li>Кроссворды и другие головоломки (in English)</li>
                <li>Флэш-карточки для закрепления лексики в приложении Quizlet</li>
                <li>Файлы с флэш-карточками для распечатывания (для тех, кто любит всё на бумаге - это вместо использования Quizlet)</li>
                <li>Тесты на проверку пройденного материала</li>
                <li>Доступ к чату со мной и одногруппниками в Telegram</li>
                <div className='mt-3'>
                  <h3><span className='text-danger'>$120</span></h3>
                  <h3><span className='text-danger'>₽10.560</span></h3>
                </div>
              </Card.Text>
              <Tabs defaultActiveKey="card" id="devs-payment-tab-1" className="my-4" justify>
                <Tab eventKey="card" title="Картой">
                  <a className="button" href="https://buy.stripe.com/eVa15h7bC6aCbxmbIX" role="button" target="_blank" rel="noopener noreferrer">Оплата картой</a>
                  <h6 className="text-danger m-3">Доступ к курсу будет выслан на <u>имейл</u>, указанный при оплате</h6>
                </Tab>
                <Tab eventKey="zelle" title="Zelle">
                  <h6 className='email'>ElenaAndEnglish@gmail.com</h6>
                  <h6 className="text-danger">Данный способ доступен только тем, кто живёт в США. Пожалуйста, укажите свой <u>имэйл</u> в поле 'Memo', иначе я не узнаю, кому и куда высылать доступ к курсу (либо напишите мне имейл или в личку)</h6>
                  <a href="https://www.zellepay.com/" target="_blank" rel="noopener noreferrer">Как оплатить через Zelle</a>
                </Tab>
                <Tab eventKey="other" title="Другое">
                  <h6 className="text-danger mt-4">Для уточнения других способов оплаты, пожалуйста, напишите мне в личку или на почту <span className='email'>ElenaAndEnglish@gmail.com</span></h6>
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
              Всё, что включает тариф "COMPUTER BASIC"<br></br>+<br></br><b>3 урока</b> про <b>интернет и email</b><br></br><br></br>Итого: <b>14 модулей</b>, каждый из которых включает:<br></br><br></br>
                <li>Видеоуроки с объяснениями (на русском языке)</li>
                <li>Презентации в PDF (на английском и русском)</li>
                <li>Аудиозаписи для развития навыка аудирования и формирования правильного произношения новых слов</li>
                <li>Кроссворды и другие головоломки (in English)</li>
                <li>Флэш-карточки для закрепления лексики в приложении Quizlet</li>
                <li>Файлы с флэш-карточками для распечатывания (для тех, кто любит всё на бумаге - это вместо использования Quizlet)</li>
                <li>Тесты на проверку пройденного материала</li>
                <li>Доступ к чату со мной и одногруппниками в Telegram</li>
                <div className='mt-3'>
                  <h3><span className='text-danger'>$150</span></h3>
                  <h3><span className='text-danger'>₽13.200</span></h3>
                </div>
              </Card.Text>
              <Tabs defaultActiveKey="card" id="devs-payment-tab-2" className="my-4" justify>
                <Tab eventKey="card" title="Картой">
                  <a className="button" href="https://buy.stripe.com/3cs8xJgMc1UmeJycN2" role="button" target="_blank" rel="noopener noreferrer">Оплата картой</a>
                  <h6 className="text-danger m-3">Доступ к курсу будет выслан на <u>имейл</u>, указанный при оплате</h6>
                </Tab>
                <Tab eventKey="zelle" title="Zelle">
                  <h6 className='email'>ElenaAndEnglish@gmail.com</h6>
                  <h6 className="text-danger">Данный способ доступен только тем, кто живёт в США. Пожалуйста, укажите свой <u>имэйл</u> в поле 'Memo', иначе я не узнаю, кому и куда высылать доступ к курсу (либо напишите мне имейл или в личку)</h6>
                  <a href="https://www.zellepay.com/" target="_blank" rel="noopener noreferrer">Как оплатить через Zelle</a>
                </Tab>
                <Tab eventKey="other" title="Другое">
                <h6 className="text-danger mt-4">Для уточнения других способов оплаты, пожалуйста, напишите мне в личку или на почту <span className='email'>ElenaAndEnglish@gmail.com</span></h6>
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
                Всё, что включает тариф "COMPUTER PLUS"<br></br>+<br></br>еженедельные 60-минутные <b>созвоны в Zoom по воскресеньям</b> в мини-группах (по 2 человека), на которых мы будем обсуждать изученный материал in English<br></br><br></br>Итого: <b>14 модулей</b><br></br>+<br></br><b>8 созвонов</b> (1 раз в неделю по 60 минут)
                <div className='mt-3'>
                  <h3><span className='text-danger'>$300</span></h3>
                  <h3><span className='text-danger'>₽26.400</span></h3>
                  <span className='email'>* стоимость одного созвона - всего $18.75 (₽1.650)</span>
                </div>
                <hr></hr>
                <div>
                  <h6><b>Созвоны будут проходить:</b></h6>
                  <h6>воскресенье, 11 утра по НЙ<br></br>(7 часов вечера по Москве)<br></br>или<br></br>воскресенье, 6 вечера по НЙ<br></br>(3 часа утра по Москве)</h6>
                  <hr></hr>
                  <h6 className="text-danger">Если любое время вам подходит, напишите мне в личку или на имейл <span className='email'>ElenaAndEnglish@gmail.com</span>, чтобы уточнить наличие мест в этой группе и получить ссылку на оплату</h6>
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted mt-2">Для тех, кто хочет подтянуть говорение по темам: компьютер, интернет, email</Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ItBasicsPayment;