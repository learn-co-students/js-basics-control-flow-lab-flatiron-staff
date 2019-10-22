// Write your code in this file!

function scuberGreetingForFeet(feet) {
  let greeting
  if (feet <= 400) {
    greeting = 'This one is on me!';
  }
  if (feet > 2000) {
    greeting = 'I will gladly take your thirty bucks.';
  }
  if (feet > 2500) {
    greeting = 'No can do.'
  }
  return greeting
}

function ternaryCheckCity(city) {
  if (city === 'NYC') {
    return "Ok, sounds good."
  }
  else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return "Thank you so much."
  }
  if (tip === 'not as generous') {
    return "Thank you."
  }
  else {
    return "Bye."
  }
}