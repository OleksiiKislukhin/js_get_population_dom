'use strict';

function numberToString(number) {
  let newNumber = number;
  let resultStr = '';

  while (newNumber > 0) {
    resultStr = newNumber % 1000 + ',' + resultStr;
    newNumber = Math.floor(newNumber / 1000);
  }

  return resultStr.replace(/,$/, '');
}

const populationList = document.querySelectorAll('[class="population"]');

let sumPopulation = 0;

for (const elem of populationList) {
  sumPopulation += Number(elem.innerText.replace(/,/g, ''));
}

const totalElem = document.querySelector('[class="total-population"]');

totalElem.innerText = numberToString(sumPopulation);

const averageElem = document.querySelector('[class="average-population"]');

averageElem.innerText = numberToString(
  Math.floor(sumPopulation / populationList.length)
);
