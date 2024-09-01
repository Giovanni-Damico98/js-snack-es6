//DATI
const nomi = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "George Clooney",
  "Amal Clooney",
  "Fedez",
  "Amadeus",
  "Fiorello",
];
// ELABORAZIONE
const tavolo = "Tavolo VIP";
const listaOspiti = nomi.map((nome, i) => {
  const ospite = {
    nome: nome,
    tavolo: tavolo,
    posto: i + 1,
  };
  return ospite;
});
console.log(listaOspiti);
