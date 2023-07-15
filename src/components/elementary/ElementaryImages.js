import Carousel from 'react-bootstrap/Carousel';
import IMG_2922 from '../../images/elementary/IMG_2922.jpg';
import IMG_2925 from '../../images/elementary/IMG_2925.jpg';
import IMG_2926 from '../../images/elementary/IMG_2926.jpg';
import IMG_2927 from '../../images/elementary/IMG_2927.jpg';
import IMG_2929 from '../../images/elementary/IMG_2929.jpg';
import IMG_2931 from '../../images/elementary/IMG_2931.jpg';
import IMG_2932 from '../../images/elementary/IMG_2932.jpg';
import IMG_2933 from '../../images/elementary/IMG_2933.jpg';
import IMG_2934 from '../../images/elementary/IMG_2934.jpg';
import IMG_2945 from '../../images/elementary/IMG_2945.jpg';
import IMG_2946 from '../../images/elementary/IMG_2946.jpg';

const ElementaryImages = () => {
  const reviews = [IMG_2922, IMG_2925, IMG_2926, IMG_2927, IMG_2929, IMG_2931, IMG_2932, IMG_2933, IMG_2934, IMG_2945, IMG_2946];

  return (
    <div className='text-center'>
      <h4 className='mb-3'>Отзывы от тех, кто уже прошёл данный курс:</h4>
      <Carousel variant="dark">
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

export default ElementaryImages;