import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const metricInput = document.getElementById("metric-input");
    const metricBtn = document.getElementById("metric-btn");
    const lengthResult = document.getElementById("length-result");
    const volumnResult = document.getElementById("volumn-result");
    const massResult = document.getElementById("mass-result");

    function toFeet(value) {
      const feet = (value * 3.281).toFixed(3);
      const meter = (value / 3.281).toFixed(3);
      lengthResult.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meter} meters`;
    }

    function toGallons(value) {
      const gallons = (value * 0.264).toFixed(3);
      const liters = (value / 0.264).toFixed(3);
      volumnResult.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`;
    }

    function toPounds(value) {
      const pounds = (value * 2.204).toFixed(3);
      const kilograms = (value / 2.204).toFixed(3);
      massResult.textContent = `${value} kg = ${pounds} lbs | ${value} lbs = ${kilograms} kg`;
    }

    metricBtn.addEventListener("click", function () {
      const inputValue = Number(metricInput.value);
      toFeet(inputValue);
      toGallons(inputValue);
      toPounds(inputValue);
    });
  }, []);

  return (
    <div>
      <hero>
        <h1>Metric/Imperial Unit Conversion</h1>
        <input  type="number" id="metric-input" />
        <button id="metric-btn">Convert</button>
      </hero>
      <main>
        <section className="result-card">
          <h2>Length (Meter/Feet)</h2>
          <p id="length-result"></p>
        </section>
        <section className="result-card">
          <h2>Volume (Liters/Gallons)</h2>
          <p id="volumn-result"></p>
        </section>
        <section className="result-card">
          <h2>Mass (Kilograms/Pounds)</h2>
          <p id="mass-result"></p>
        </section>
      </main>
    </div>
  );
}

export default App;
