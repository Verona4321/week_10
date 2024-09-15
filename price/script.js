let quantity = 2;
let price = 15000000;
function calculateTotalPrice(quantity, price) {
    return quantity*price;
}

TotalPrice = calculateTotalPrice(quantity, price);

function eRussian(TotalPrice) {
    return TotalPrice.toLocaleString('ru-RU');
}

function showTotalPrice() {
    alert(`Стоимость покупки: ${eRussian(TotalPrice)} рублей`);
}
