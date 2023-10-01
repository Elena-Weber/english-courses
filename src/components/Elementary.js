import ElementaryImages from "./elementary/ElementaryImages";
import ElementaryIntro from "./elementary/ElementaryIntro";
import ElementaryPayment from "./elementary/ElementaryPayment";

const Elementary = () => {
  return (
    <div className="d-flex flex-column align-items-right">
      <h2 className="heading px-3 text-center">English for Newbies ↔️ Английский для новичков</h2>
      <h3 className="subheading text-center">Уровень: A1 (Elementary)</h3>
      <h4 className="subsubheading px-3 text-center">
        Если вы совсем недавно начали изучать английский язык...<br />
        Если в школе вы учили инглиш, учили, но так ничего и не выучили...<br />
        Если вы не понимаете разницу между I eat и I am eating, teacher’s и teachers’, can и may...<br />
        то курс ENGLISH FOR NEWBIES - для вас!
      </h4>
      <div className="container">
        <div className="row">
          <div className="col m-3 p-3">
            <h5>К концу курса вы:</h5>
            <li>УЛУЧШИТЕ произношение и ИЗБАВИТЕСЬ от самых "русских" звуков в своём английском</li>
            <li>ПОВТОРИТЕ всё самое нужное про существительные, прилагательные, местоимения, числительные, артикли и предлоги</li>
            <li>УСВОИТЕ 4 самые важные видо-временные формы глагола и, конечно же, всеми любимый глагол be</li>
            <li>РАЗБЕРЁТЕСЬ с модальными глаголами can, may, must, should</li>
            <li>ИЗУЧИТЕ повелительное наклонение, фразовые глаголы и некоторые устойчивые конструкции</li>
            <li>УЗНАЕТЕ, что говорить в магазине, ресторане и телефонном разговоре</li>
            <li>НАУЧИТЕСЬ представлять себя, уточнять дату и время, описывать города и помещения</li>
            <li>НАПИШЕТЕ несколько рассказов, ПРОСЛУШАЕТЕ множество аудиозаписей и сами начнёте ГОВОРИТЬ (на английском, конечно же)</li>
            <br/><h5>И это - далеко не всё!</h5>
          </div>
          <div className="row justify-content-evenly">
            {/* before LARGE it's 11 columns, after LARGE it's 6 columns out of 12 */}
            <div className="col-11 col-lg-6 m-3 p-3">
              <ElementaryIntro />
            </div>
            {/* before LARGE it's 11 columns, after LARGE it's 5 columns out of 12 */}
            <div className="col-11 col-lg-5 m-3 p-3">
              <ElementaryImages />
            </div>
          </div>
          <div>
            <ElementaryPayment />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Elementary;