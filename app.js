var city = ["Bishkek", "Los Angeles", "Chicago", "New York", "Houston", "Dallas", "Philadelphia", "Seattle"];
console.log(city)
var city2 = [];
var city3 = [];

for (var i = 0; i < city.length; i++) {
    if (city[i].length > 6) {
        city2.push(city[i]);
    }
    if (city[i][0]===('s') || city[i][0]===('S')) {
        city3.push(city[i]);
    }
}

console.log("Города с названиями больше 6 символов:");
console.log(city2);

console.log("Города с буквой 's' или 'S' в названии:");
console.log(city3);

var color = prompt("Введите:");

switch (color) {
    case 'красный':
        alert('Стоп');
        break;
    case 'желтый':
        alert('Приготовьтесь');
        break;
    case 'зеленый':
        alert('Идите');
        break;
    default:
        alert('введите цвета светофора (красный, желтый или зеленый)');
        break;
}

