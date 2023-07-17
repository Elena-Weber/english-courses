import avatar from '../images/avatar.JPG';

const Home = () => {
    return (
      <div className='container'>
        <div className='row my-4'>
          <div className='col-3 d-flex justify-content-center align-items-center'>
            <img src={avatar} style={{width:'70%'}} className='text-center'/>
          </div>
          <div className='col-9'>
            <h2 className="heading">Привет!</h2>
            <h3 className="subheading">Меня зовут Елена, и я опытный дипломированный и сертифицированный English Teacher</h3>
            <h4 className="subsubheading">У меня за спиной:</h4>
            <li>5 лет учёбы в ВУЗе на учителя английского и немецкого языков (окончила с отличием)</li>
            <li>4 года преподавания English в ВУЗе (и повышение до старшего преподавателя)</li>
            <li>10+ лет репетиторства</li>
            <li>7 лет жизни в США и ежедневного общения с носителями языка</li>
            <li>Сертификат TESOL от Arizona State University</li>
            <li>В Instagram я известна благодаря аккаунту с классными уроками по английскому языку @English.Witch.Elena (в настоящее время находится в архиве)</li>
          </div>
        </div>
        <div className='row mb-3'>
          <h4 className="subsubheading">Хоть я и волшебница английского языка, чудес не обещаю, но гарантирую, что под моим руководством вы:</h4>
          <li>разложите ГРАММАТИКУ по полочкам</li>
          <li>расширите СЛОВАРНЫЙ ЗАПАС</li>
          <li>улучшите навыки АУДИРОВАНИЯ</li>
          <li>поправите ПРОИЗНОШЕНИЕ</li>
          <li>а также будете ГОВОРИТЬ, ЧИТАТЬ и ПИСАТЬ (на английском, конечно же!)</li>
        </div>
        {/* <div className='row text-center mt-5'>
          <h5>
            Пока же предлагаю вам проверить свой уровень английского языка - сделать это можно здесь
          </h5>
        </div> */}
      </div>
    )
}

export default Home;