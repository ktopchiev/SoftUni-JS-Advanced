function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  if (namingConvention === 'Pascal Case') {
    result.innerHTML = toPascalCase(text);
  } else if (namingConvention === 'Camel Case') {
    result.innerHTML = toCamelCase(text);
  } else {
    result.innerHTML = 'Error!'
  }

  function toPascalCase(string) {
    text = string.split(' ')
      .reduce((str, current) => {
        str += (current.substr(0, 1).toUpperCase() + current.substr(1).toLowerCase());
        return str;
      }, '');
    return text;
  }

  function toCamelCase(string) {
    string = string.split(' ');
    let firstWord = string[0].toLowerCase();
    string.shift();
    text = toPascalCase(string.join(' '));
    text = firstWord + text;
    return text;
  }
}