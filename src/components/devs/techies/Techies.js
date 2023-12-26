// import DevsImages from "./techies/DevsImages";
// import DevsIntro from "./techies/DevsIntro";
// import DevsPayment from "./techies/DevsPayment";

const Techies = () => {
  return (
    <div className="d-flex flex-column align-items-right">
      <h2 className="heading px-3 text-center">English for Techies ↔️ Английский для технарей</h2>
      <h3 className="subheading text-center">Уровень: Pre-Intermediate и выше</h3>
      <h4 className="subsubheading px-3 text-center">
        Курс по расширению словарного запаса на тему компьютеров и программирования
      </h4>
      <div className="container">
        <div className="row">
          <div className="col m-3 p-3">
            <h5>В данном курсе <u>3 модуля</u> - их можно приобрести по отдельности или все сразу, одним пакетом (на этой странице)</h5><br></br>
            <li><b><u>IT Basics</u></b> - подойдёт айтишникам и не-айтишникам, вне зависимости от возраста и страны проживания. В нём вы узнаете, как называется различное компьютерное оборудование на английском языке, поймёте, как работает ноутбук, интернет и имэйл, а также научитесь рассказывать, что вы делаете за компом</li>
            <li><b><u>English for Programming</u></b> - если вы учились кодить на русском или любом другом языке, кроме английского, то этот курс - для вас! Здесь вы изучите всё самое актуальное: от названий различных типов данных до объяснения того, что происходит в вашем коде, in English</li>
            <li><b><u>English for Work and Career</u></b> - пригодится всем, кто ищет (или планирует искать) работу в англоязычном АйТи и хочет освоить лексику, которая пригодится в будущей карьере. Тут вы освоите, что говорить на планёрке, как отчитываться о проделанной работе, просить о помощи и общаться с коллегами</li>
          </div>
          <div className="row justify-content-evenly">
            {/* before LARGE it's 11 columns, after LARGE it's 6 columns out of 12 */}
            <div className="col-11 col-lg-6 m-3 p-3">
              {/* <DevsIntro /> */}
            </div>
            {/* before LARGE it's 11 columns, after LARGE it's 5 columns out of 12 */}
            <div className="col-11 col-lg-5 m-3 p-3">
              {/* <DevsImages /> */}
            </div>
          </div>
          <div>
            {/* <DevsPayment /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Techies;