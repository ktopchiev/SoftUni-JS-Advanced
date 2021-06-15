function solution(inputArray) {
    
    let collection = [];

    let commandObject = {
        add: function (element) {
            collection.push(element)
        },
        remove(element) {
            collection = collection.filter(e => e !== element);
        },
        print: () => {
            console.log(collection.join(','));
        }
    }

    function doCommands(input) {
        input.forEach(element => {
            let [command, string] = element.split(' ');
            commandObject[command](string);
        });
    }

    doCommands(inputArray);
}


let input = ['add hello', 'add again', 'remove hello', 'add again', 'print'];
solution(input);