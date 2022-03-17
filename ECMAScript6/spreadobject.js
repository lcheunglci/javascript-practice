const daytime = {
    breakfast: 'oatmeal',
    lunch: 'peanut butter and jelly sandwich'
}

const nighttime = "curry and rice";
const backpackingMeals = {
    ...daytime,
    nighttime
};

console.log(backpackingMeals);