import ItBasicsIntro from "./it-basics/ItBasicsIntro";
// import ItBasicsImages from "./it-basics/ItBasicsImages";
import ItBasicsPayment from "./it-basics/ItBasicsPayment";

const ItBasics = () => {
  return (
    <div className="d-flex flex-column align-items-right">
      <h2 className="heading px-3 text-center">IT Basics ↔️ Основы АйТи</h2>
      <h3 className="subheading text-center">Уровень: Pre-Intermediate и выше</h3>
      <h4 className="subsubheading px-3 text-center">
        Курс по расширению словарного запаса на тему компьютеров и интернета, в котором вы также поймёте, как работает и из чего состоит любой компьютер
      </h4>
      <div className="container">
        <div className="row">
          <div className='text-danger text-center mt-2'>
            <h4>Начало занятий - 29.01.2024</h4>
          </div>
          <div className="col m-3 p-3">
            <h5>К концу курса вы:</h5>
            <li>ПОЙМЁТЕ, как работает компьютер, интернет и email, и из каких основных компонентов они состоят</li>
            <li>РАСШИРИТЕ словарный запас на английском (и на русском!) языке на эту тему</li>
            <li>УЗНАЕТЕ, что происходит внутри вашего ноутбука после того, как вы его включите</li>
            <li>НАУЧИТЕСЬ рассказывать, что вы делаете на компьютере</li>
            <li>Больше НЕ БУДЕТЕ чувствовать себя не в своей тарелке при покупке ноутбука или в разговоре о компах с окружающими</li>
            <br></br>
            <h6>Рекомендую этот модуль начинающим и продолжающим айтишникам и просто всем, кто интересуется компьютерами, вне зависимости от возраста и страны проживания. Объяснения в нём - на русском языке, а все упражнения и практика - in English.</h6>
          </div>
          <div className="row justify-content-evenly">
            {/* before LARGE it's 11 columns, after LARGE it's 6 columns out of 12 */}
            <div className="col-11 col-lg-6 m-3 p-3">
              <ItBasicsIntro/>
            </div>
            {/* before LARGE it's 11 columns, after LARGE it's 5 columns out of 12 */}
            <div className="col-11 col-lg-5 m-3 p-3">
              {/* <ItBasicsImages/> */}
            </div>
          </div>
          <div>
            <ItBasicsPayment/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItBasics;