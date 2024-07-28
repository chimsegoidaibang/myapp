import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: 'AIzaSyBeksg7fBgn8VfH-bNqSDjXKFv8VzgGDpM',
    authDomain: 'color-bdaf5.firebaseapp.com',
    projectId: 'color-bdaf5',
    storageBucket: 'color-bdaf5.appspot.com',
    messagingSenderId: '870707551874',
    appId: '1:870707551874:web:eb56902bda2c72e84b9e9b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
connectAuthEmulator(auth, 'http://localhost:9099')

if (window.location.hostname === 'localhost') {
    connectFirestoreEmulator(db, 'localhost', 8080)
}
export { auth, db }
