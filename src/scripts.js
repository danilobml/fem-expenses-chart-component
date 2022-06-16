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

function getBars() {
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
      valueDiv.style = `height: ${foundAmount * 2}px; width: 35px; border-radius: 4px;`;
    }
    day.prepend(valueDiv);
    const displayValue = document.createElement("div");
    displayValue.textContent = `$${foundAmount}`;
    displayValue.style = "padding: 3px 5px; background-color: hsl(25, 47%, 15%); border-radius:4px; font-weight: 700; font-size: 0.75rem; color: hsl(27, 66%, 92%); position: absolute; top:-33px; left: -10px;";
    displayValue.classList.add("hide");
    valueDiv.prepend(displayValue);
  });
}
getBars();
