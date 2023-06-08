import React from "react";
import { Button, Modal } from "react-bootstrap";

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
        <Modal.Body>
          {/* {weather && (
            <div>
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />

              <Forecast title='hourly forecast' items={weather.hourly} />
              <Forecast title='daily forecast' items={weather.daily} />
            </div>
          )} */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPage;
