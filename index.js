function saturdayFun (activity="roller-skate") {
return `This Saturday, I want to ${roller-skate}!`
}
function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*") {
    return function(parameter="special") {
        return `You are ${string}${parameter}${string}!`
    }
}

let Calculator = {
    add: function(num5, num6) {
        return num5 + num6
    },
    subtract: function(num1, num2) {
        return num5 - num6
    },
    multiply: function(num5, num6) {
        return num5 * num6
    },
    divide: function(num5, num6) {
        return num5 / num6
    }
}

function actionApplyer(startingInteger, arrayOfFunctions) {
    let num = startingInteger

    for (let i = 0; i < arrayOfFunctions.length; i++) {
        num = arrayOfFunctions[i](num)
        }
    return num
}