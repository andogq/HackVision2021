const functions = require("firebase-functions");

exports.upload_image = functions.https.onCall((data, context) => {
    let { image } = data;

    if (image) {
        return {
            size: image.length
        };
    } else {
        return {
            error: true
        }
    }
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
