import React from "react";
import { Button, Modal } from "react-bootstrap";
import {
  TimeAndLocation,
  TemperatureAndDetails,
  Forecast,
} from "./forcastDetails";

function ModalPage({ onHide, show, weather }) {
 

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
            className={`mx-auto py-1 rounded shadow-lg `}
            style={{
              background: `${
                !weather || weather.temp <= 25
                  ? "linear-gradient(to bottom,  #67e8f9 , #7dd3fc )"
                  : "linear-gradient(to bottom,  #fde047 , #fdba74)"
              }`,
            }}
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
