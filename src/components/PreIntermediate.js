import PreIntermediateImages from "./pre-intermediate/PreIntermediateImages";
import PreIntermediateIntro from "./pre-intermediate/PreIntermediateIntro";
// import PreIntermediatePayment from "./pre-intermediate/PreIntermediatePayment";

const PreIntermediate = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="heading px-3 text-center">English for Amateurs ↔️ Английский для любителей</h2>
      <h3 className="subheading text-center">Уровень: A2 (Pre-Intermediate)</h3>
      <h4 className="subsubheading px-3 text-center">Данный курс является продолжением курса ENGLISH FOR NEWBIES (уровень - Elementary)</h4>
      <div className="container">
        <div className="row">
          <div className="col m-3 p-3">
            <h5>К концу курса вы:</h5>
            <li>УЛУЧШИТЕ произношение и ИЗБАВИТЕСЬ от самых "русских" звуков в своём английском</li>
            <li>ИЗУЧИТЕ 8 самых востребованных времён глагола, cтрадательный залог, инфинитив, причастие, герундий, условные предложения и косвенную речь</li>
            <li>РАСШИРИТЕ знания по существительным, прилагательным, наречиям, числительным, местоимениям, модальным глаголам, артиклям и предлогам</li>
            <li>УЗНАЕТЕ десятки фразовых глаголов и некоторые устойчивые конструкции</li>
            <li>РАЗБЕРЁТЕСЬ, что говорить в магазине, отеле, аэропорту, ресторане и у врача</li>
            <li>УСВОИТЕ разницу между формальной и неформальной речью и сленгом</li>
            <li>Будете ОПИСЫВАТЬ людей и фото, ПЕРЕВОДИТЬ рецепты, ПИСАТЬ письма, ЧИТАТЬ рассказы, СМОТРЕТЬ отрывки сериалов, СЛУШАТЬ аудиозаписи и ГОВОРИТЬ на разные темы (на английском, конечно же!)</li>
          </div>
          <div className="row justify-content-evenly">
            {/* before LARGE it's 11 columns, after LARGE it's 6 columns out of 12 */}
            <div className="col-11 col-lg-6 m-3 p-3">
              <PreIntermediateIntro />
            </div>
            {/* before LARGE it's 11 columns, after LARGE it's 5 columns out of 12 */}
            <div className="col-11 col-lg-5 m-3 p-3">
              <PreIntermediateImages/>
            </div>
          </div>
          <div>
            {/* <PreIntermediatePayment /> */}
          </div>
        </div>
      </div>
      <h4 className="px-3 text-center text-danger">
        Регистрация на данный курс, в данный момент, недоступна
      </h4>
    </div>
  )
}

export default PreIntermediate;