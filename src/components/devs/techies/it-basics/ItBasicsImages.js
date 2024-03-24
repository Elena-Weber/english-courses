import Carousel from 'react-bootstrap/Carousel';
import IMG_7515 from '../../../../images/it-basics/IMG_7515.jpg';
import IMG_7580 from '../../../../images/it-basics/IMG_7580.jpg';
import IMG_7581 from '../../../../images/it-basics/IMG_7581.jpg';
import IMG_7582 from '../../../../images/it-basics/IMG_7582.jpg';
import IMG_7583 from '../../../../images/it-basics/IMG_7583.jpg';
import IMG_7584 from '../../../../images/it-basics/IMG_7584.jpg';
import IMG_7585 from '../../../../images/it-basics/IMG_7585.jpg';
import IMG_7586 from '../../../../images/it-basics/IMG_7586.jpg';
import IMG_7587 from '../../../../images/it-basics/IMG_7587.jpg';
import IMG_7588 from '../../../../images/it-basics/IMG_7588.jpg';
import IMG_7589 from '../../../../images/it-basics/IMG_7589.jpg';
import IMG_7590 from '../../../../images/it-basics/IMG_7590.jpg';
import IMG_7591 from '../../../../images/it-basics/IMG_7591.jpg';
import IMG_7592 from '../../../../images/it-basics/IMG_7592.jpg';
import IMG_7593 from '../../../../images/it-basics/IMG_7593.jpg';

const ItBasicsImages = () => {
  const reviews = [IMG_7588, IMG_7589, IMG_7590, IMG_7591, IMG_7592, IMG_7593, IMG_7580, IMG_7587, IMG_7581, IMG_7582, IMG_7583, IMG_7584, IMG_7585, IMG_7586, IMG_7515];

  return (
    <div className='text-center'>
      <h4 className='mb-3'>Отзывы от тех, кто уже прошёл курс IT Basics:</h4>
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

export default ItBasicsImages;