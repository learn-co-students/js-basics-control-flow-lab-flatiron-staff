// Write your code in this file!
function scuberGreetingForFeet(someValue) {
	let result
	if (someValue <= 400) {
		result = "This one is on me!"
	} else if (someValue > 2500) {
		result = "No can do."
	} else if (someValue > 2000) {
		result = 'I will gladly take your thirty bucks.'
	}

	return result

};


function ternaryCheckCity(city) {
	let response
	(city==='NYC') ? (response = 'Ok, sounds good.') : (response = 'No go.')
	return response;
};

function switchOnCharmFromTip(tip) {
	let response
	switch(tip) {
		case 'generous':
			response = 'Thank you so much.'
			break;
		case 'not as generous':
			response = 'Thank you.'
			break;
		default: 
			response = 'Bye.'
	};
	return response



};