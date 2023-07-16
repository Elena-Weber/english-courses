import ElementaryImages from "./elementary/ElementaryImages";
import ElementaryIntro from "./elementary/ElementaryIntro";
import ElementaryPayment from "./elementary/ElementaryPayment";

const Elementary = () => {
  return (
    <div className="d-flex flex-column align-items-right">
      <h2 className="heading text-center">English for Newbies ↔️ Английский для новичков</h2>
      <h3 className="subheading text-center">Уровень: A1 (Elementary)</h3>
      <h4 className="subsubheading text-center">
        Если вы совсем недавно начали изучать английский язык...<br />
        Если в школе вы учили инглиш, учили, но так ничего и не выучили...<br />
        Если вы не понимаете разницу между I eat и I am eating, teacher’s и teachers’, can и may...<br />
        то курс ENGLISH FOR NEWBIES - для вас!
      </h4>
      <div className="container">
        <div className="row">
          <div className="col m-3 p-3">
            <ul>
              К концу курса вы:
            </ul>
            <li>Повторите ВСЁ САМОЕ НУЖНОЕ про существительные, прилагательные, местоимения, числительные, артикли и предлоги</li>
            <li>Усвоите 4 самые важные видо-временные ФОРМЫ ГЛАГОЛА и, конечно же, всеми любимый глагол be</li>
            <li>Разберётесь с МОДАЛЬНЫМИ ГЛАГОЛАМИ can, may, must, should</li>
            <li>Изучите ПОВЕЛИТЕЛЬНОЕ НАКЛОНЕНИЕ, ФРАЗОВЫЕ глаголы и некоторые устойчивые КОНСТРУКЦИИ</li>
            <li>УЗНАЕТЕ, что говорить в магазине, ресторане и телефонном разговоре</li>
            <li>НАПИШЕТЕ несколько рассказов, ПРОСЛУШАЕТЕ множество аудиозаписей и САМИ НАЧНЁТЕ ГОВОРИТЬ (на английском, конечно же)</li>
            <li>И это - далеко не всё!</li>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-7 m-3 p-3">
              <ElementaryIntro />
            </div>
            <div className="col-4 m-3 p-3">
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