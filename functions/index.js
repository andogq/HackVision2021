const functions = require("firebase-functions");
const https = require("https");
const vision = require("@google-cloud/vision");

exports.upload_image = functions.https.onCall(async (data, context) => {
    let { image } = data;

    if (image) {
        const buffer = Buffer.from(image, "base64");
        
        const client = new vision.ImageAnnotatorClient();

        const [ result ] = await client.labelDetection(buffer);
        console.log(result);
        const labels = result.labelAnnotations;

        return labels;
    } else return { error: true };
});
