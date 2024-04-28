// import AlphaImages from "./alpha/AlphaImages";
import AlphaIntro from "./alpha/AlphaIntro";
import AlphaPayment from "./alpha/AlphaPayment";

const Alpha = () => {
  return (
      <div className="d-flex flex-column align-items-right">
        <h2 className="heading px-3 text-center">Alpha Club ↔️ Алфавитный клуб</h2>
        <h3 className="subheading text-center">Уровень: A1 (Elementary) и выше</h3>
        <h4 className="subsubheading px-3 text-center">
          Если вы хотите расширить словарный запас по 1-2 слова в день,<br />
          и чтобы учёба проходила легко, интересно и ненапряжно, но<br />
          у вас нет времени, желания, настроения, мотивации или всего вместе...<br />
          то мой новый проект Alpha Club - как раз для вас!
        </h4>
        <div className="container">
          <div className="row">
            {/* <h4 className="px-3 text-center text-danger">
              Регистрация в клуб, в данный момент, недоступна
            </h4> */}
            <div className="col m-3 p-3">
              <h5>Что вас ждёт в алфавитном клубе:</h5>
              <li>Как минимум, 26 новых слов каждый месяц - от буквы A до буквы Z (слов может быть больше,так как иногда я даю дополнительные слова в контексте)</li>
              <li>Лёгкая, интересная учёба в Телеграм в компании единомышлеников - вы будете смотреть, слушать, читать, писать и говорить, и на усвоение урока у вас будет уходить не более 10 минут в день</li>
              <li>В каждом уроке вас будут ждать краткие видео обьяснения с правильным произношением, наглядные примеры и упражнения для практики</li>
              <li>Каждый месяц посвящён конкретной теме, к примеру: еда, здоровье, природа и т.д., а значит слова, которые мы будем изучать, будут с ней связаны напрямую</li>
              <li>Несколько раз в месяц вы будете проходить мини-тесты на повторение, чтобы изученные ранее слова не забывались</li>
              <li>В конце месяца вы получите дополнительные задания на повторение всех слов в форме кроссвордов, поиска слов и т.д.</li>
            </div>
            <div className="row justify-content-evenly">
              {/* before LARGE it's 11 columns, after LARGE it's 6 columns out of 12 */}
              <div className="col-11 col-lg-6 m-3 p-3">
                <AlphaIntro />
              </div>
              {/* before LARGE it's 11 columns, after LARGE it's 5 columns out of 12 */}
              <div className="col-11 col-lg-5 m-3 p-3">
                {/* <AlphaImages /> */}
              </div>
            </div>
            <div>
              <AlphaPayment />
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Alpha;