function solve() {
  let text = document.getElementById('input').value;
  let sentences = text
    .split('.')
    .map(x => x.length > 0 ? x + '.' : x)
    .filter(x => x.length > 0);
  let output = document.getElementById('output');
  let string = '';

  for (let i = 1; i <= sentences.length; i++) {
    string += sentences[i - 1];

    if (sentences.length < 3 && i === sentences.length) {
      let p = document.createElement('p');
      p.innerText = string;
      output.appendChild(p);
      string = '';
    }

    if (i % 3 == 0) {
      let p = document.createElement('p');
      p.innerText = string;
      output.appendChild(p);
      string = '';
    }

    if (i === sentences.length && string !== '') {
      let p = document.createElement('p');
      p.innerText = string;
      output.appendChild(p);
      string = '';
    }
  }
}