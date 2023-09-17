const mortalityTable = [
    [74.12, 79.78],
    [73.55, 79.17],
    [72.58, 78.19],
    [71.6, 77.21],
    [70.62, 76.22],
    [69.63, 75.23],
    [68.64, 74.24],
    [67.65, 73.25],
    [66.65, 72.25],
    [65.66, 71.26],
    [64.67, 70.27],
    [63.68, 69.27],
    [62.69, 68.28],
    [61.7, 67.29],
    [60.71, 66.3],
    [59.73, 65.31],
    [58.76, 64.32],
    [57.79, 63.34],
    [56.84, 62.36],
    [55.9, 61.38],
    [54.97, 60.41],
    [54.04, 59.44],
    [53.12, 58.47],
    [52.21, 57.5],
    [51.3, 56.54],
    [50.39, 55.58],
    [49.48, 54.61],
    [48.57, 53.66],
    [47.66, 52.7],
    [46.76, 51.74],
    [45.86, 50.79],
    [44.97, 49.84],
    [44.07, 48.89],
    [43.18, 47.94],
    [42.29, 47],
    [41.39, 46.06],
    [40.5, 45.12],
    [39.62, 44.18],
    [38.73, 43.24],
    [37.85, 42.31],
    [36.97, 41.38],
    [36.09, 40.45],
    [35.21, 39.52],
    [34.34, 38.6],
    [33.46, 37.68],
    [32.59, 36.76],
    [31.73, 35.85],
    [30.87, 34.94],
    [30.01, 34.04],
    [29.17, 33.14],
    [28.33, 32.24],
    [27.5, 31.35],
    [26.67, 30.47],
    [25.86, 29.59],
    [25.06, 28.72],
    [24.27, 27.86],
    [23.48, 27.01],
    [22.71, 26.16],
    [21.95, 25.32],
    [21.21, 24.49],
    [20.47, 23.67],
    [19.74, 22.85],
    [19.03, 22.04],
    [18.32, 21.24],
    [17.63, 20.45],
    [16.94, 19.66],
    [16.26, 18.88],
    [15.58, 18.1],
    [14.91, 17.34],
    [14.24, 16.58],
    [13.59, 15.82],
    [12.94, 15.08],
    [12.3, 14.36],
    [11.67, 13.64],
    [11.05, 12.94],
    [10.46, 12.26],
    [9.88, 11.6],
    [9.32, 10.95],
    [8.77, 10.31],
    [8.25, 9.7],
    [7.74, 9.1],
    [7.25, 8.53],
    [6.77, 7.98],
    [6.31, 7.44],
    [5.88, 6.93],
    [5.47, 6.44],
    [5.07, 5.99],
    [4.7, 5.55],
    [4.35, 5.15],
    [4.02, 4.76],
    [3.72, 4.41],
    [3.44, 4.08],
    [3.18, 3.78],
    [2.96, 3.51],
    [2.75, 3.27],
    [2.57, 3.05],
    [2.42, 2.85],
    [2.28, 2.68],
    [2.15, 2.52],
    [2.04, 2.37],
    [1.93, 2.23],
    [1.83, 2.09],
    [1.73, 1.96],
    [1.63, 1.84],
    [1.54, 1.72],
    [1.45, 1.61],
    [1.36, 1.5],
    [1.28, 1.4],
    [1.2, 1.3],
    [1.13, 1.21],
    [1.05, 1.12],
    [0.98, 1.03],
    [0.92, 0.95],
    [0.85, 0.88],
    [0.79, 0.8],
    [0.74, 0.74],
    [0.68, 0.68],
    [0.63, 0.63],
    [0.58, 0.58],
    [0.53, 0.53]
  ];
  
  // Calculate the average and add it to the mortality table
  for (let agerange = 0; agerange < mortalityTable.length; agerange++) {
    const average = (mortalityTable[agerange][0] + mortalityTable[agerange][1]) / 2;
    mortalityTable[agerange].push(average);
  }
  
  const age = Number(prompt("Age: "));
  const sex = Number(prompt("Sex (Enter 1 for male, 2 for female, 3 for other): "));
  const answers = Array.from({ length: 16 }, (_, i) => i + 1);
  const startingValue0 = mortalityTable[age][sex - 1];
  
  // 1. Smoking
  const startingValue1 = startingValue0 - (answers[0] * 11) / 1440;
  
  // 2. Alcohol
  let startingValue2 = startingValue1;
  if (answers[1] >= 8) {
    startingValue2 -= 4;
  } else if (answers[1] >= 5) {
    startingValue2 -= 2;
  } else if (answers[1] >= 3) {
    startingValue2 -= 1;
  } else if (answers[1] >= 1) {
    startingValue2 -= 0.5;
  }
  
  // 3. Fast Food
  const startingValue3 = startingValue2 - 0.005 * answers[2];
  
  // 4. Water (waiting for data)
  const startingValue4 = startingValue3;
  
  // 5. Exercise
  let startingValue5 = startingValue4;
  if (answers[4] >= 4) {
    startingValue5 += 5;
  } else if (answers[4] >= 3) {
    startingValue5 += 4.2;
  } else if (answers[4] >= 1) {
    startingValue5 += 3.4;
  }
  
  // 6. Sitting
  let startingValue6 = startingValue5;
  if (answers[5] >= 10) {
    startingValue6 -= 3;
  } else if (answers[5] >= 8) {
    startingValue6 -= 2;
  } else if (answers[5] >= 6) {
    startingValue6 -= 1;
  } else if (answers[5] >= 4) {
    startingValue6 -= 0;
  } else if (answers[5] >= 2) {
    startingValue6 += 1;
  } else if (answers[5] >= 0) {
    startingValue6 += 2;
  }
  
  // 7. Transportation
  let startingValue7;
  if (answers[6] === 1) {
    startingValue7 = startingValue6 + 2; // Human-powered
  } else {
    startingValue7 = startingValue6 - 2; // Other
  }
  
  // 8. Height and Weight (need to check units)
  const startingValue8 = startingValue7;
  
  // 9. Sleep
  let startingValue9;
  if (answers[8] >= 9) {
    startingValue9 = startingValue8 - 3.8;
  } else if (answers[8] >= 7) {
    startingValue9 = startingValue8;
  } else if (answers[8] >= 4) {
    startingValue9 = startingValue8 - 1.2;
  }
  
  // 10. Sunburns (waiting for data)
  const startingValue10 = startingValue9;
  
  // 11. Friends (waiting for data)
  const startingValue11 = startingValue10;
  
  // 12. Stress
  let startingValue12;
  if (answers[11] === 2) {
    startingValue12 = startingValue11; // Light stress
  } else if (answers[11] === 1) {
    startingValue12 = startingValue11 - 1; // Moderate stress
  } else {
    startingValue12 = startingValue11 - 2.8; // Heavy stress
  }
  
  // 13. Driving Skill
  let startingValue13;
  if (answers[12] === 2) {
    startingValue13 = startingValue12 + 2; // Very skilled
  } else if (answers[12] === 1) {
    startingValue13 = startingValue12; // Moderately skilled
  } else {
    startingValue13 = startingValue12 - 2; // Not skilled
  }
  
  // 14. Location Crime Rate
  let startingValue14;
  if (answers[13] === 4) {
    startingValue14 = startingValue13 + 2; // Very low crime rate
  } else if (answers[13] === 3) {
    startingValue14 = startingValue13 + 1; // Low crime rate
  } else if (answers[13] === 2) {
    startingValue14 = startingValue13; // Moderate crime rate
  } else if (answers[13] === 1) {
    startingValue14 = startingValue13 - 1; // High crime rate
  } else {
    startingValue14 = startingValue13 - 2; // Very high crime rate
  }
  
  // 15. Education
  let startingValue15;
  if (answers[14] === 4) {
    startingValue15 = startingValue14 + 6; // > College education
  } else if (answers[14] === 3) {
    startingValue15 = startingValue14 + 4; // College education
  } else if (answers[14] === 2) {
    startingValue15 = startingValue14 + 2; // Some college education
  } else if (answers[14] === 1) {
    startingValue15 = startingValue14 + 1.37; // High school education
  } else {
    startingValue15 = startingValue14; // Other education
  }
  
  // Making value history vector
  const valueHistory = [];
  for (let i = 0; i < 16; i++) {
    valueHistory[i] = eval(`startingValue${i}`);
  }
  
  // Finding source of the biggest difference
  const stepDifferences = [];
  for (let j = 1; j < 16; j++) {
    stepDifferences[j - 1] = valueHistory[j] - valueHistory[j - 1];
  }
  const maxDiff = Math.max(...stepDifferences);
  const maxDiffSource = stepDifferences.indexOf(maxDiff) + 1; // maxDiffSource is the step that yields the maxDiff
  const minDiff = Math.min(...stepDifferences);
  const minDiffSource = stepDifferences.indexOf(minDiff) + 1;
  
  console.log(startingValue0);
  console.log(maxDiff);
  console.log(minDiff);

let posSum = 0;
let negSum = 0;
function calculateProp() {
    for (let i = 0; i < 16; i++) {
        if (stepDifferences[i] >= 0) {

            posSum += stepDifferences[i];
        }
        else if (stepDifferences[i] <=0) {
            negSum -= stepDifferences[i];
        }
    }
}

export { calculateProp, evenSum, oddSum };