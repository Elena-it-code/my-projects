// Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let massindex = weight / (height * height );
    if ( massindex <= 18.5 ) {
      return "Underweight";
    } else if ( massindex <= 25.0 ) {
      return "Normal";
    } else if ( massindex <= 30.0 ) {
      return "Overweight";
    } 
      return "Obese";
  }