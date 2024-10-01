import * as fs from 'fs';

const enabledStripeColor = 'rgba(153,217,234)';
const disabledStripeColor = 'rgba(8,76,148)';

const expectedColorsArrays = {
  '<20': Array(5).fill(disabledStripeColor),
  '<40': [
    ...Array(1).fill(enabledStripeColor),
    ...Array(4).fill(disabledStripeColor),
  ],
  '<60': [
    ...Array(2).fill(enabledStripeColor),
    ...Array(3).fill(disabledStripeColor),
  ],
  '<80': [
    ...Array(3).fill(enabledStripeColor),
    ...Array(2).fill(disabledStripeColor),
  ],
  '<100': [
    ...Array(4).fill(enabledStripeColor),
    ...Array(1).fill(disabledStripeColor),
  ],
  '100': Array(5).fill(enabledStripeColor),
};

const calculateExpectedResult = (percentage: number) => {
  if (percentage < 20) {
    return expectedColorsArrays['<20'];
  }
  if (percentage < 40) {
    return expectedColorsArrays['<40'];
  }
  if (percentage < 60) {
    return expectedColorsArrays['<60'];
  }
  if (percentage < 80) {
    return expectedColorsArrays['<80'];
  }
  if (percentage < 100) {
    return expectedColorsArrays['<100'];
  }
  if (percentage >= 100) {
    return expectedColorsArrays['100'];
  }
  return [];
};

const arr: [number, string[]][] = Array.from(
  { length: 103 },
  (_, index) => index - 1,
).map((percentage) => [percentage, calculateExpectedResult(percentage)]);

const saveToJsonFile = (data: any, filename: string) => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filename, jsonData, 'utf8');
};
const outputPath = './src/testCases/widgetIndicatorTestCases.json';

saveToJsonFile(arr, outputPath);
