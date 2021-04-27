function getPieceOfPie(arrayOfFlavors, firstTargetFlavor, secondTargetFlavor) {
    
    let firstIndex = arrayOfFlavors.indexOf(firstTargetFlavor);
    let secondIndex = arrayOfFlavors.indexOf(secondTargetFlavor);
    let slicedArray = arrayOfFlavors.slice(firstIndex, secondIndex + 1);
    return slicedArray;
}

let arrayOfFlavors = ['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'];

let firstTargetFlavor = 'Key Lime Pie';
let secondTargetFlavor = 'Lemon Meringue Pie';

// let arrayOfFlavors = ['Apple Crisp',
//     'Mississippi Mud Pie',
//     'Pot Pie',
//     'Steak and Cheese Pie',
//     'Butter Chicken Pie',
//     'Smoked Fish Pie'];

// let firstTargetFlavor = 'Pot Pie';
// let secondTargetFlavor = 'Smoked Fish Pie';

getPieceOfPie(arrayOfFlavors, firstTargetFlavor, secondTargetFlavor);