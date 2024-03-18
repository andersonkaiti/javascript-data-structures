// para criar um Map, utilizamos o construtor Map, que opcionalmente aceita um array como argumento. Os arrays devem conter arrays de tamanho 2 como elementos, em que o 1º é a chave e o segundo é o valor.
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.set("c", 3);
map.delete("c");
console.log(map.has("a"));
console.log(map.size);
map.clear();

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
