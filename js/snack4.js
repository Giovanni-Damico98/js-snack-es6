// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi
// e falli subiti e stampiamo tutto in console.
// *BONUS*
// Stampare in pagina oltre che in console!
// Seleziona l'elemento del DOM con id "riepilogo-squadre"
// Questo sarà il contenitore in cui visualizzeremo il riepilogo delle squadre
const riepilogo = document.getElementById("riepilogo-squadre");

// Array di oggetti che rappresentano squadre di calcio
// Ogni squadra ha un nome e inizialmente puntiFatti e falliSubiti sono impostati a 0
const squadre = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
];

// Funzione per generare numeri casuali
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Aggiorna l'array con numeri casuali per puntiFatti e falliSubiti
// Utilizza forEach per iterare su ogni squadra e assegnare nuovi valori casuali
squadre.forEach((squadra) => {
  squadra.falliSubiti = getRandomNumber(1, 50);
  squadra.puntiFatti = getRandomNumber(30, 150);
});

// Stampa l'array aggiornato in console
console.log("Secondo array", squadre);

// Crea un nuovo array che contiene solo nome e falliSubiti per ogni squadra
// Utilizza map e destructuring per estrarre le proprietà desiderate
const riepilogoSquadre = squadre.map(({ nome, falliSubiti }) => ({
  nome,
  falliSubiti,
}));

// Stampa il nuovo array in console
console.log(riepilogoSquadre);

// Crea una stringa HTML per visualizzare il riepilogo delle squadre
// Inizialmente è una stringa vuota
let riepilogoHTML = "";

// Itera su ogni squadra nel riepilogoSquadre e costruisce una lista HTML
// Ogni elemento della lista mostra il nome della squadra e il numero di falli subiti
riepilogoSquadre.forEach(({ nome, falliSubiti }) => {
  riepilogoHTML += `<li>${nome}: ${falliSubiti} falli subiti</li>`;
});

// Inserisce la stringa HTML creata nel contenitore selezionato
riepilogo.innerHTML = riepilogoHTML;
