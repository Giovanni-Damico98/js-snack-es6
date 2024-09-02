// //DATI
// const nomi = [
//   "Brad Pitt",
//   "Johnny Depp",
//   "Lady Gaga",
//   "Cristiano Ronaldo",
//   "Georgina Rodriguez",
//   "Chiara Ferragni",
//   "George Clooney",
//   "Amal Clooney",
//   "Fedez",
//   "Amadeus",
//   "Fiorello",
// ];
// // ELABORAZIONE
// const tavolo = "Tavolo VIP";
// const listaOspiti = nomi.map((nome, i) => {
//   const ospite = {
//     nome: nome,
//     tavolo: tavolo,
//     posto: i + 1,
//   };
//   return ospite;
// });
// console.log(listaOspiti);

// SECONDO ESERCIZIO
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente
// il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const studenti = [
  { id: 213, nome: "Marco della Rovere", voto: 78 },
  { id: 110, nome: "Paola Cortellessa", voto: 96 },
  { id: 250, nome: "Andrea Mantegna", voto: 48 },
  { id: 145, nome: "Gaia Borromini", voto: 74 },
  { id: 196, nome: "Luigi Grimaldello", voto: 68 },
  { id: 102, nome: "Piero della Francesca", voto: 50 },
  { id: 120, nome: "Francesca da Polenta", voto: 84 },
];

console.log(studenti);
// Studenti con voti superiori a 70
const miglioriStudenti = studenti.filter((studente) => studente.voto > 70);
console.log(miglioriStudenti);
// Studenti con voti superiori a 70 e con ID superiore a 120
const nuoviMiglioriStudenti = miglioriStudenti.filter(
  (studente) => studente.id > 120
);
console.log(nuoviMiglioriStudenti);
// Nome degli studenti in UpperCase
const targheStudenti = studenti.map((studente) => studente.nome.toUpperCase());
console.log(targheStudenti);
