const log = console.log;

var _a = document.querySelector('.triangle__a');
var _b = document.querySelector('.triangle__b');
var _c = document.querySelector('.triangle__c');

var RES_1 = document.querySelector('.hyp');
var RES_2 = document.querySelector('.side');

var HYP = document.getElementById('hyp');
var SIDE_1 = document.getElementById('side_1');
var SIDE_2 = document.getElementById('side_2');

var BTN = document.querySelector('.btn');

SIDE_1.onchange = function() {
	_a.innerHTML = SIDE_1.value;
}

SIDE_2.onchange = function() {
	_b.innerHTML = SIDE_2.value;
}

HYP.onchange = function() {
	_c.innerHTML = HYP.value;

	if (_c.innerHTML != "") {
		RES_1.innerHTML = "";
		RES_1.innerHTML += "Hypotenuse: " + HYP.value;	
	}
}

btn.onclick = function pithagoras() {
	let a = SIDE_1.value;
	let b = SIDE_2.value;
	let c = HYP.value;
	
	a = Math.pow(a,2);
	b = Math.pow(b,2);
	c = Math.pow(c,2);

	if (c == "" && b != "" && a == "") {
		return;
	} else if (c == "" && b == "" && a != "") {
		return;
	} else if (c == "" && b == "" && a == "") {
		return;
	} else if (c != "" && a != "") {
		let res = c - a;
		let _final = Math.sqrt(res).toFixed(2);

		RES_2.innerHTML = "";
		RES_2.innerHTML += "Side: " + _final;

		_b.innerHTML = "";
		_b.innerHTML += _final;		

	} else if (c == "") {
		let res = a + b;
		let _final = Math.sqrt(res).toFixed(2);

		RES_1.innerHTML = "";
		RES_1.innerHTML += "Hypotenuse: " + _final;

		_c.innerHTML = "";
		_c.innerHTML += _final;
	}
}