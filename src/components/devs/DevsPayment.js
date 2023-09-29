import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const DevsPayment = () => {
  return (
    <div>
      <h2 className="subheading text-center animation">Оплатить курс English for Techies (3-in-1)</h2>
      <div className="d-flex justify-content-around mb-5 mt-3 payment-div">
        <div className="payment-card">
          <Card className="text-center h-100">
            <Card.Header className="tariff">Тариф "All by myself"</Card.Header>
            <Card.Body>
              <Card.Title className="subsubheading">Что входит в курс:</Card.Title>
              <Card.Text>
                3 модуля = 12 уроков, каждый из которых включает:
                <li>Under construction</li>
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
                  <a className="button" href="" role="button" target="_blank">YooMoney (Yandex)</a>
                  <p className="text-danger mt-4">Если вы платите через YooMoney, пожалуйста, скиньте мне в личку или на почту <span className='email'>ElenaAndEnglish@gmail.com</span> скрин платежа (и ваш имэйл), иначе я не узнаю, кому и куда выслать доступ к курсу</p>
                </Tab>
              </Tabs>
            </Card.Body>
            <Card.Footer className="text-muted mt-2">Для тех, кто любит учиться самостоятельно</Card.Footer>
          </Card>
        </div>
        <div className="payment-card">
        <Card className="text-center h-100">
            <Card.Header className="tariff">Тариф "Check me out"</Card.Header>
            <Card.Body>
              <Card.Title className="subsubheading">Что входит в курс:</Card.Title>
              <Card.Text>
                3 модуля = 12 уроков, каждый из которых включает:
                <li>Under construction</li>
                +
                <li className='accent'>Under construction too</li>
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
                  <a className="button" href="" role="button" target="_blank">YooMoney (Yandex)</a>
                  <p className="text-danger mt-4">Если вы платите через YooMoney, пожалуйста, скиньте мне в личку или на почту <span className='email'>ElenaAndEnglish@gmail.com</span> скрин платежа (и ваш имэйл), иначе я не узнаю, кому и куда выслать доступ к курсу</p>
                </Tab>
              </Tabs>
            </Card.Body>
            <Card.Footer className="text-muted mt-2">Для тех, кто хочет учиться под контролем преподавателя</Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  )
};

export default DevsPayment;