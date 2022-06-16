import data from "../data.json" assert { type: "json" };
const days = document.getElementsByClassName("day");
const arrDays = [].slice.call(days);

function getHigher() {
  const amounts = data.map((x) => (x = x.amount));
  const higherAmount = amounts.reduce((a, b) => {
    return Math.max(a, b);
  }, -Infinity);
  return higherAmount;
}

function getAmounts() {
  arrDays.map((day) => {
    const weekDay = day.textContent;
    const foundDay = data.find((x) => x.day === weekDay);
    const foundAmount = foundDay.amount;
    const valueDiv = document.createElement("div");
    valueDiv.classList.add("value-div");
    const higherAmount = getHigher();
    if (foundAmount == higherAmount) {
      valueDiv.style = `background-color: hsl(186, 34%, 60%); height: ${foundAmount * 3}px; width: 35px; border-radius: 4px;`;
    } else {
      valueDiv.style = `height: ${foundAmount * 3}px; width: 35px; border-radius: 4px;`;
    }
    day.prepend(valueDiv);
  });
}
getAmounts();
