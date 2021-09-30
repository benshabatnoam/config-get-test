const functions = require("firebase-functions");

// this line below causing an error (comment it out for successful deploy)
const username = functions.config().user.name;

exports.helloWorld = functions.https.onRequest((request, response) => {
    // BUT this line below doesn't cause an error
    const username = functions.config().user.name;
    response.send(`Hello from ${username}!`);
});
