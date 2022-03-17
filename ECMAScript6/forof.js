// for of

for (const letter of 'Javascript') {
    console.log(letter);
}

let topics = ['javascript', 'node', 'css'];
for (const topic of topics) {
    console.log(topic);
}

let routes = new Map();
routes.set('HTML', 'topic/html');
routes.set('CSS', 'topic/css');
routes.set('JSON', 'topic/json');
routes.set('JWT', 'topic/jwt');

for (const topic of routes) {
    console.log(topic);
}
for (const topic of routes.keys()) {
    console.log(topic);
}
for (const route of routes.values()) {
    console.log(`The course description can be found at ${route}`);
}

for (const topic of routes.entries()) {
    console.log(topic);
}
