import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import GetFormattedWeatherData from "../services/WeatherServices";
import axios from "axios";

function AddCities() {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState("");
  const bearer = {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  };
  useEffect(() => {
    getCityListDb();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!value) {
      toast.error("Please enter a City");
      return;
    } else if (cities.includes(value)) {
      toast.error("City Already exists!!");
      return;
    }
    let searchParams = {
      q: value,
      units: "metric",
    };
    const response = await GetFormattedWeatherData(searchParams);
    const data = {
      name: value,
      weather: JSON.stringify(response?.temp),
    };
    setCities((oldArray) => [...oldArray, data]);
    await addCityDb(data);
  };

  const addCityDb = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/add/city`,
        data,
        bearer
      );
      if (response) toast.success(response?.message);
    } catch (err) {
      console.log(err?.message);
    }
  };

  const getCityListDb = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/city/list`,
        bearer
      );
      if (response) {
        setCities(response?.data?.data);
      }
    } catch (err) {
      console.log(err?.message);
    }
  };
  console.log("cities", cities);

  return (
    <>
      <Form onSubmit={onSubmit} className='pt-2 w-50 m-auto '>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className='text-center m-auto w-100'>
            Add Cities
          </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter City Name'
            name='city'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='d-grid'>
          <Button variant='danger' type='submit'>
            ADD
          </Button>
        </Form.Group>
      </Form>

      <div className='d-flex flex-wrap '></div>
    </>
  );
}

export default AddCities;
