// import ProgrammersIntro from "./programmers/ProgrammersIntro";
// import ProgrammersImages from "./programmers/ProgrammersImages";
// import ProgrammersPayment from "./programmers/ProgrammersPayment";

const Programmers = () => {
  return (
    <div className="d-flex flex-column align-items-right">
      <h2 className="heading px-3 text-center">English for Programming ↔️ Английский для программирования</h2>
      <h3 className="subheading text-center">Уровень: Pre-Intermediate и выше</h3>
      <h4 className="subsubheading px-3 text-center">
        Курс по расширению словарного запаса на тему программирования
      </h4>
      <div className="container">
        <div className="row">
          <h4 className="px-3 text-center text-danger">
            Регистрация на курс, в данный момент, недоступна
          </h4>
          <div className="col m-3 p-3">
            <h5>К концу курса вы:</h5>
            <li>РАСШИРИТЕ словарный запас на тему программирования</li>
            <li>УСВОИТЕ названия различных типов данных и прочего (in English)</li>
            <li>НАУЧИТЕСЬ рассказывать, что происходит в вашем коде</li>
            <br></br>
            <h6>Рекомендую этот модуль тем, кто учился программировать на русском или любом другом языке, кроме английского</h6>
          </div>
          <div className="row justify-content-evenly">
            {/* before LARGE it's 11 columns, after LARGE it's 6 columns out of 12 */}
            <div className="col-11 col-lg-6 m-3 p-3">
              {/* <ProgrammersIntro/> */}
            </div>
            {/* before LARGE it's 11 columns, after LARGE it's 5 columns out of 12 */}
            <div className="col-11 col-lg-5 m-3 p-3">
              {/* <ProgrammersImages/> */}
            </div>
          </div>
          <div>
            {/* <ProgrammersPayment/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programmers;