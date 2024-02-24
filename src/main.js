const myBill = document.getElementById('bill');
const percent = document.querySelectorAll('.select-tip li');
const tipAmount = document.getElementById('tip-amount');
const total = document.getElementById('total');
const resetBtn = document.querySelector('button');
const people = document.getElementById('people');
const custom = document.getElementById('custom');

resetBtn.addEventListener('click', resetData);
myBill.addEventListener('input', calculate);
people.addEventListener('input', checkInputs);
custom.addEventListener('input', calculate);



// calculate percent bill 
function calculate() {

	if (myBill.value !== '') {
		let result;

		if (custom.value > 0) {

			result = (custom.value * myBill.value) / 100;

			if (myBill.value !== '' && people.value > 0) {

				let amount = +result / +people.value;
				showResult(result, amount);
			}

		} else {

			percent.forEach(e => {
				e.addEventListener('click', function (e) {
					custom.value = '';

					result = (e.target.getAttribute('data-index') * myBill.value) / 100;

					if (myBill.value !== '' && people.value > 0) {

						let amount = +result / +people.value;
						showResult(result, amount);

						document.querySelectorAll('.select-tip .active').forEach(e => {
							e.classList.remove('active');
						})

						e.currentTarget.classList.add('active');
					}
				})
			})
		}
	}

}

// show the result of bill
function showResult(result, amount) {

	tipAmount.innerHTML = '$' + parseFloat(amount).toFixed(2);
	total.innerHTML = '$' + parseFloat(+result + +myBill.value).toFixed(2);
	resetBtn.style.opacity = '1';

}
// reset all data
function resetData() {

	resetBtn.style.opacity = '0.3';
	tipAmount.innerHTML = '$0.00';
	total.innerHTML = '$0.00';
	myBill.value = '';
	people.value = '';
	custom.value = '';
	document.getElementById('wrong').innerHTML = "";

	document.querySelectorAll('.select-tip .active').forEach(e => {
		e.classList.remove('active');
	})

}
// check number of people if equal to zero
function checkInputs() {

	if (people.value <= 0) {
		people.classList.add('wrong');
		document.getElementById('wrong').innerHTML = "can't be zero";
	} else {
		people.classList.remove('wrong');
		document.getElementById('wrong').innerHTML = "";
	}

}






