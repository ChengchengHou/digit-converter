import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const metricInput = document.getElementById("metric-input");
    const metricBtn = document.getElementById("metric-btn");
    const lengthResult = document.getElementById("length-result");
    const volumnResult = document.getElementById("volumn-result");
    const massResult = document.getElementById("mass-result");
    const toast = document.getElementById("toast");

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

    function showToast(message) {
      toast.textContent = message;
      toast.className = "toast show";
      setTimeout(() => {
        toast.className = "toast";
      }, 3000); // disappears after 3 seconds
    }

    metricBtn.addEventListener("click", function () {
      const inputValue = Number(metricInput.value);
      if (inputValue <= 0) {
        showToast("Please enter a positive number");
      } else {
        toFeet(inputValue);
        toGallons(inputValue);
        toPounds(inputValue);
      }
    });
  }, []);

  return (
    <div>
      <hero>
        <h1>Metric/Imperial Unit Conversion</h1>
        <input  type="number" id="metric-input" min="0"/>
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
      <div id="toast" class="toast">Please enter a positive number</div>
    </div>
  );
}

export default App;
