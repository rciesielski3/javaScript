const createTable = (sqlArray) => {
  const table = document.createElement(`table`);
  table.style.border = `3px solid`;

  let areKeysDisplayed = false;
  let ID = 0;
  let trID = 1;
  const maxID = 4;

  for (const key in sqlArray) {
    const property = sqlArray[key];

    if (!areKeysDisplayed) {
      const tr = document.createElement(`tr`);
      tr.style.border = `1px solid`;
      table.appendChild(tr);

      const th = document.createElement(`th`);
      th.innerHTML = `ID`;
      th.style.border = `1px solid`;
      tr.appendChild(th);

      for (const key in property) {
        if (ID % 2 === 0 && ID <= maxID) {
          const th = document.createElement(`th`);
          th.innerHTML = key.toUpperCase();
          th.style.border = `1px solid`;
          tr.appendChild(th);
        }
        ID++;
      }

      const thCreated = document.createElement(`th`);
      thCreated.innerHTML = `CREATED AT`;
      thCreated.style.border = `1px solid`;
      tr.appendChild(thCreated);

      const thActions = document.createElement(`th`);
      thActions.innerHTML = `ACTIONS`;
      thActions.style.border = `1px solid`;
      tr.appendChild(thActions);

      areKeysDisplayed = true;
    }

    ID = 0;
    const tr = document.createElement(`tr`);
    table.appendChild(tr);

    for (const key in property) {
      const property = property[key];

      if (ID === 0) {
        const tdId = document.createElement(`td`);
        tdId.setAttribute(`data-cell`, `ID`);
        tdId.innerHTML = trID;
        tdId.style.border = `1px solid`;
        tr.appendChild(tdId);
        trID++;
      }

      if (ID % 2 === 0 && ID <= maxID) {
        if (property) {
          const td = document.createElement(`td`);
          td.setAttribute(`data-cell`, key.toUpperCase());
          td.innerHTML = property;
          td.style.border = `1px solid`;
          tr.appendChild(td);
        }
      }

      if (ID === 4) {
        const tdCreated = document.createElement(`td`);
        // tdCreated.setAttribute(`data-cell`, `CREATED AT`);
        const convertedDate = reverseString(property["created"]);
        tdCreated.innerHTML = convertedDate;
        tr.appendChild(tdCreated);
      }

      if (ID === 5) {
        const buttonAdd = createButtons(actionButtons[0], () =>
          showModal(property)
        );
        const buttonRemove = createButtons(actionButtons[1], () => {
          table.removeChild(trValue);
          updateDeleteButton(deleteButton);
        });
        const rowCheckbox = document.createElement(`input`);
        rowCheckbox.type = `checkbox`;

        const tdButtons = document.createElement(`td`);
        tdButtons.appendChild(buttonPlus);
        tdButtons.appendChild(buttonMinus);
        tdButtons.appendChild(rowCheckbox);
        tr.appendChild(tdButtons);
      }

      ID++;
    }
  }

  return table;
};
