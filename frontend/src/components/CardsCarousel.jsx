import { Carousel, Card, CardGroup } from "react-bootstrap";
import {
  Sunny,
  Bedtime,
  Map,
  Home,
  FlightLand,
  Flight,
  SportsEsports,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { initializeTotales } from "../reducers/totalesReducer";
import { useEffect } from "react";

const CARDS = [
  [
    { icon: <Flight />, subtitle: "Horas totales", key: "total_horas" },
    { icon: <Sunny />, subtitle: "Horas diurnas", key: "total_dia" },
    { icon: <Bedtime />, subtitle: "Horas nocturnas", key: "total_noche" },
  ],
  [
    {
      icon: <SportsEsports />,
      subtitle: "Piloto al mando",
      key: "total_alMando",
    },
    { icon: <Home />, subtitle: "Vuelo local", key: "total_local" },
    { icon: <Map />, subtitle: "En travesia", key: "total_travesia" },
  ],
  [{ icon: <FlightLand />, subtitle: "Aterrizajes", key: "total_aterrizajes" }],
];

const CardsCarousel = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const totales = useSelector((state) => state.totales);

  useEffect(() => {
    if (login?.id) dispatch(initializeTotales(login.id));
  }, [login, dispatch]);

  if (!login || !totales) return <div>Cargando...</div>;

  return (
    <Carousel className="totales-carousel" indicators={false}>
      {CARDS.map((group, idx) => (
        <Carousel.Item key={idx}>
          <CardGroup className="carousel-card-group">
            {group.map((card, i) => (
              <Card className="carousel-card" key={i}>
                <Card.Body>
                  <Card.Title>{card.icon}</Card.Title>
                  <Card.Subtitle>{card.subtitle}</Card.Subtitle>
                  {card.key === "total_aterrizajes" ? (
                    <Card.Text>{totales[card.key]}</Card.Text>
                  ) : (
                    <Card.Text>{`${totales[card.key]} hrs`}</Card.Text>
                  )}
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CardsCarousel;
