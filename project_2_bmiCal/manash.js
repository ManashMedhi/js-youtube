const form = document.querySelector('form');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const result = document.querySelector('.result');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload

  // Get and validate inputs
  const heightValue = parseFloat(heightInput.value);
  const weightValue = parseFloat(weightInput.value);

  if (isNaN(heightValue) || isNaN(weightValue)) {
    result.textContent = "Please enter valid numbers!";
    return;
  }

  // Calculate BMI (height in cm → convert to meters)
  const bmi = (weightValue / ((heightValue / 100) ** 2)).toFixed(2);
  result.textContent = `Your BMI: ${bmi}`;
});