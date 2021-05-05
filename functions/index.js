const functions = require("firebase-functions");
const algoliasearch = require('algoliasearch');
const admin = require('firebase-admin')
// const db = require('./../src/components/firebase/firebase')

admin.initializeApp();
const db = admin.firestore();

const APP_ID = "OVRPEM94W9";
const ADMIN_KEY = "6ed17ccfeec595ce7d9cd385bdf9d8af";

const client = algoliasearch(APP_ID, ADMIN_KEY);
const index = client.initIndex('products');

exports.addToIndex = functions.firestore.document('products/{productId}').onCreate(snapshot => {
    const data = snapshot.data();
    const objectID = snapshot.id;

    return index.saveObject({...data, objectID})
});

exports.updateIndex = functions.firestore.document('products/{productId}').onUpdate((change) => {
    const newData = change.after.data();
    const objectID = change.after.id;
    return index.saveObject({...newData, objectID})

});

exports.deleteFromIndex = functions.firestore.document('products/{productId}')
.onDelete(snapshot => index.deleteObject());


exports.sendCollectionToAlgolia = functions.https.onRequest(async (req, res) => {

	// This array will contain all records to be indexed in Algolia.
	// A record does not need to necessarily contain all properties of the Firestore document,
	// only the relevant ones. 
	const algoliaRecords = []

	// Retrieve all documents from the COLLECTION collection.
	const querySnapshot = await db.collection('products').get();
	querySnapshot.docs.forEach(doc => {
		const document = doc.data();
        // Essentially, you want your records to contain any information that facilitates search, 
        // display, filtering, or relevance. Otherwise, you can leave it out.
        const record = {
            ...document,
            objectID: doc.id,
        };

        algoliaRecords.push(record);
    });
	
	// After all records are created, we save them to 
	index.saveObjects(algoliaRecords, (_error, content) => {
        res.status(200).send("COLLECTION was indexed to Algolia successfully.");
    });
})



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
