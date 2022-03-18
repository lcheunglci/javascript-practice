//  Arrow Functions on objects
// before
// let person = {
//     first: 'Angle',
//     hobbies: ['Bike', 'Hike', 'Snowboarding'],
//     printHobbies: function() {
//         this.hobbies.forEach(function (hobby) {
//             let string = `${this.first} like to ${hobby}`;
//             console.log(string);
//         })
//     }
// }

// let person = {
//     first: 'Angle',
//     hobbies: ['Bike', 'Hike', 'Snowboarding'],
//     printHobbies: function() {
//         let _this = this;
//         this.hobbies.forEach(function (hobby) {
//             let string = `${_this.first} like to ${_this.hobby}`;
//             console.log(string);
//         })
//     }
// }

let person = {
    first: 'Angle',
    hobbies: ['Bike', 'Hike', 'Snowboarding'],
    printHobbies: function() {
        this.hobbies.forEach((hobby) => {
            let string = `${this.first} like to ${hobby}`;
            console.log(string);
        })
    }
}

person.printHobbies();