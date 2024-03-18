class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      // pega o código ASCII de cada caractere e soma ao total
      total += key.charCodeAt(i);
    }
    // realiza modulação para que o valor não seja maior que o this.size, que é 50
    return total % this.size;
  }

  // Big-O: O(n)
  // Average case complexity: O(1)
  set(key, value) {
    const index = this.hash(key);
    /* caso o array já contenha algum dado, como no seguinte caso:

       [ <17 empty items>, [ [ 'name', 'Bruce' ] ], <32 empty items> ]

       o valor de bucket será a referência a:

       [ [ 'name', 'Bruce' ] ]
    */
    const bucket = this.table[index];
    // [ <50 empty items> ]
    if (!bucket) {
      this.table[index] = [[key, value]];
      // [ <17 empty items>, [ [ 'name', 'Bruce' ] ], <32 empty items> ]
    } else {
      // aqui ocorre a verificação se o par já existe a partir da chave
      const sameKeyItem = bucket.find((item) => item[0] === key);
      // se ela existir, o valor será alterado
      if (sameKeyItem) {
        // altera o valor de um par chave-valor já existente.
        sameKeyItem[1] = value;
        // se não existir, ou seja, se for undefined, ocorrerá um push no array.
      } else {
        // adiciona um valor novo
        bucket.push([key, value]);
      }
    }
    // this.table[index] = value;
  }

  // Big-O: O(n)
  // Average case complexity: O(1)
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
    // return this.table[index];
  }

  // Big-O: O(n)
  // Average case complexity: O(1)
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
    // this.table[index] = undefined;
  }

  display() {
    console.log("+----------+-------------------------------------+");
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        let pairs = this.table[i]
          .map((pair) => `${pair[0]}: ${pair[1]}`)
          .join(", ");
        console.log(
          "|",
          i.toString().padStart(8, " "),
          "|",
          pairs.padStart(35, " "),
          "|"
        );
      }
    }
    console.log("+----------+-------------------------------------+");
  }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 25);
table.display();

console.log(table.get("name"));

// a seguinte instrução está sobrescrevendo o par de chave "name", pois contém os mesmos pares de caracteres que "name", e o nome disso é colisão
table.set("mane", "Clark");
table.set("name", "Diana");
table.remove("name");
table.display();
