// para criar um Set, utilizamos o construtor Set, que opcionalmente aceita um array como argumento
const set = new Set([1, 2, 3]);

set.add(4);
console.log(set.has(4));
set.delete(3);
console.log(set.size);
set.clear();

for(const item of set) {
    console.log(item);
}