"use strict";

function userAge() {
  var userAge = prompt('Enter your age');

  if (isNaN(userAge) || userAge < 0) {
    alert('Enter your age in digits greater than or equal to 0!');
  } else if (userAge >= 0 && userAge <= 11) {
    alert('You are a child');
  } else if (userAge > 11 && userAge <= 17) {
    alert('You are a teenager');
  } else if (userAge > 17 && userAge <= 59) {
    alert('You are a adult ');
  } else {
    alert('You are a pensioner');
  }
}

function specialCharacter() {
  var userNumber = prompt('Enter a number from 0 to 9');

  if (isNaN(userNumber) || userNumber.length !== 1) {
    specialCharacter();
  }

  switch (userNumber) {
    case '0':
      alert(')');
      break;

    case '1':
      alert('!');
      break;

    case '2':
      alert('@');
      break;

    case '3':
      alert('#');
      break;

    case '4':
      alert('$');
      break;

    case '5':
      alert('%');
      break;

    case '6':
      alert('^');
      break;

    case '7':
      alert('&');
      break;

    case '8':
      alert('*');
      break;

    case '9':
      alert('(');
      break;

    default:
      alert('number 0 - 9');
  }
}

function sumNumbers() {
  var startValue = +prompt('Enter the start value of the range');
  var endValue = +prompt('Enter the end value of the range');

  if (isNaN(startValue) || isNaN(endValue)) {
    alert('Please enter a numerical value!');
    return false;
  } else if (startValue > endValue) {
    var swap = startValue;
    startValue = endValue;
    endValue = swap;
  }

  var sum = 0;

  for (var i = startValue; i <= endValue; i++) {
    sum += i;
  }

  alert(sum);
}

function greatestCommonDivisor() {
  var number1 = prompt('Enter the first number');
  var number2 = prompt('Enter the second number');
  var a = number1;
  var b = number2;

  if (isNaN(number1) || isNaN(number2)) {
    alert('Enter a numeric value');
    greatestCommonDivisor();
  }

  while (a && b) {
    a > b ? a %= b : b %= a;
  }

  a += b;
  alert("The greatest common divisor of ".concat(number1, " and ").concat(number2, " is ").concat(a));
}

function allDivisorsNumber() {
  var number = prompt('Enter the number');

  if (isNaN(number)) {
    allDivisorsNumber();
  }

  var result = [];

  for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
      result.push(i);
    }
  }

  alert("Divisors of the ".concat(number, ": ").concat(result.join(', ')));
}

function palindrome() {
  var number = prompt('Enter a five digit number');

  if (isNaN(number) || number.length !== 5) {
    palindrome();
  }

  var numberReverse = '';

  for (var i = number.length - 1; i >= 0; i--) {
    numberReverse += number[i];
  }

  if (number == numberReverse) {
    alert('This number is a palindrome!');
  } else {
    alert('This number is not a palindrome!');
  }
}

function discount() {
  var amount = prompt('Enter the purchase amount');

  if (isNaN(amount)) {
    alert('Enter the purchase amount in numbers');
    discount();
  }

  var amountXSmall = 200;
  var amountSmall = 300;
  var amountMedium = 500;
  var discountSmall = 0.03;
  var discountMedium = 0.05;
  var discountLarge = 0.07;

  if (amount < amountXSmall) {
    alert("You can buy for ".concat(amountXSmall - amount, " more to get a discount"));
  } else if (amount <= amountSmall) {
    alert("Your amount to be paid with the discount is ".concat(amount - amount * discountSmall));
  } else if (amount <= amountMedium) {
    alert("Your amount to be paid with the discount is ".concat(amount - amount * discountMedium));
  } else {
    alert("Your amount to be paid with the discount is ".concat(amount - amount * discountLarge));
  }
}

function countNumber() {
  for (var i = 1; i <= 10; i++) {
    var number = prompt("Enter ".concat(i, " number"));

    if (isNaN(number) || !number) {
      alert('Enter a numerical value');
      break;
    }

    var positive = 0;
    var negative = 0;
    var zero = 0;
    var even = 0;
    var odd = 0;

    if (number % 2 === 0) {
      even++;
    } else {
      odd++;
    }

    if (number == 0) {
      zero++;
    }

    if (number > 0) {
      positive++;
    } else {
      negative++;
    }
  }

  if (!number) {
    return false;
  } else {
    alert("You have entered ".concat(positive, " positive numbers, ").concat(negative, " negative numbers and ").concat(zero, " zeros. Of these, ").concat(even, " are even numbers and ").concat(odd, " are odd numbers."));
  }
}

function daysWeek() {
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var numberDay = 0;

  while (confirm("".concat(days[numberDay], ". Do you want to see the next day?"))) {
    numberDay = (numberDay + 1) % days.length;
  }
}

function guessNumber() {
  var array = [];
  var start = 0;

  while (start <= 100) {
    array.push(start++);
  }

  var searchNumber = prompt('Guess the number from 0 to 100');

  if (isNaN(searchNumber) || !searchNumber || searchNumber < 0 || searchNumber > 100) {
    guessNumber();
  }

  var left = -1;
  var right = array.length;

  while (right - left > 1) {
    var middle = Math.floor((left + right) / 2);

    if (searchNumber == array[middle]) {
      searchNumber == middle;
      alert("Yay! Your number is ".concat(middle, "!"));
      break;
    }

    if (confirm("If the number you guessed is <".concat(middle, " press \"OK\"\n    If the number you guessed is >").concat(middle, " press \"Cancel\""))) {
      right = middle;
    } else {
      left = middle;
    }
  }
}

var minValue = 0;
var maxValue = 100;
var steps = 0;

function guessNumber1(from, to) {
  var middle = parseInt((to - from) / 2 + from);
  var isSuccess = confirm("Your number is ".concat(middle));

  if (isSuccess) {
    console.log("Thanks for a game! We spent ".concat(steps, " steps"));
    return false;
  } else {
    steps++;
    var isLarger = confirm("Your number is larger than ".concat(middle));
    isLarger ? guessNumber1(middle, to) : guessNumber1(from, middle);
  }
}

function multiplicationTable() {
  for (var i = 2; i <= 9; i++) {
    for (var a = 2; a <= 9; a++) {
      console.log("".concat(i, " * ").concat(a, " = ").concat(i * a));
    }
  }
}

function nextDay() {
  var day = prompt('Enter the day');
  var month = prompt('Enter the month');
  var year = prompt('Enter the year');

  if (!day || isNaN(day) || day <= 0 || day > 31) {
    alert('Enter a day number from 1 to 31');
    return false;
  }

  if (!month || isNaN(month) || month <= 0 || month > 12) {
    alert('Enter a month number from 1 to 12');
    return false;
  }

  if (!year || isNaN(year) || year <= 0) {
    alert('Еnter the numeric correct value');
    return false;
  }

  year < 2000 && year.length == 2 ? year = "19".concat(year) : "".concat(year);
  var nextDay = new Date(year, month, day);
  nextDay.setDate(nextDay.getDate() + 1);
  var dayResult = nextDay.getDate();
  dayResult < 10 ? dayResult = "0".concat(dayResult) : "".concat(dayResult);
  var monthResult = nextDay.getMonth();
  monthResult < 10 ? monthResult = "0".concat(monthResult) : "".concat(monthResult);
  var yearResult = nextDay.getFullYear().toString();
  alert("Next day is ".concat(dayResult, ".").concat(monthResult, ".").concat(yearResult));
  console.log(dayResult, monthResult, yearResult); //all result in string
}

function caclDay() {
  var userDate = prompt('add date');
  var dateArray = userDate.split('.');
  var day = +dateArray[0];
  var month = +dateArray[1];
  var year = +dateArray[2];
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
  var nextDay = day + 1;
  var nextMonth = month;
  var nextYear = year;

  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (day >= 30) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day >= 31) {
        nextDay = 1;
        nextMonth++;
      }

      break;

    case 2:
      //умова для вискосних років
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        if (day === 29) {
          nextDay = 1;
          nextMonth++;
        } else {
          if (day >= 28) {
            nextDay = 1;
            nextMonth++;
          }
        }

        break;
      }

  }

  if (nextMonth > 12) {
    nextMonth = 1;
    nextDay = 1;
    nextYear++;
  }

  var addZero = function addZero(n) {
    return n < 10 ? "0".concat(n) : n;
  };

  console.log("Next date ".concat(addZero(nextDay), ".").concat(addZero(nextMonth), ".").concat(nextYear));
}