// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi
// e falli subiti e stampiamo tutto in console.
// *BONUS*
// Stampare in pagina oltre che in console!

const squadre = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
];

squadre.forEach((squadra) => {
  squadra.falliSubiti = getRandomNumber(1, 50);
  squadra.puntiFatti = getRandomNumber(30, 150);
});

console.log("Secondo array", squadre);

const riepilogoSquadre = squadre.map(({ nome, falliSubiti }) => ({
  nome,
  falliSubiti,
}));

console.log(riepilogoSquadre);



