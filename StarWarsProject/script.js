import { data } from "./data.js";
// const SHOW = "Show Current Model";
// const HIDE = "Hide Current Model";
const displayNone = "none";
const displayBlock = "block";

const content = document.getElementById("content");
const buttons = document.getElementById("buttons");
const leftBottomButton = document.getElementById("leftBottomButton");
const rightBottomButton = document.getElementById("rightBottomButton");
const searchContainer = document.getElementById("searchContainer");
const searchId = document.getElementById("searchId");
const searchIdBtn = document.getElementById("searchIdBtn");
const searchName = document.getElementById("searchName");
const searchNameBtn = document.getElementById("searchNameBtn");
// const currentModelPlaceholder = document.getElementById("model");
const bottomMenu = document.getElementById("bottomMenu");
const bottomInput = document.getElementById("bottomInput");
// const showModelButton = document.getElementById("show_model");
const tableContentContainer = document.getElementById("table_container");
const showModalContainer = document.getElementById("showModalContainer");
const showModalWindow = document.getElementById("showModal");
const closeModalButton = document.getElementById("closeModal");
const deleteButton = document.getElementById("deleteCheckedButton");
const initialContainer = document.getElementById("initialContainer");
const vaderButton = document.getElementById("vaderButton");
const jokeButton = document.getElementById("jokeButton");
const refreshBtn = document.getElementById("refreshBtn");
const elementLimit = document.getElementById("elementLimit");
const table = document.getElementById("mainTable");
const noResultsRow = document.createElement("tr");
const noResultsCell = document.createElement("td");

const jokeUrl = "https://api.chucknorris.io/jokes/random?name=starwars";

bottomMenu.style.visibility = "hidden";
searchContainer.style.visibility = "hidden";
deleteButton.style.visibility = "hidden";

let word = "";
let row = [];
let filteredArray = [];
let currentModel = null;
let showCurrentModel = false;

const elemetsToClear = [
  tableContentContainer,
  leftBottomButton,
  rightBottomButton,
  searchIdBtn,
  searchNameBtn,
];
const additionalHeaders = ["Created at", "Action"];
const actionButtons = ["ⓘ", "🗑"];
const bottomButtons = ["ᐊ", "ᐅ"];

const keys = Object.keys(data);

closeModalButton.addEventListener(`click`, () => {
  playSound("pause");
  showModalContainer.style.display = displayNone;
  content.classList.remove("blur-background");
});

keys.forEach((key) => {
  const button = document.createElement("button");
  button.innerHTML = key;
  button.addEventListener("click", handleButtonClick);
  buttons.appendChild(button);
});

function handleButtonClick(event) {
  for (let i = 0; i < elemetsToClear.length; i++) {
    elemetsToClear[i].innerHTML = "";
  }
  const model = event.target.innerHTML;
  currentModel = data[model];
  createTableAndInsert(currentModel);
  updateTable();
  leftBottomButton.appendChild(
    createButtons(bottomButtons[0], "lBottomBtn", () => {
      prevPage();
    })
  );
  rightBottomButton.appendChild(
    createButtons(bottomButtons[1], "rBottomBtn", () => {
      nextPage();
    })
  );
  elementLimit.addEventListener("change", () => {
    console.log("elementLimit addEventListener: ", elementLimit.value);
    updateTable();
    updateTableUsingSelect(elementLimit.value);
  });
  initialContainer.style.visibility = "hidden";
  searchId.placeholder = "Range 0 - " + currentModel.length;
  searchIdBtn.appendChild(
    createButtons(`Search using ID`, "searchIdBtn", () => {
      filterTablebyID(searchId.value);
    })
  );

  if (currentModel.length > 0) {
    const first = currentModel[0];
    const firstObject = Object.keys(first);
    const firstValue = Object.values(first);
    if (firstObject.length > 0) {
      const firstKey = firstObject[0];
      searchNameBtn.appendChild(
        createButtons(`Search by ` + firstKey, "searchNameBtn", () => {
          tableContentContainer.innerHTML = "";
          filterTablebyName(firstKey, searchName.value);
        })
      );
    }
    if (firstValue.length > 0) {
      const valueName = firstValue[0];
      searchName.placeholder = "Eg. " + valueName;
    }
  }
  return currentModel;
}

function reverseString(data) {
  data = data.slice(0, 10);
  return data.split("-").reverse().join("-");
}

const createButtons = (name, tagName, onClick) => {
  const button = document.createElement(`button`);
  button.innerHTML = name;
  button.setAttribute("id", tagName);
  button.addEventListener(`click`, onClick);
  return button;
};

function showModal(property) {
  if ((showModalContainer.style.display = displayNone)) {
    showModalContainer.style.display = displayBlock;
    content.classList.add("blur-background");
    showModalWindow.innerText = "";
    const closeModalButton = createButtons(`Close`, "close", () => {
      playSound("pause");
      showModalContainer.style.display = displayNone;
    });

    const tableModal = document.createElement(`table`);
    const trTitle = document.createElement(`tr`);
    const thKeyTitle = document.createElement(`th`);
    const thValueTitle = document.createElement(`th`);

    thKeyTitle.innerHTML = `Key`;
    trTitle.appendChild(thKeyTitle);
    thValueTitle.innerHTML = `Value`;
    trTitle.appendChild(thValueTitle);
    tableModal.appendChild(trTitle);

    for (const key in property) {
      const trModal = document.createElement(`tr`);
      const tdKeyModal = document.createElement(`td`);
      const tdValueModal = document.createElement(`td`);
      tdKeyModal.innerHTML = key;
      tdValueModal.innerHTML = property[key];
      trModal.appendChild(tdKeyModal);
      trModal.appendChild(tdValueModal);
      tableModal.appendChild(trModal);
    }
    showModalWindow.appendChild(tableModal);
    refreshBtn.addEventListener("click", getJoke);
  }
}

function createTableAndInsert(sqlArray) {
  const table = document.createElement(`table`);
  let displayKeys = false;
  let ID = 0;
  let trID = 1;
  const maxID = 4;

  for (const key in sqlArray) {
    const property = sqlArray[key];
    if (!displayKeys) {
      const tr = document.createElement(`tr`);
      const th = document.createElement(`th`);

      table.appendChild(tr);
      th.innerHTML = `ID`;
      tr.appendChild(th);

      for (const key in property) {
        if (ID % 2 === 0 && ID <= maxID) {
          const th = document.createElement(`th`);
          th.innerHTML = key.toUpperCase();
          tr.appendChild(th);
        }
        ID++;
      }

      const thCreated = document.createElement(`th`);
      const thActions = document.createElement(`th`);

      thCreated.innerHTML = `CREATED AT`;
      tr.appendChild(thCreated);
      thActions.innerHTML = `ACTIONS`;
      tr.appendChild(thActions);

      displayKeys = true;
    }

    ID = 0;
    const tr = document.createElement(`tr`);
    table.appendChild(tr);

    for (const key in property) {
      const propertyValue = property[key];

      if (ID === 0) {
        const tdId = document.createElement(`td`);
        tdId.innerHTML = trID;
        tr.appendChild(tdId);
        trID++;
      }

      if (ID % 2 === 0 && ID <= maxID) {
        if (propertyValue) {
          const td = document.createElement(`td`);
          td.innerHTML = propertyValue;
          tr.appendChild(td);
        }
      }

      if (ID === 4) {
        const tdCreated = document.createElement(`td`);
        const convertedDate = reverseString(property["created"]);

        tdCreated.innerHTML = convertedDate;
        tr.appendChild(tdCreated);
      }

      if (ID === 5) {
        const buttonInfo = createButtons(actionButtons[0], "info", () => {
          showModal(property);
        });
        const buttonRemove = createButtons(actionButtons[1], "remove", () => {
          table.removeChild(tr);
        });

        const newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.id = "newCheckbox";

        const tdButtons = document.createElement(`td`);
        tdButtons.appendChild(buttonInfo);
        tdButtons.appendChild(buttonRemove);
        tdButtons.appendChild(newCheckbox);
        tr.appendChild(tdButtons);
      }
      ID++;
    }
  }
  table.setAttribute("id", "mainTable");
  tableContentContainer.appendChild(table);
  bottomMenu.style.visibility = "visible";
  searchContainer.style.visibility = "visible";
  elementLimit.value = "-";
}

function deleteElement(element) {
  row.forEach((item) => item.remove());
  deleteButton.innerHTML = "";
  row = [];
  deleteButton.style.visibility = "visible";
}

function checkedCheck(property) {
  const checkboxes2 = document.querySelectorAll('input[type="checkbox"]');
  checkboxes2.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      let toRemove;
      if (checkbox.checked === true) {
        toRemove = checkbox.closest("tr");
        row.push(toRemove);
      } else {
        toRemove = checkbox.closest("tr");
        row.pop(toRemove);
      }
      if (row.length > 0) {
        deleteButton.style.visibility = "visible";
        deleteButton.textContent = `Delete selected?`;
      } else {
        deleteButton.style.visibility = "none";
      }
    });
  });
}

function getJoke() {
  content.classList.add("blur-background");
  showModalContainer.style.display = "block";
  showModalContainer.style.width = "45%";
  showModalContainer.style.height = "30%";
  showModalContainer.style.display = "flex";
  showModalContainer.style.alignItems = "center";
  showModalContainer.style.color = "white";
  showModalWindow.innerText = "Loading...".toUpperCase();

  async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    if (response) {
      hideloader();
    }
    show(data);
  }
  getapi(jokeUrl);

  function hideloader() {
    showModalWindow.innerText = "";
  }

  function show(data) {
    console.log(data.value);
    const joke = data.value;
    showModalWindow.innerText = joke.toUpperCase();

    const refreshBtn = createButtons(`Next joke?`, "nextJokeBtn", () => {
      getJoke();
    });
    showModalWindow.appendChild(refreshBtn);
  }
}

function playSound(state) {
  let music = new Audio("audio/imperial_march.wav");
  console.log(state);
  if (state === "play") {
    music.play();
  } else {
    console.log("state pause");
    music.pause();
  }
}

function vaderModal() {
  content.classList.add("blur-background");
  showModalContainer.style.display = "block";
  showModalContainer.style.width = "45%";
  showModalContainer.style.height = "30%";
  showModalContainer.style.display = "flex";
  showModalContainer.style.alignItems = "center";
  showModalContainer.style.color = "white";
  const part1 = "Do you want to feel the power?";
  const part2 = "Hit the PLAY button.";
  const part3 = "or";
  const part4 = "enter VADER on your keyboard";
  showModalWindow.innerText =
    part1 + "\n" + part2 + "\n" + part3 + "\n" + part4;
  showModalWindow.appendChild(
    createButtons(`Play`, "playBtn", () => {
      playSound("play");
    })
  );
  window.addEventListener("keydown", (event) => {
    const pressedKey = event.key;
    word += pressedKey.toLowerCase();
    if (word.includes("vader")) {
      word = "";
      playSound("play");
    }
  });
}

function filterTablebyID(iDForDisplay) {
  const filterValue = parseInt(iDForDisplay);
  if (!isNaN(filterValue) && filterValue <= currentModel.length) {
    const table = document.getElementById("mainTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
      const rowId = parseInt(rows[i].cells[0].textContent);
      rows[i].style.display = rowId === filterValue ? "" : "none";
    }
  } else {
    // alert("Enter number from the range: 0 - " + currentModel.length);
    tableContentContainer.innerHTML = "";
    bottomMenu.style.visibility = "hidden";
    noResultsCell.textContent =
      "Enter number from the range: 0 - " + currentModel.length;
    noResultsRow.appendChild(noResultsCell);
    tableContentContainer.appendChild(noResultsRow);
  }
  searchId.value = "";
}

function filterTablebyName(firstKey, nameToDisplay) {
  tableContentContainer.innerHTML = "";
  const inputValue = nameToDisplay.toLowerCase();
  if (inputValue.length >= 2) {
    filteredArray = currentModel.filter((element) =>
      element[firstKey].toLowerCase().includes(inputValue)
    );
    createTableAndInsert(filteredArray);
    if (filteredArray.length < 1) {
      bottomMenu.style.visibility = "hidden";
      noResultsCell.textContent = "No matching results found.";
      noResultsRow.appendChild(noResultsCell);
      tableContentContainer.appendChild(noResultsRow);
    }
  } else if (inputValue.length < 2) {
    bottomMenu.style.visibility = "hidden";
    noResultsCell.textContent = "Enter at least 2 sign!";
    noResultsRow.appendChild(noResultsCell);
    tableContentContainer.appendChild(noResultsRow);
  }
  searchName.value = "";
}

function updateTableUsingSelect(value) {
  let table = document.getElementById("mainTable");
  if (value === "-") {
    tableContentContainer.innerHTML = "";
    createTableAndInsert(currentModel);
  }
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].style.display = i <= value ? "" : "none";
  }
}

let itemsPerPage; // Default value
let totalItems; // This will be dependent on your currentModel
let currentPage;

function updateTable() {
  // bottomInput.value = 1;

  itemsPerPage =
    elementLimit.value === "-"
      ? currentModel.length
      : parseInt(elementLimit.value);
  totalItems = currentModel.length; // Update totalItems based on currentModel length
  console.log("totalItems ", totalItems);
  currentPage = parseInt(bottomInput.value);

  const totalPages =
    itemsPerPage === "-" ? 1 : Math.ceil(totalItems / itemsPerPage);

  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  bottomInput.value = currentPage;
  console.log("bottomInput.value ", bottomInput.value);
  bottomInput.placeholder = `[${currentPage}] from ${totalPages}`;

  updateTableContent();
  updatePaginationButtons();
}

function updateTableContent() {
  let table = document.getElementById("mainTable");
  // table.innerHTML = "";

  console.log("currentModel.length ", currentModel.length);
  const startIdx = itemsPerPage === "-" ? 0 : (currentPage - 1) * itemsPerPage;
  const endIdx =
    itemsPerPage === "-" ? currentModel.length : currentPage * itemsPerPage;

  console.log("currentModel.length ", currentModel.length);
  console.log("currentPage * itemsPerPage ", currentPage * itemsPerPage);

  //   // for (let i = startIdx; i < endIdx && i < currentModel.length; i++) {
  //   //   const row = table.insertRow();
  //   //   const cell = row.insertCell(0);
  //   //   cell.textContent = currentModel[i].title; // Assuming title is a property in your currentModel
  //   // }

  /*
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
      const rowId = parseInt(rows[i].cells[0].textContent);
      rows[i].style.display = rowId === filterValue ? "" : "none";
  */
  const rows = table.getElementsByTagName("tr");
  for (let i = startIdx; i < endIdx && i < rows.length; i++) {
    // table.rows[i].style.display = i < value ? "" : "none";
    table.rows[i].style.display = i < itemsPerPage ? "" : "none";

    // const rowId = parseInt(rows[i].cells[0].textContent);
    rows[i].style.display = i < itemsPerPage ? "" : "none";
  }
}

function updatePaginationButtons() {
  const totalPages =
    itemsPerPage === "-" ? 1 : Math.ceil(totalItems / itemsPerPage);

  leftBottomButton.disabled = currentPage === 1;
  rightBottomButton.disabled = currentPage === totalPages;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updateTable();
  }
}

function nextPage() {
  const totalPages =
    itemsPerPage === "-" ? 1 : Math.ceil(totalItems / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    updateTable();
  }
}

tableContentContainer.addEventListener("click", () => {
  checkedCheck();
});
deleteButton.addEventListener("click", deleteElement);
jokeButton.addEventListener("click", () => {
  getJoke();
  initialContainer.style.visibility = "hidden";
});
vaderButton.addEventListener("click", () => {
  vaderModal();
  initialContainer.style.visibility = "hidden";
});
