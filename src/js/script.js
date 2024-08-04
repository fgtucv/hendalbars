import floverstamlade from "../temeplades/flour.hbs";
import flowers from "../dataFlovers.json";

const floversList = floverstamlade({flowers});

console.log(floversList);

document.body.insertAdjacentHTML("beforeend", floversList)