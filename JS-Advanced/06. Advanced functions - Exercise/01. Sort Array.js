function solution(arrayOfNumbers, orderType) {
    let nums = arrayOfNumbers;

    let orders = {
        asc() {
            nums = nums.sort((a, b) => a - b);
        },
        desc() {
            nums = nums.sort((a, b) => b - a);
        }
    }

    function order(order) {
        orders[order]();
    }

    order(orderType);

    return nums;
}

let arr = [14, 7, 17, 6, 8];
let ascOrder = 'asc';
let descOrder = 'desc';
console.log(solution(arr, ascOrder));

