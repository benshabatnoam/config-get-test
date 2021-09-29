const functions = require("firebase-functions");
// const username = functions.config().user.name;
exports.helloWorld = functions.https.onRequest((request, response) => {
    const username = functions.config().user.name;
    response.send(`Hello from ${username}!`);
});
