let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses => {
        for (let response of responses) {
            console.log(`${response.url}: ${response.status}`)
        }
        return responses;
    })
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(users => users.forEach(user => console.log(user.name)))



const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);

console.log(p);


setTimeout(() => {
    console.log("the queue is now empty");
    console.log(p);
});