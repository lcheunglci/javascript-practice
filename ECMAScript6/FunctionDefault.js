// Default values to functions

function add(x = 5, y = 6) {
    console.log(x + y);
}

add(1,2);
add();

function HaveFun(activityName = 'hiking', time = 3) {
    console.log(`Today I will go ${activityName} for ${time} hours.`);
}

HaveFun('biking', 2.5);
HaveFun();
