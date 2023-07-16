import Carousel from 'react-bootstrap/Carousel';
import IMG_2923 from '../../images/pre-intermediate/IMG_2923.jpg';
import IMG_2924 from '../../images/pre-intermediate/IMG_2924.jpg';
import IMG_2935 from '../../images/pre-intermediate/IMG_2935.jpg';
import IMG_2936 from '../../images/pre-intermediate/IMG_2936.jpg';
import IMG_2937 from '../../images/pre-intermediate/IMG_2937.jpg';
import IMG_2938 from '../../images/pre-intermediate/IMG_2938.jpg';
import IMG_2939 from '../../images/pre-intermediate/IMG_2939.jpg';
import IMG_2940 from '../../images/pre-intermediate/IMG_2940.jpg';
import IMG_2941 from '../../images/pre-intermediate/IMG_2941.jpg';
import IMG_2942 from '../../images/pre-intermediate/IMG_2942.jpg';
import IMG_2943 from '../../images/pre-intermediate/IMG_2943.jpg';
import IMG_2944 from '../../images/pre-intermediate/IMG_2944.jpg';

const PreIntermediateImages = () => {
  const reviews = [IMG_2923, IMG_2924, IMG_2935, IMG_2936, IMG_2937, IMG_2938, IMG_2939, IMG_2940, IMG_2941, IMG_2942, IMG_2943, IMG_2944];

  return (
    <div className='text-center'>
      <h4 className='mb-3'>Отзывы от тех, кто уже прошёл курс English for Amateurs:</h4>
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

export default PreIntermediateImages;