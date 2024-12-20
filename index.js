
const turkishSayings = require('./messages');

function generateSaying() {
    const randomIndex = Math.floor(Math.random() * turkishSayings.length);
    return turkishSayings[randomIndex];
}

console.log(generateSaying());
