let multiplier = 1.00;
let interval;
let crashed = false;
let playing = false;
let cashedOut = false;

const multiplierDisplay = document.getElementById('multiplier');
const betBtn = document.getElementById('betBtn');
const cashoutBtn = document.getElementById('cashoutBtn');
const resultDisplay = document.getElementById('result');

function startGame() {
  multiplier = 1.00;
  crashed = false;
  playing = true;
  cashedOut = false;
  resultDisplay.innerText = "";
  multiplierDisplay.innerText = multiplier.toFixed(2) + "x";
  cashoutBtn.disabled = false;

  const crashPoint = Math.random() * 8.5 + 1.5;

  interval = setInterval(() => {
    multiplier += 0.05;
    multiplierDisplay.innerText = multiplier.toFixed(2) + "x";

    if (multiplier >= crashPoint) {
      clearInterval(interval);
      crashed = true;
      cashoutBtn.disabled = true;
      if (!cashedOut) {
        resultDisplay.innerText = "💥 Crashed at " + multiplier.toFixed(2) + "x — You Lost!";
      }
      playing = false;
    }
  }, 100);
}

betBtn.onclick = () => {
  if (!playing) {
    startGame();
  }
};

cashoutBtn.onclick = () => {
  if (playing && !crashed) {
    clearInterval(interval);
    cashedOut = true;
    playing = false;
    resultDisplay.innerText = "✅ Cashed out at " + multiplier.toFixed(2) + "x — You Win!";
    cashoutBtn.disabled = true;
  }
};
