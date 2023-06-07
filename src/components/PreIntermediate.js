import PreIntermediateImages from "./PreIntermediateImages";

const PreIntermediate = () => {
    return (
      <div className="d-flex flex-column align-items-center">
        <h1>English for Amateurs</h1>
        <h2>Английский для любителей</h2>
        <h3>Уровень: A2 (Pre-Intermediate)</h3>
        <h4>Данный курс является продолжением курса ENGLISH FOR NEWBIES (уровень - Elementary).</h4>
        <ul>
          К концу курса вы:
        </ul>
        <li>УЗНАЕТЕ 7 самых востребованных времён глагола, cтрадательный залог, инфинитив, причастие, герундий, условные предложения, косвенная речь</li>
        <li>РАСШИРИТЕ знания по предлогам, артиклям, модальным глаголам и десятку других тем из предыдущего курса</li>
        <li>Будете ОПИСЫВАТЬ людей и фото, ПЕРЕВОДИТЬ рецепты, ПИСАТЬ письма, ЧИТАТЬ рассказы, СМОТРЕТЬ отрывки сериалов, СЛУШАТЬ аудиозаписи и ГОВОРИТЬ на разные темы (на английском, конечно же!)</li>
        <PreIntermediateImages/>
      </div>
    )
}

export default PreIntermediate;