import React from "react";
import { Button, Modal } from "react-bootstrap";
import {
  TimeAndLocation,
  TemperatureAndDetails,
  Forecast,
} from "./forcastDetails";

function ModalPage({ onHide, show, weather }) {
  const formatBackground = () => {
    // the weather popup changes color depending upon temprature
    if (!weather) return "bg-info bg-gradient";
    const threshold = 20;
    if (weather.temp <= threshold) return "bg-info bg-gradient";

    return "bg-warning bg-gradient";
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Weather Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className={`mx-auto py-1 rounded shadow-lg ${formatBackground()}`}
          >
            {weather && (
              <div>
                <TimeAndLocation weather={weather} />
                <TemperatureAndDetails weather={weather} />

                <Forecast title='hourly forecast' items={weather.hourly} />
                <Forecast title='daily forecast' items={weather.daily} />
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPage;
