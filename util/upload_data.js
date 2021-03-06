const { initializeApp, applicationDefault, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp, FieldValue } = require("firebase-admin/firestore");

const serviceAccount = require("../service_account.json");
const data = require('../data/posts.json')

async function run() {
  initializeApp({ credential: cert(serviceAccount) })
  const db = getFirestore()

  const collection = db.collection('posts')

  await Promise.all(data.map((post) => collection.add(post)))

  console.log('Finished uploading data')
}

run();
