import React from "react";
import {
  formatToLocalTime,
  iconUrlFromCode,
} from "../services/WeatherServices";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className='d-flex justify-content-center my-3'>
        <p className='text-dark '>{formatToLocalTime(dt, timezone)}</p>
      </div>

      <div className='d-flex justify-content-center my-2'>
        <p className='text-dark fs-2 fw-bold'>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className='d-flex justify-content-center py-1 fs-2 fw-bold text-danger'>
        <p>{details}</p>
      </div>

      <div className='d-flex flex-row justify-content-center text-dark py-4'>
        <img src={iconUrlFromCode(icon)} alt='' style={{ width: "6rem" }} />
        <p className='fs-4'>{`${temp.toFixed()}°`}</p>
        <div className='flex flex-col space-y-2 px-3 pt-1'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-1' />
            Feel like:
            <span className='fw-normal ml-1'>{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className='flex font-light text-sm justify-content-center'>
            <UilTear size={18} className='mr-1' />
            Humidity:
            <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
          </div>
          <div className='flex font-light text-sm justify-content-center'>
            <UilWind size={18} className='mr-1' />
            Wind:
            <span className='font-medium ml-1'>{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className='d-flex flex-row justify-content-center gap-3 text-dark text-sm py-3'>
        <UilSun />
        <p className='font-light'>
          Rise:{" "}
          <span className='font-medium ml-1'>
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className='font-light'>|</p>

        <UilSunset />
        <p className='font-light'>
          Set:{" "}
          <span className='font-medium ml-1'>
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
      
      </div>
      <div className='d-flex flex-row justify-content-center gap-3 text-dark text-sm py-3'>
        <UilSun />
        <p className='font-light'>
          High:{" "}
          <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className='font-light'>|</p>

        <UilSun />
        <p className='font-light'>
          Low:{" "}
          <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

function Forecast({ title, items }) {
  // console.log(items);
  return (
    <div>
      <div className='d-flex justify-content-center mt-3'>
        <p className='text-dark fw-bold text-capitalize'>{title}</p>
      </div>
      <hr className='my-2' />

      <div className='d-flex flex-row justify-content-center text-dark'>
        {items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center'
          >
            <p className='font-light text-sm'>{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className='w-12 my-1'
              alt=''
            />
            <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { TimeAndLocation, TemperatureAndDetails, Forecast };
