function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusOutput = document.getElementById("celsius");
    
    if (fahrenheitInput.value === "") {
      alert("Please enter a temperature in Fahrenheit.");
      return;
    }
    
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    
    celsiusOutput.value = celsius.toFixed(2);
  }
  
  function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitOutput = document.getElementById("fahrenheit");
    
    if (celsiusInput.value === "") {
      alert("Please enter a temperature in Celsius.");
      return;
    }
    
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    
    fahrenheitOutput.value = fahrenheit.toFixed(2);
  }
  