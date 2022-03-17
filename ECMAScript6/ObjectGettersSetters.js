// Getters and Setters

let attendance = {
    _list: [],
    set addName(name) {
        this._list.push(name);
    },
    get list() {
        return  this._list.join(', ');
    }
};

attendance.addName = 'Jonathan Jostar';
console.log(attendance.list);

attendance.addName = 'Joseph Jostar';
attendance.addName = 'Jotaro Kujo';
attendance.addName = 'Josuke Higashikata';
attendance.addName = 'Jolyne Cujoh';
attendance.addName = 'Giorno Giovanna';

console.log(attendance.list);


class Hike {
    constructor(distance, pace) {
        this.distance = distance;
        this.pace = pace;
    }

    get lengthInHours() {
        return `${this.calcLength()} hours`
    }
    calcLength() {
        return this.distance/this.pace;
    }
}

const mtTallac = new Hike(10, 2);
console.log((mtTallac.lengthInHours));