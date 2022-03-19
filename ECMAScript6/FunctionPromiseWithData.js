// Promise example with data retrieval

// Previous data retrieval

// const spacePeople = () => {
//     return new Promise((resolves, rejects) => {
//         const api = 'http://api.open-notify.org/astros.json';
//         const request = new XMLHttpRequest();
//         request.open('GET', api);
//         request.onload = () => {
//             if (request.status === 200) {
//                 resolves(JSON.parse(request.response));
//             } else {
//                 rejects(Error(request.statusText));
//             }
//         };
//         request.onerror = (err) => rejects(err);
//         request.send();
//     })
// }

// spacePeople().then(
//     (spaceData) => console.log(spaceData),
//     err => console.error(new Error(`Can't load people with the following error: ${err}`))
// );

let getSpacePeople = () => fetch('http://api.open-notify.org/astros.json')
    .then((res) => res.json());

//getSpacePeople().then((data) => console.log(data));
// getSpacePeople().then(console.log);


let spaceNames = () => 
getSpacePeople()
  .then((json) => json.people)
  .then ((people) => people.map((p) => p.name))
  .then(names => names.join());

spaceNames().then(console.log);