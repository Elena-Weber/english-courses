import Carousel from 'react-bootstrap/Carousel';
import IMG_7765 from '../../images/alpha/IMG_7765.jpg';
import IMG_7768 from '../../images/alpha/IMG_7768.jpg';
import IMG_7769 from '../../images/alpha/IMG_7769.jpg';
import IMG_7771 from '../../images/alpha/IMG_7771.jpg';
import IMG_7808 from '../../images/alpha/IMG_7808.jpg';
import IMG_7894 from '../../images/alpha/IMG_7894.jpg';
import IMG_7908 from '../../images/alpha/IMG_7908.jpg';
import IMG_7955 from '../../images/alpha/IMG_7955.jpg';
import IMG_7957 from '../../images/alpha/IMG_7957.jpg';
import IMG_7960 from '../../images/alpha/IMG_7960.JPG';
import IMG_7961 from '../../images/alpha/IMG_7961.JPG';
import IMG_8026 from '../../images/alpha/IMG_8026.jpg';
import IMG_8047 from '../../images/alpha/IMG_8047.jpg';
import IMG_8048 from '../../images/alpha/IMG_8048.jpg';
import IMG_8057 from '../../images/alpha/IMG_8057.jpg';
import IMG_8081 from '../../images/alpha/IMG_8081.jpg';
import IMG_8082 from '../../images/alpha/IMG_8082.jpg';
import IMG_8104 from '../../images/alpha/IMG_8104.jpg';
import IMG_8210 from '../../images/alpha/IMG_8210.jpg';
import IMG_8246 from '../../images/alpha/IMG_8246.jpg';

function AlphaImages() {
  const reviews = [IMG_8057, IMG_7955, IMG_7894, IMG_7960, IMG_7961, IMG_7765, IMG_8246, IMG_7768, IMG_7808, IMG_7957, IMG_8026, IMG_8047, IMG_8048, IMG_8210, IMG_8104, IMG_7769, IMG_7771, IMG_7908, IMG_8081, IMG_8082];

  return (
    <div className='text-center'>
      <h3 className='mb-3 accent'>Отзывы об Алфа Клубе:</h3>
      <Carousel variant="dark" className='alpha-carousel'>
        {reviews.map(image => {
          return <Carousel.Item key={image}>
            <img
              className="d-block w-100"
              src={image}
              alt={image}
            />
          </Carousel.Item>
        })}
      </Carousel>
    </div>
  )
}

export default AlphaImages;