import WorkCareerIntro from "./work-career/WorkCareerIntro";
import WorkCareerImages from "./work-career/WorkCareerImages";
import WorkCareerPayment from "./work-career/WorkCareerPayment";

const WorkCareer = () => {
  return (
    <div className="d-flex flex-column align-items-right">
      <h2 className="heading px-3 text-center">English for Work and Career ↔️ Английский для работы и карьеры в АйТи</h2>
      <h3 className="subheading text-center">Уровень: Pre-Intermediate и выше</h3>
      <h4 className="subsubheading px-3 text-center">
        Курс по расширению словарного запаса на тему работы и карьеры в АйТи
      </h4>
      <div className="container">
        <div className="row">
          <div className="col m-3 p-3">
            <h5>К концу курса вы:</h5>
            <li>РАСШИРИТЕ словарный запас на тему работы и карьеры в АйТи</li>
            <br></br>
            <li><b><u>English for Work and Career</u></b> - если вы ищете работу и хотите освоить лексику, которая пригодится вам в будущей карьере, заранее, берите этот модуль. Тут вы освоите, что говорить на планёрке и как общаться с коллегами</li>
          </div>
          <div className="row justify-content-evenly">
            {/* before LARGE it's 11 columns, after LARGE it's 6 columns out of 12 */}
            <div className="col-11 col-lg-6 m-3 p-3">
              <WorkCareerIntro/>
            </div>
            {/* before LARGE it's 11 columns, after LARGE it's 5 columns out of 12 */}
            <div className="col-11 col-lg-5 m-3 p-3">
              <WorkCareerImages/>
            </div>
          </div>
          <div>
            <WorkCareerPayment/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCareer;