// let a = [1, 2, 3];

function sum(a) {
    let sum = 0;

    a.forEach(element => {
        sum += Number(element);
    });

    console.log(sum);

    sum = 0;

    a.forEach(element => {
        sum += Number(1 / element);
    });
    
    console.log(sum);

    sum = '';

    a.forEach(element => {
        sum += element;
    });

    console.log(sum);

}

// sum(a);