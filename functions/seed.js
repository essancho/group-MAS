const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();
const fakeIt = () => {
    return db.collection('products').add({
        username: "sanjar",
        email: "hello@hello.com"
    })
}

Array(2).fill(0).forEach(fakeIt);