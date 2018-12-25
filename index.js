// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let greeting
  if (someValue < 400) {
    greeting = 'This one is on me!'
  } else if (someValue > 2500) {
    greeting = 'No can do.'
  } else if (someValue > 2000) {
    greeting = 'I will gladly take your thirty bucks.'
  }
  return greeting
}

function ternaryCheckCity(city) {
  let greeting
  if (city === "NYC") {
    greeting = "Ok, sounds good."
  } else {
    greeting = 'No go.'
  }
  return greeting
}

function switchOnCharmFromTip(value) {
  let greeting
  if (value === 'generous') {
    greeting = "Thank you so much."
  } else if (value === 'not as generous') {
    greeting = "Thank you."
  } else {
    greeting = "Bye."
  }
  return greeting

}
