// import DevsImages from "./devs/DevsImages";
import DevsIntro from "./devs/DevsIntro";
import DevsPayment from "./devs/DevsPayment";

const Devs = () => {
  return (
    <div className="d-flex flex-column align-items-right">
      <h2 className="heading px-3 text-center">English for Devs ↔️ Английский для разработчиков</h2>
      <h3 className="subheading text-center">Уровень: средний и выше</h3>
      <h4 className="subsubheading px-3 text-center">
        Курс по расширению словарного запаса на тему компьютеров и программирования
      </h4>
      <div className="container">
        <div className="row">
          <div className="col m-3 p-3">
            <h5>К концу курса вы:</h5>
            <li>РАСШИРИТЕ словарный запас на тему компьютеров и программирования</li>
          </div>
          <div className="row justify-content-evenly">
            {/* before LARGE it's 9 columns, starting with LARGE it's 7 columns */}
            <div className="col-9 col-lg-7 m-3 p-3">
              <DevsIntro />
            </div>
            {/* before LARGE it's 9 columns, starting with LARGE it's 4 columns */}
            <div className="col-9 col-lg-4 m-3 p-3">
              {/* <DevsImages /> */}
            </div>
          </div>
          <div>
            <DevsPayment />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Devs;