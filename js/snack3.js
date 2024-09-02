// Array di oggetti che rappresentano bici da corsa
const biciclette = [
  { nome: "Bianchi Oltre XR4", peso: 7.2 },
  { nome: "Cannondale SuperSix EVO", peso: 6.8 },
  { nome: "Specialized Tarmac SL7", peso: 6.7 },
  { nome: "Trek Emonda SLR", peso: 6.6 },
  { nome: "Pinarello Dogma F12", peso: 6.9 },
];

let biciLeggera = biciclette[0];

for (const bici of biciclette) {
  if (bici.peso < biciLeggera.peso) {
    biciLeggera = bici;
  }
}

const { nome, peso } = biciLeggera;
console.log(`La bici piu' leggera è: ${nome} con un peso di: ${peso} KG.`);
