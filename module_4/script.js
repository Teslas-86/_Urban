import { greet } from "./modules/greet.js";
import { celsiusToFahrenheit } from "./modules/celsiusToFahrenheit.js";
import { calculateFallDistance } from "./modules/calculateFallDistance.js";
import { calculateAverage } from "./modules/calculateAverage.js";
import { concatStrings } from "./modules/concatStrings.js";

greet();

const celsius = 25;
console.log(`${celsius}°C = ${celsiusToFahrenheit(celsius)}°F`);

const fallTime = 5;
console.log(
  `Объект падает ${fallTime} секунд и пролетает ${calculateFallDistance(
    fallTime
  )} метров.`
);

const avg = calculateAverage(5, 10, 15);
console.log(`Среднее значение: ${avg}`);

const result = concatStrings("Яблоко", "Апельсин");
console.log(result);
