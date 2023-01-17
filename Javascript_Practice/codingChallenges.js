`use strict`
let markWeight = 78;
let markHeigh = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

markBMI = markWeight / (markHeigh ** 2);
console.log(markBMI)

johnBMI = johnWeight / (johnHeight ** 2);
console.log(johnBMI)

markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI)

if (markHigherBMI) {
    console.log(`Marks BMI is higher than John's`)
} else {
    console.log(`John's BMI is higher than Marks`)
}

if (markHigherBMI) {
    console.log(`Marks BMI (${markBMI}) is higher than John's BMI (${johnBMI})`)
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Marks BMI (${markBMI})`)
}

const dolphinsAvgScore = (96 + 108 + 89) / 3;
console.log(dolphinsAvgScore)
const koalasAvgScore = (88 + 91 + 110) / 3;
console.log(koalasAvgScore)

if (dolphinsAvgScore === koalasAvgScore && dolphinsAvgScore >= 100 && koalasAvgScore >= 100) {
    console.log("It is a draw!")
}
else if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
    console.log(`Dolphins win the Prize`)
}
else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= 100) {
    console.log(`Koalas Win the price`)
}
else {
    console.log(`Nobody wins the trophy`)
}

// 15% bill between 50 and 300 where 20% if different

const bill = 250;
const total = bill >= 50 && bill <= 300 ? bill * 1.15 : bill * 1.20;
console.log(`Your total is $${total}. Your bill was $${bill} and the ammount you tipped was $${total - bill}`);





