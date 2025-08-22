// Объявление переменных товара
let productName = "Беспроводные наушники"; // название товара
let price = 150.00; // цена товара в долларах
let discount = 10; // скидка в процентах
let rating = 4.5; // рейтинг товара
let isAvailable = true; // наличие товара (boolean)

// Вычисление цены со скидкой
let discountedPrice = price - (price * discount / 100);

// Применение тернарного оператора для статуса наличия
let availabilityText = isAvailable ? "В наличии" : "Нет в наличии";

// Вывод информации о товаре в консоль
console.log("=== Карточка товара ===");
console.log("Название:", productName);
console.log("Цена:", price + "$");
console.log("Скидка:", discount + "%");
console.log("Цена со скидкой:", discountedPrice + "$");
console.log("Рейтинг:", rating, "из 5");
console.log("Наличие:", availabilityText);

// Проверка типов переменных
console.log("Тип переменной price:", typeof price);
console.log("Тип переменной isAvailable:", typeof isAvailable);
