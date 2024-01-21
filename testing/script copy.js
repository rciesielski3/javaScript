import { data } from "./data.js";

const SHOW = "Show Current Model";
const HIDE = "Hide Current Model";

const buttons = document.getElementById("buttons");
const leftBottomButton = document.getElementById("leftBottomButton");
const rightBottomButton = document.getElementById("rightBottomButton");
const currentModelPlaceholder = document.getElementById("model");
const bottomMenu = document.getElementById("bottomMenu");
const showModelButton = document.getElementById("show_model");
const tableContentContainer = document.getElementById("table_container");

showModelButton.innerHTML = SHOW;
currentModelPlaceholder.style.visibility = "hidden";
bottomMenu.style.visibility = "hidden";

let currentModel = null;
let showCurrentModel = false;

const additionalHeaders = ["Created at", "Action"];
const actionButtons = ["bin", "Second"];
const leftNameButton = ["<=="];
const rightNameButton = ["==>"];

const keys = Object.keys(data);

function handleShowModelButtonClick(event) {
  showModelButton.innerHTML = showCurrentModel ? SHOW : HIDE;
  showCurrentModel != showCurrentModel;
  if (currentModel) {
    if (showCurrentModel) {
      currentModelPlaceholder.style.visibility = "visible";
      bottomMenu.style.visibility = "visible";
      showModelButton.innerHTML = HIDE;
      showCurrentModel = false;
    } else {
      currentModelPlaceholder.style.visibility = "hidden";
      bottomMenu.style.visibility = "hidden";
      showModelButton.innerHTML = SHOW;
      showCurrentModel = true;
    }
  } else {
    currentModelPlaceholder.style.visibility = "visible";
    currentModelPlaceholder.innerHTML = "First choose the model!";
    showModelButton.innerHTML = HIDE;
  }
}

showModelButton.addEventListener("click", handleShowModelButtonClick);

// document.getElementByID("clickMe").addEventListener("click", removeRow(element));

// function handleButtonClick(event) {
//   const model = event.target.innerHTML;
//   console.log("event.target.innerHTML ", model);
//   currentModel = data[model];
//   currentModelPlaceholder.innerHTML = JSON.stringify(currentModel);
//   showCurrentModel = true;
// }

function removeRow() {
  console.log("delete tr");
  console.log("delete tr", $(this));
  $(this).closest("tr").remove();
}

/*to refactor
const buttonMinus = createButton(`-`, () => {
  table.removeChild(trValue);
  updateDeleteButton(deleteButton);
});
*/

keys.forEach((key) => {
  const button = document.createElement("button");
  button.innerHTML = key;
  button.addEventListener("click", handleButtonClick);
  buttons.appendChild(button);
});

const nameImput = document.getElementById("name");

function changeInput(event) {
  console.log(event.target.value);
}

// nameImput.addEventListener("keyup", changeInput);

// function createInput(text, idName) {
//   const input = document.createElement("input");
//   input.setAttribute("type", text);
//   const parent = document.getElementById(idName);
//   parent.appendChild(input);
// }

function handleButtonClick(event) {
  const model = event.target.innerHTML;
  currentModel = data[model];
  currentModelPlaceholder.innerHTML = JSON.stringify(currentModel);
  showCurrentModel = true;
  createTableAndInsert(currentModel);
  leftBottomButton.innerHTML = "";
  rightBottomButton.innerHTML = "";
  createButtons(leftNameButton, leftBottomButton);
  createButtons(rightNameButton, rightBottomButton);
}

function reverseString(data) {
  data = data.slice(0, 10);
  return data.split("-").reverse().join("-");
}

const createButtons = (name, idName, onClick) => {
  const button = document.createElement(`button`);
  button.innerHTML = name;
  button.addEventListener(`click`, onClick);
  idName.appendChild(button);
};

// function createButtons(Array, idName, onClick) {
//   for (let i = 0; i < Array.length; i++) {
//     const button = document.createElement("button");
//     button.setAttribute("id", Array[i]);
//     button.addEventListener(`click`, onClick);
//     button.innerText = Array[i];
//     idName.appendChild(button);
//   }
// }

function createTableAndInsert(sqlArray) {
  tableContentContainer.innerHTML = "";
  var table = document.createElement("table");
  var tr = document.createElement("tr"); // Header row
  var th = document.createElement("th"); //column
  th.appendChild(document.createTextNode("ID"));
  tr.appendChild(th);

  for (var i = 0; i < 4; i++) {
    th = document.createElement("th"); //column
    var text = document.createTextNode(Object.keys(sqlArray[i])[i]); //cell
    th.appendChild(text);
    tr.appendChild(th);
  }

  for (let j = 0; j < additionalHeaders.length; j++) {
    th = document.createElement("th"); //column
    th.appendChild(document.createTextNode(additionalHeaders[j]));
    tr.appendChild(th);
  }
  table.appendChild(tr);

  for (let k = 0; k < sqlArray.length; k++) {
    tr = document.createElement("tr"); // row
    tr.setAttribute("id", k);
    tr.appendChild(document.createElement("td"));
    const headers_data = Object.keys(currentModel[0]).slice(0, 4);
    headers_data.forEach((key) => {
      var td = document.createElement("td");
      td.innerHTML = currentModel[k][key];
      tr.appendChild(td);
    });
    let td = document.createElement("td");
    let convertedDate = reverseString(currentModel[k]["created"]);
    td.innerHTML = convertedDate;
    tr.appendChild(td);

    td = document.createElement("td");
    tr.appendChild(td);

    createButtons(actionButtons[0], td, $(this).closest("tr").remove());
    createButtons(actionButtons[1], td);

    table.appendChild(tr);
  }
  tableContentContainer.appendChild(table);
}
