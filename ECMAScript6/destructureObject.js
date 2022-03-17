// Object destructuring

// Before
// const sandwich = {
//     title: 'Veggie Vietnamese Sub',
//     price: 6,
//     description: 'Baguette sandwich',
//     ingredients: [
//         'bread',
//         'mayo',
//         'cilantro',
//         'pickled carrots',
//         'tofu',
//         'veggie ham',
//         'soy sauce',
//     ]
// };

// console.log(sandwich.title);
// console.log(sandwich.price);

// After

const {title, price} = {
    title: 'Veggie Vietnamese Sub',
    price: 6,
    description: 'Baguette sandwich',
    ingredients: [
        'bread',
        'mayo',
        'cilantro',
        'pickled carrots',
        'tofu',
        'veggie ham',
        'soy sauce',
    ]
};

console.log(title);
console.log(price);


const vacation = {
    destination: 'Italy',
    travelers: 2,
    activity: 'sightseeing',
    cost: 'a lot'
}

function marketing({destination, activity}) {
    return `Come to ${destination} and do some ${activity}`;
}

console.log(marketing(vacation));
