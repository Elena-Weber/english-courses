import Carousel from 'react-bootstrap/Carousel';

function AlphaImages() {
  const reviews = [];

  return (
    <div className='text-center'>
      <h4 className='mb-3'>Отзывы об Алфа Клубе:</h4>
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

export default AlphaImages;