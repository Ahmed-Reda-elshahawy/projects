// Maximax //
function Maximax() {
    let values = [];
    let final_value = document.querySelector(".result .value");

    for (let i = 1; i <= 3; i++) {
        let row = document.querySelectorAll(`.row-${i} td input`);
        let arrayOfElements = [];

        row.forEach((col) => {
            let num = parseInt(col.value);
            arrayOfElements.push(num);
        });
        values.push(Math.max(...arrayOfElements));
    }
    let f_val = `Maximax: ( ${Math.max(...values)} )`;
    let span = document.createElement("span");
    span.append(f_val);
    final_value.append(span);
}

// EquallyLikely
function EquallyLikely() {
    let values = [];
    let final_value = document.querySelector(".result .value");

    for (let i = 1; i <= 3; i++) {
        let row = document.querySelectorAll(`.row-${i} td input`);
        let sum = 0;

        row.forEach((col) => {
            let num = parseInt(col.value);
            sum += num;
        });
        values.push((sum / 3));
        EquallyLikely_val = Math.max(...values);
    }
    let f_val = `Equally Likely: ( ${EquallyLikely_val} )`;
    let span = document.createElement("span");
    span.append(f_val);
    final_value.append(span);
}

// Maximin //
function Maximin() {
    let values = [];
    let final_value = document.querySelector(".result .value");

    for (let i = 1; i <= 3; i++) {
        let row = document.querySelectorAll(`.row-${i} td input`);
        let arrayOfElements = [];

        row.forEach((col) => {
            let num = parseInt(col.value);
            arrayOfElements.push(num);
        });
        values.push(Math.min(...arrayOfElements));
    }
    let f_val = `Maximin: ( ${Math.max(...values)} )`;
    let span = document.createElement("span");
    span.append(f_val);
    final_value.append(span);
}


// Minimax //
function Minimax() {
    let values = [];
    let final_value = document.querySelector(".result .value");

    for (let i = 1; i <= 3; i++) {
        let row = document.querySelectorAll(`.row-${i} td input`);
        let arrayOfElements = [];

        row.forEach((col) => {
            let num = parseInt(col.value);
            arrayOfElements.push(num);
        });
        values.push(Math.max(...arrayOfElements));
    }
    let f_val = `Minimax: ( ${Math.round(Math.min(...values))} )`;
    let span = document.createElement("span");
    span.append(f_val);
    final_value.append(span);
}



// Minimax Regret//
function MinimaxRegret() {
    let values = [];
    let final_value = document.querySelector(".result .value");
    let arr_one = [];
    let arr_two = [];
    let arr_three = [];

    for (let j = 1; j <= 3; j++) {
        for (let i = 1; i <= 3; i++) {
            let row = document.querySelector(`.row-${i} .col-${j} input`);
            let num = parseInt(row.value);
            if (j == 1) {
                arr_one.push(num);
            }
            else if (j == 2) {
                arr_two.push(num);
            }
            else {
                arr_three.push(num);
            }
        }
    }

    let new_arr1 = [];
    let new_arr2 = [];
    let new_arr3 = [];

    let max_1 = Math.max(...arr_one);
    arr_one.forEach((num) => {
        num = Math.abs(max_1 - num);
        new_arr1.push(num);
    });

    let max_2 = Math.max(...arr_two);
    arr_two.forEach((num) => {
        num = Math.abs(max_2 - num);
        new_arr2.push(num);
    });

    let max_3 = Math.max(...arr_three);
    arr_three.forEach((num) => {
        num = Math.abs(max_3 - num);
        new_arr3.push(num);
    });
    // console.log(new_arr1);
    // console.log(new_arr2);
    // console.log(new_arr3);

    let arr_1 = [new_arr1[0], new_arr2[0], new_arr3[0]];
    let arr_2 = [new_arr1[1], new_arr2[1], new_arr3[1]];
    let arr_3 = [new_arr1[2], new_arr2[2], new_arr3[2]];
    let num1 = Math.max(...arr_1);
    let num2 = Math.max(...arr_2);
    let num3 = Math.max(...arr_3);
    values = [num1, num2, num3];
    let f_val = `Minimax Regret: ( ${Math.round(Math.min(...values))} )`;
    let span = document.createElement("span");
    span.append(f_val);
    final_value.append(span);
}



let EMV_val;

// Expected monetary method //
function EMV() {
    let values = [];
    let final_value = document.querySelector(".result .value");

    for (let i = 1; i <= 3; i++) {
        let row = document.querySelectorAll(`.row-${i} td input`);
        let arrayOfElements = [];
        let f_arr = [];
        let prop = document.querySelectorAll(`.probability .row td input`);
        let prop1 = parseFloat(prop[0].value);
        let prop2 = parseFloat(prop[1].value);
        let prop3 = parseFloat(prop[2].value);

        row.forEach((col) => {
            let num;
            num = parseInt(col.value);
            arrayOfElements.push(num);
        });
        f_arr.push(arrayOfElements[0] * prop1 + arrayOfElements[1] * prop2 + arrayOfElements[2] * prop3);
        values.push(...f_arr);
    }
    let f_val = `EMV: ( ${Math.round(Math.max(...values))} )`;
    let span = document.createElement("span");
    span.append(f_val);
    final_value.append(span);
    EMV_val = Math.round(Math.max(...values));
}


// Expected oppertunity loss //
function EOL() {
    let values = [];
    let final_value = document.querySelector(".result .value");
    let arr_one = [];
    let arr_two = [];
    let arr_three = [];

    for (let j = 1; j <= 3; j++) {
        for (let i = 1; i <= 3; i++) {
            let row = document.querySelector(`.row-${i} .col-${j} input`);
            let num = parseInt(row.value);
            if (j == 1) {
                arr_one.push(num);
            }
            else if (j == 2) {
                arr_two.push(num);
            }
            else {
                arr_three.push(num);
            }
        }
    }

    let new_arr1 = [];
    let new_arr2 = [];
    let new_arr3 = [];

    let max_1 = Math.max(...arr_one);
    arr_one.forEach((num) => {
        num = Math.abs(max_1 - num);
        new_arr1.push(num);
    });

    let max_2 = Math.max(...arr_two);
    arr_two.forEach((num) => {
        num = Math.abs(max_2 - num);
        new_arr2.push(num);
    });

    let max_3 = Math.max(...arr_three);
    arr_three.forEach((num) => {
        num = Math.abs(max_3 - num);
        new_arr3.push(num);
    });

    // loop to multiply each element in each prop //
    for (let i = 1, j = 0; i <= 3, j <= 2; i++, j++) {
        let f_arr = [];
        let prop = document.querySelectorAll(`.probability .row td input`);
        let prop1 = parseFloat(prop[0].value);
        let prop2 = parseFloat(prop[1].value);
        let prop3 = parseFloat(prop[2].value);
        f_arr.push(new_arr1[j] * prop1 + new_arr2[j] * prop2 + new_arr3[j] * prop3);
        values.push(...f_arr);
    }

    // // Add values to body //
    let f_val = `EOL Regret: ( ${Math.round(Math.min(...values))} )`;
    let span = document.createElement("span");
    span.append(f_val);
    final_value.append(span);
}


// Evpi
function Evpi() {
    let final_value = document.querySelector(".result .value");
    col_1 = [];
    col_2 = [];
    col_3 = [];
    for (let j = 1; j <= 3; j++) {
        for (let i = 1; i <= 3; i++) {
            let row = document.querySelector(`.row-${i} .col-${j} input`);
            let num = parseInt(row.value);
            if (j == 1) {
                col_1.push(num);
            }
            else if (j == 2) {
                col_2.push(num);
            }
            else {
                col_3.push(num);
            }
        }
    }
    let val_1 = Math.max(...col_1);
    let val_2 = Math.max(...col_2);
    let val_3 = Math.max(...col_3);
    // probability
    let prop = document.querySelectorAll(`.probability .row td input`);
    let prop1 = parseFloat(prop[0].value);
    let prop2 = parseFloat(prop[1].value);
    let prop3 = parseFloat(prop[2].value);
    evwpi = (val_1 * prop1 + val_2 * prop2 + val_3 * prop3);
    // // Add values to body //
    EMV();
    let f_val = `EVPI: ( ${Math.round(evwpi - EMV_val)} )`;
    let span = document.createElement("span");
    span.append(f_val);
    final_value.append(span);
}


//// calc btn ////
let btn1 = document.querySelector(".Maximax-btn");
let btn2 = document.querySelector(".Maximin-btn");
let btn3 = document.querySelector(".Minimax-btn");
let btn4 = document.querySelector(".Minimax-regret");
let btn5 = document.querySelector(".emv");
let btn6 = document.querySelector(".eol");
let btn7 = document.querySelector(".Equally-likely");
let btn8 = document.querySelector(".EVPI");

btn1.addEventListener("click", () => {
    Maximax();
});
btn2.addEventListener("click", () => {
    Maximin();
});
btn3.addEventListener("click", () => {
    Minimax();
});
btn4.addEventListener("click", () => {
    MinimaxRegret();
});
btn5.addEventListener("click", () => {
    EMV();
});
btn6.addEventListener("click", () => {
    EOL();
});
btn7.addEventListener("click", () => {
    EquallyLikely();
});
btn8.addEventListener("click", () => {
    Evpi();
});