//Input 00
let input ='[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]'

function fromJSONtoHMTLTable(input) {
    let objects = JSON.parse(input);
    let firstObject = objects[0];
    let html = '<table>\n';

    html += `<tr>${Object.keys(firstObject).map(o => `<th>${o}</th>`).join('')}</tr>\n`;

    html += '</table>';


    
    // console.log(html);
}

fromJSONtoHMTLTable(input);
{/* <table>
   <tr><th>Name</th><th>Score</th></tr>
   <tr><td>Stamat</td><td>5.5</td></tr>
   <tr><td>Rumen</td><td>6</td></tr>
   </table> */}
