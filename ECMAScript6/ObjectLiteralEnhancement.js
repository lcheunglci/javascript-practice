// Object Literal Enhancement

// before
// function skier (name, sound) {
//     return {
//         name: name,
//         sound: sound,
//         powderYell: function () {
//             let yell = this.sound.toUpperCase();
//             console.log(`${yell}! ${yell}!`);
//         }
//     };
// }

// after
function skier (name, sound) {
    return {
        name,
        sound,
        powderYell: function () {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}!`);
        }
    };
}


console.log(skier("Sam", "woo").name);
console.log(skier("Sam", "woo").powderYell());
