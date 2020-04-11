const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const output = document.getElementById('output');

const btn = document.getElementById('btn');

btn.addEventListener('click', calculatePizza);

function calculatePizza(e) {
	e.preventDefault();
	let order1 = parseInt(first.value);
	let order2 = parseInt(second.value);
	let order3 = parseInt(third.value);
	let order4 = parseInt(fourth.value);
	
	let pizzaOrder = order1 * 1 + order2 * 2 + order3 * 3 + order4 * 4;
	let large = 'Large Pizza';
	let medium = 'Medium Pizza';
	let small = 'Small Pizza';

	let order = pizzaOrder;
	if (order <= 4) {
		console.log('Small Pizza');
		output.innerText = `Buy One ${small}`;
	} else if (order > 4 && order <= 6) {
		output.innerText = `Buy One ${medium}`;
		console.log('Medium:Pizza');
	} else {
		if (order > 6 && order < 8) {
			output.innerText = `Buy One ${large}`;
			console.log('Large Pizza');
		}
		if (order >= 8) {
			if (order % 8 == 0) {
				let orderCount = order / 8;
				output.innerText = `Buy ${orderCount} ${large}`;
				console.log(`Buy ${orderCount} of ${large}`);
			}
			if (order % 8 == 7) {
				let orderCounts = order / 8;
				let realOrder = Math.floor(orderCounts);
				output.innerText = `Buy ${realOrder + 1} ${large}`;
				console.log(`Buy ${realOrder + 1}X of Pizza`);
			}
			if (order % 8 >= 5 && order % 8 <= 6) {
				let orderCoutn = order / 8;
				let orderCoutnFloor = Math.floor(orderCoutn);
				let orderCoutnCeil = Math.ceil(orderCoutn);
				let mediumPizza = orderCoutnCeil - orderCoutnFloor;
				output.innerText = `Buy ${orderCoutnFloor} ${large}  and ${mediumPizza} ${medium}`;
				console.log(`Buy ${orderCoutnFloor} ${large}  and ${mediumPizza} ${medium}`);
			}

			if (order % 8 < 5 && order % 8 > 0) {
				let orderCoutn = order / 8;
				let orderCoutnFloor = Math.floor(orderCoutn);
				let orderCoutnCeil = Math.ceil(orderCoutn);
				let smallPizza = orderCoutnCeil - orderCoutnFloor;
				output.innerText = `Buy ${orderCoutnFloor} ${large}  and ${smallPizza} ${small}`;
				console.log(`Buy ${orderCoutnFloor} ${large}  and ${smallPizza} ${small}`);
			}
		}
	}
}
