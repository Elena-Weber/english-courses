// import DevsImages from "./devs/DevsImages";
import DevsIntro from "./devs/DevsIntro";
import DevsPayment from "./devs/DevsPayment";

const Devs = () => {
  return (
    <div className="d-flex flex-column align-items-right">
      <h2 className="heading px-3 text-center">English for Techies ↔️ Английский для технарей</h2>
      <h3 className="subheading text-center">Уровень: средний и выше</h3>
      <h4 className="subsubheading px-3 text-center">
        Курс по расширению словарного запаса на тему компьютеров и программирования
      </h4>
      <div className="container">
        <div className="row">
          <div className="col m-3 p-3">
            <h5>К концу курса вы:</h5>
            <li>РАСШИРИТЕ словарный запас на тему компьютеров и программирования</li>
            <br></br>
            <h5>В данном курсе <u>3 модуля</u> - их можно приобрести по отдельности или все сразу, одним пакетом:</h5>
            <li><b><u>IT Basics</u></b> - если вы совсем новичок в компьютерах, рекомендую этот модуль. В нём вы узнаете, как называется различное оборудование на английском языке, и научитесь рассказывать, что вы делаете на компьютере</li>
            <li><b><u>Programming</u></b> - если вы учились кодить на русском или любом другом языке, кроме английского, то этот курс - для вас! Здесь вы изучите всё самое актуальное: от названий различных типов данных до объяснения того, что происходит в вашем коде, in English</li>
            <li><b><u>Work and Career</u></b> - если вы ищете работу и хотите освоить лексику, которая пригодится вам в будущей карьере, заранее, берите этот модуль. Тут вы освоите, что говорить на планёрке и как общаться с коллегами</li>
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