const name = prompt("Як вас звати?");
const age = parseInt(prompt("Скільки вам років?"));
const smokes = confirm("Ви курите?");

if (age < 18 && !smokes) {
  console.log(`Молодець Андрій! Гарний приклад для своїх однолітків.`);
} else if (age < 18 && smokes) {
  console.log(`Андрій, а твої батьки знають про це?`);
} else if (age >= 18 && !smokes) {
  console.log(`Супер Андрій! Мабуть ще й спортом займаєшся!`);
} else if (age >= 18 && smokes) {
  console.log(`Що ж Андрій, це твій вибір. Але я не радив би курити.`);
} else {
  console.log("Невірні дані.");
}