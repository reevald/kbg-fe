"use strict";

import './component/list-predict';
import './component/item-predict';
import sendDataToPredict from './api-handler';

const elemImage = document.getElementById("elemImage");
const elemInputImage = document.getElementById("elemInputImage");
const elemListPredict = document.querySelector("list-predict");
const elemDetailPredict = document.getElementById("detailPredict");

const elemScoreYou = document.getElementById("scoreYou");
const elemEmojiYou = document.getElementById("emojiYou");
const elemScoreBot = document.getElementById("scoreBot");
const elemEmojiBot = document.getElementById("emojiBot");

const score = {
  you: 0,
  bot: 0
}

const emojiConverter = (id) => {
  // Rule: (1) Paper, (2) Rock, (3) Scissors
  switch (id) {
    case 0:
      return "✋";
    case 1:
      return "✊";
    case 2:
      return "✌️";
    default:
      return "NaN";
  }
}

const judgeGame = (idYou, idBot) => {
  if (idYou == idBot) return;
  if ((idYou == 0 && idBot == 1) || 
      (idYou == 1 && idBot == 2) || 
      (idYou == 2 && idBot == 0)) {
    score.you += 1;
  } else {
    score.bot += 1;
  }
}

const gameHandler = (arrPredict) => {
  if (!Array.isArray(arrPredict)) {
    alert("Sistem gagal memproses! mohon coba kembali dengan gambar yang berbeda.");
    return;
  }

  arrPredict.sort((x, y) => y.confidence - x.confidence);
  const randIdBot = Math.floor(arrPredict.length * Math.random());

  elemEmojiYou.innerText = emojiConverter(arrPredict[0].id);
  elemEmojiBot.innerText = emojiConverter(randIdBot);

  judgeGame(arrPredict[0].id, randIdBot);

  elemScoreYou.innerText = score.you;
  elemScoreBot.innerText = score.bot;
}


elemInputImage.addEventListener("change", () => {
  if (!elemInputImage.files || !elemInputImage.files[0]) return;

  const fileReader = new FileReader();

  fileReader.addEventListener("load", (event) => {
    elemImage.src = event.target.result;
    elemEmojiYou.innerText = "";
    elemEmojiBot.innerText = "";
    elemListPredict.innerHTML = "";
    sendDataToPredict(event.target.result, elemListPredict)
      .then((arrPredict) => gameHandler(arrPredict));
  })

  fileReader.readAsDataURL(elemInputImage.files[0]);
});

elemDetailPredict.addEventListener("click", () => {
  const display = elemListPredict.style.display;
  elemListPredict.style.display = display == 'none' ? 'block' : 'none';
});