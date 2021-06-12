function solve() {

  let textAreas = document.getElementsByTagName('textarea');
  let inputArea = textAreas[0];
  let outputArea = textAreas[1];
  let buttons = document.getElementsByTagName('button');
  let buttonGenerate = buttons[0];
  let buttonBuy = buttons[1];
  let tableBody = document.getElementsByTagName('tbody')[0];

  buttonGenerate.addEventListener('click', (e) => {
    let newFurniture = JSON.parse(inputArea.value);

    newFurniture.forEach(element => {
      let tableRow = document.createElement('tr');
      let furnitureObject = element;

      //Create table data
      let td;
      for (const [key, value] of Object.entries(furnitureObject)) {
        td = document.createElement('td');
        if (key === 'img') {
          let image = document.createElement('img');
          image.src = value;
          td.appendChild(image);
          tableRow.prepend(td);
        } else {
          let p = document.createElement('p');
          p.textContent = value;
          td.appendChild(p);
          tableRow.appendChild(td);
        }
      }

      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      td = document.createElement('td');
      td.appendChild(checkbox);

      //Append table data to new table row
      tableRow.appendChild(td);
      tableBody.appendChild(tableRow);
    });
  });

  buttonBuy.addEventListener('click', (e) => {
    let names = [];
    let price = 0;
    let decFactor = 0;

    for (let i = 0; i < tableBody.children.length; i++) {
      let product = tableBody.children[i];
      if (product.querySelector('input[type="checkbox"]:checked')) {
        let paragraphs = product.querySelectorAll('p');
        names.push(paragraphs[0].textContent);
        price += Number(paragraphs[1].textContent);
        decFactor += Number(paragraphs[2].textContent);
      }
    }

    let boughtFurniture = `Bought furniture: ${names.join(', ')}`;
    price = price.toFixed(2);
    decFactor /= names.length;

    outputArea.value = `${boughtFurniture}\nTotal price: ${price}\nAverage decoration factor: ${decFactor}`;
  });
}