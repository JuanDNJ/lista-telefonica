// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set, update } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { firebaseConfig } from '../config/index.js'

// Initialize Firebased
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log(database)
const refContactos = ref(database, 'users');
set(refContactos, {
    nombre: 'j',
    telefono: 'j',
})
export {
    app
}
