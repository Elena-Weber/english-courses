import PreIntermediateImages from "./PreIntermediateImages";
import PreIntermediateIntro from "./PreIntermediateIntro";

const PreIntermediate = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>English for Amateurs</h1>
      <h2>Английский для любителей</h2>
      <h3>Уровень: A2 (Pre-Intermediate)</h3>
      <h4>Данный курс является продолжением курса ENGLISH FOR NEWBIES (уровень - Elementary).</h4>
      <div className="container">
        <div className="row">
          <div className="col m-3 p-3">
            <ul>
              К концу курса вы:
            </ul>
            <li>УЗНАЕТЕ 7 самых востребованных времён глагола, cтрадательный залог, инфинитив, причастие, герундий, условные предложения, косвенная речь</li>
            <li>РАСШИРИТЕ знания по предлогам, артиклям, модальным глаголам и десятку других тем из предыдущего курса</li>
            <li>Будете ОПИСЫВАТЬ людей и фото, ПЕРЕВОДИТЬ рецепты, ПИСАТЬ письма, ЧИТАТЬ рассказы, СМОТРЕТЬ отрывки сериалов, СЛУШАТЬ аудиозаписи и ГОВОРИТЬ на разные темы (на английском, конечно же!)</li>
          </div>
          <div className="row">
            <div className="col-7 m-3 p-3">
              <PreIntermediateIntro />
            </div>
            <div className="col-4 m-3 p-3">
              <PreIntermediateImages/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreIntermediate;