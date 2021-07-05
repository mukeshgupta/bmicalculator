const calculateBMI = require('./bmicalculator');

const source = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female","HeightCm": 167, "WeightKg": 82}]
for(let i = 0; i < source.length; i++) {
  calculateBMI(source[i],source[i].HeightCm/100, source[i].WeightKg)
}
console.log('BMI output', source)