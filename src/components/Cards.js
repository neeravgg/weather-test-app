import React, { useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { iconUrlFromCode } from "../services/WeatherServices";
import ModalPage from "./ModalPage";

function Cards({ item, getWeather, deleteCity }) {
  const [weather, setWeather] = useState();
  const [modalShow, setModalShow] = useState(false);
  const variant = "info";
  //   useEffect(() => {
  //     getWeather();
  //   }, [isModal]);

  //   console.log(getWeather(item.name));
  const weatherData = (city) => {
    if (city) {
      const res = getWeather(city);
      setWeather(res);
    }
  };
  return (
    <>
      <Card
        bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
        className='mb-2 '
      >
        <Card.Header className='m-auto'>{item.name.toUpperCase()}</Card.Header>
        <Card.Body>
          <Card.Title>
            {variant} id: {item.id}{" "}
          </Card.Title>
          <Card.Title>
            {variant} Weather: {item.weather}°{" "}
          </Card.Title>
          <div className='mt-4'>
            <Button
              style={{
                height: "3rem",
                width: "3rem",
                marginLeft: "3rem",
              }}
              onClick={() => deleteCity(item.id)}
              variant='danger'
            >
              <i class='fa fa-trash-o' aria-hidden='true' />
            </Button>
            <Button
              style={{
                height: "3rem",
                width: "3rem",
                marginLeft: "1rem",
              }}
              variant='warning'
              onClick={() => {
                weatherData(item?.name);
                setModalShow(true);
              }}
            >
              <i class='fa fa-external-link' aria-hidden='true' />
            </Button>
          </div>
        </Card.Body>
      </Card>
      <ModalPage show={modalShow} onHide={() => setModalShow(false)} weather= {weather} />
    </>
  );
}

export default Cards;
