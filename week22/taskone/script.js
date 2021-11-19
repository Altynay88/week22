// Элементы
const yearInput = document.querySelector('#year-input');
const yearRange = document.querySelector('#year-range');
const inputs = document.querySelectorAll('input');

//Радиокнопки 
const radioBrand = document.querySelectorAll('input[name="brand"]');
const radioMobile = document.querySelectorAll('input[name="mobile"]');
const radioGear = document.querySelectorAll('input[name="gear"]');
const radioAutobody = document.querySelectorAll('input[name="autobody"]');

const basePrice = 50000;
const totalPriceElement = document.querySelector('#total-price')



// соединяем кнопку и ползунок 
yearRange.addEventListener('input', function () {
    yearInput.value = yearRange.value;
})

yearInput.addEventListener('input', function () {
    yearRange.value = yearInput.value;
})


function calculate() {
    let totalPrice = basePrice / parseInt(yearInput.value);
    for (const radio of radioBrand) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    for (const radio of radioMobile) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    for (const radio of radioGear) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }

    for (const radio of radioAutobody) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    }
    totalPriceElement.innerText = totalPrice;
}

try {
    calculate();
} catch (err) {
    alert("Сервер не доступен")
}


calculate();


for (const input of inputs) {
    input.addEventListener('input', function () {
        calculate();
    })
}