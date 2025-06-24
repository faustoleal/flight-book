import { Carousel, Card, CardGroup } from "react-bootstrap";

const CardsCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <CardGroup>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Horas totales</Card.Title>
            </Card.Body>
          </Card>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Horas diurnas</Card.Title>
            </Card.Body>
          </Card>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Horas nocturnas</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </Carousel.Item>
      <Carousel.Item>
        <CardGroup>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Travesia</Card.Title>
            </Card.Body>
          </Card>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Locales</Card.Title>
            </Card.Body>
          </Card>
          <Card className="m-1">
            <Card.Body>
              <Card.Title>Al mando</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </Carousel.Item>
      <Carousel.Item>
        <CardGroup className="last-card">
          <Card>
            <Card.Body>
              <Card.Title>Aterrizajes</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </Carousel.Item>
    </Carousel>
  );
};

export default CardsCarousel;
