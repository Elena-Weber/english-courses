import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const PreIntermediatePayment = () => {
  return (
    <div className="d-flex justify-content-around mb-5 mt-3">
      <div className="payment-card">
        <Card className="text-center h-100">
          <Card.Header>Тариф All by myself</Card.Header>
          <Card.Body>
            <Card.Title>Что входит в курс:</Card.Title>
            <Card.Text>
              Много полезного!
            </Card.Text>
            <Tabs defaultActiveKey="card" id="pre-intermediate-payment-tab-1" className="my-4" justify>
              <Tab eventKey="card" title="Картой">
                <a className="button" href="https://buy.stripe.com/dR6bJV7bC9mO44U5kk" role="button" target="_blank">Ссылка на оплату</a>
              </Tab>
              <Tab eventKey="zelle" title="Zelle">
                <h6>ElenaAndEnglish@gmail.com</h6>
                <p className="text-danger">Данный способ доступен только тем, кто живёт в США. Пожалуйста, укажите свой <u>имэйл</u> в поле 'Memo'</p>
                <a href="https://www.zellepay.com/" target="_blank">Как оплатить через Zelle</a>
              </Tab>
              <Tab eventKey="yoomoney" title="YooMoney (Yandex)">
                <a className="button" href="https://yoomoney.ru/to/410015981611019" role="button" target="_blank">YooMoney (Yandex)</a>
                <p className="text-danger mt-4">Если вы платите через YooMoney, пожалуйста, скиньте мне в личку или по имэйл ElenaAndEnglish@gmail.com скрин платежа. Дело в том, что через YooMoney я не узнаю, кто и за что оплатил, и не пойму, от кого пришёл платёж  :(</p>
              </Tab>
            </Tabs>
          </Card.Body>
          <Card.Footer className="text-muted mt-2">Для тех, кто любит учиться самостоятельно</Card.Footer>
        </Card>
      </div>
      <div className="payment-card">
      <Card className="text-center h-100">
          <Card.Header>Тариф Check me out</Card.Header>
          <Card.Body>
            <Card.Title>Что входит в курс:</Card.Title>
            <Card.Text>
              Много полезного!
            </Card.Text>
            <Tabs defaultActiveKey="card" id="pre-intermediate-payment-tab-2" className="my-4" justify>
              <Tab eventKey="card" title="Картой">
                <a className="button" href="https://buy.stripe.com/dR6bJV7bC9mO44U5kk" role="button" target="_blank">Ссылка на оплату</a>
              </Tab>
              <Tab eventKey="zelle" title="Zelle">
                <h6>ElenaAndEnglish@gmail.com</h6>
                <p className="text-danger">Данный способ доступен только тем, кто живёт в США. Пожалуйста, укажите свой <u>имэйл</u> в поле 'Memo'</p>
                <a href="https://www.zellepay.com/" target="_blank">Как оплатить через Zelle</a>
              </Tab>
              <Tab eventKey="yoomoney" title="YooMoney (Yandex)">
                <a className="button" href="https://yoomoney.ru/to/410015981611019" role="button" target="_blank">YooMoney (Yandex)</a>
                <p className="text-danger mt-4">Если вы платите через YooMoney, пожалуйста, скиньте мне в личку или по имэйл ElenaAndEnglish@gmail.com скрин платежа. Дело в том, что через YooMoney я не узнаю, кто и за что оплатил, и не пойму, от кого пришёл платёж  :(</p>
              </Tab>
            </Tabs>
          </Card.Body>
          <Card.Footer className="text-muted mt-2">Для тех, кто любит учиться под контролем преподавателя</Card.Footer>
        </Card>
      </div>
    </div>
  )
};

export default PreIntermediatePayment;