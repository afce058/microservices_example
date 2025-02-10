import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [service1Ep1, setService1Ep1] = useState({});
  const [service1Ep2, setService1Ep2] = useState({});
  const [service2Ep1, setService2Ep1] = useState({});
  const [service2Ep2, setService2Ep2] = useState({});

  useEffect(() => {
    axios.get(`${ process.env.REACT_APP_BASE_URL1 }/service1/api/endpoint1`)
      .then(response => {
        setService1Ep1(response.data);
      }).catch(error => {
        console.log("Error in service1 endpoint1");
      });

    axios.get(`${ process.env.REACT_APP_BASE_URL1 }/service1/api/endpoint2`)
      .then( response => {
        setService1Ep2(response.data);
      }).catch(error => {
        console.log("Error in service1 endpoint2");
      });

    axios.get(`${ process.env.REACT_APP_BASE_URL2 }/service2/api/endpoint1`)
      .then( response => {
        setService2Ep1(response.data);
      }).catch(error => {
        console.log("Error in service2 endpoint1");
      });

    axios.get(`${ process.env.REACT_APP_BASE_URL2 }/service2/api/endpoint2`)
      .then( response => {
        setService2Ep2(response.data);
      }).catch(error => {
        console.log("Error in service2 endpoint2");
      });
  }, []);

  return (
    <div className="App">
      <h1>Microservices app</h1>
      <div>
        <h2>Service 1</h2>
        <p>{service1Ep1.message || "Cargando..."}</p>
        <p>{service1Ep2.message || "Cargando..."}</p>
      </div>
      <div>
        <h2>Service 2</h2>
        <p>{service2Ep1.message || "Cargando..."}</p>
        <p>{service2Ep2.message || "Cargando..."}</p>
      </div>
    </div>
  );
}

export default App;
