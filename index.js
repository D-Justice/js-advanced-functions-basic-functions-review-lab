function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

let Calculator = {add: function(a, b) {return a + b;}, subtract: function(){return 1 - 3;}, multiply: function(){return 1 * 3;}, divide: function() { return 10 / 5;}};


function actionApplyer(startInt = 0, arrFunc) {
    let test = startInt;
    for (let i = 0; i < (arrFunc.length); i++) {
        test = arrFunc[i](test);
    }
    return test;
}


