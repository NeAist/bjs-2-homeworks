"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let r1, r2;
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d == 0) {
    r1 = -b / (2 * a);
    arr.push(r1);
  } else if (d > 0) {
    r1 = (-b + Math.sqrt(d)) / (2 * a);
    r2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(r1, r2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let n = countMonths;
  let S = amount - contribution;
  let monthlyPayment;
  let totalMortrage;
  monthlyPayment = S * (P + P / ((1 + P) ** n - 1));
  totalMortrage = +(monthlyPayment * n).toFixed(2);
  return totalMortrage;
}
