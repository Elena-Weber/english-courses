import ItBasicsIntro from "./it-basics/ItBasicsIntro";
// import ItBasicsImages from "./it-basics/ItBasicsImages";
import ItBasicsPayment from "./it-basics/ItBasicsPayment";

const ItBasics = () => {
  return (
    <div className="d-flex flex-column align-items-right">
      <h2 className="heading px-3 text-center">IT Basics ↔️ Основы АйТи</h2>
      <h3 className="subheading text-center">Уровень: Pre-Intermediate и выше</h3>
      <h4 className="subsubheading px-3 text-center">
        Курс по расширению словарного запаса на тему компьютеров и интернета
      </h4>
      <div className="container">
        <div className="row">
          <div className="col m-3 p-3">
            <h5>К концу курса вы:</h5>
            <li>РАСШИРИТЕ словарный запас на тему компьютеров и программирования</li>
            <br></br>
            <li><b><u>IT Basics</u></b> - если вы совсем новичок в компьютерах, рекомендую этот модуль. В нём вы узнаете, как называется различное оборудование на английском языке, и научитесь рассказывать, что вы делаете на компьютере</li>
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