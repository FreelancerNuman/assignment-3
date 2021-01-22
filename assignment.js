// kilometer To Meter
function kilometerToMeter(kilometer) {
  if (kilometer > 0) {
    var meter = kilometer * 1000;
  } else if (kilometer < 0) {
    console.log("Input Can't be a Negative Number");
  } else {
    console.log("Input can't be a Text");
  }
  return meter;
}
var resultInMeter = kilometerToMeter(3.5);
console.log(resultInMeter);

// Budget Calculator
function budgetCalculator(watchAmount, mobileAmount, laptopAmount) {
  if (watchAmount >= 0 && mobileAmount >= 0 && laptopAmount >= 0) {
    var totalWatchValue = 50 * watchAmount;
    var totalMobileValue = 100 * mobileAmount;
    var totalLaptopValue = 500 * laptopAmount;
  } else {
    console.log("Input can't be Negetive");
  }

  var totalBudget = totalWatchValue + totalMobileValue + totalLaptopValue;

  return totalBudget;
}
var resultOfInput = budgetCalculator(5, 5, 4);
console.log(resultOfInput);

// Hotel Cost
function hotelCost(stayAtHotel) {
  var cost = 0;
  if (stayAtHotel <= 10) {
    cost = stayAtHotel * 100;
  } else if (stayAtHotel <= 20) {
    var first10DaysCost = 10 * 100;
    var remainingDays = stayAtHotel - 10;
    var secondRemainingDaysCost = remainingDays * (100 - 20);
    cost = first10DaysCost + secondRemainingDaysCost;
  } else {
    var first10DaysCost = 10 * 100;
    var second10DaysCost = 10 * (100 - 20);
    var remainingDays = stayAtHotel - 20;
    var thridRemainingDaysCost = remainingDays * (100 - 50);
    cost = first10DaysCost + second10DaysCost + thridRemainingDaysCost;
  }
  return cost;
}
var hotelCostResult = hotelCost(23);
console.log(hotelCostResult);

// Mega Friend
function megaFriend(listOfFriend) {
  var bigName = "";
  for (var i = 0; i < listOfFriend.length; i++) {
    var currentName = listOfFriend[i];
    if (currentName.length > bigName.length) {
      bigName = listOfFriend[i];
    }
  }
  return bigName;
}

var friends = [
  "Abu Sayed Nayem",
  "Sarwar Ahmed",
  "Joyobrotho Bhattacharjee Tushar",
  "Mahbub",
  "Jhon",
  "Amith",
];

var bigNameResult = megaFriend(friends);
console.log(bigNameResult);
