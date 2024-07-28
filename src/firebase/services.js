import {
    setDoc,
    serverTimestamp,
    doc,
    collection,
    addDoc,
} from 'firebase/firestore'
import { auth, db } from './config'
import {
    FacebookAuthProvider,
    signOut,
    signInWithPopup,
    getAdditionalUserInfo,
} from 'firebase/auth'

export const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider()
    const user = await signInWithPopup(auth, provider)
    const newUser = getAdditionalUserInfo(user).isNewUser
    // create new user collection when first time sign in
    if (newUser) {
        const { displayName, email, photoURL, uid } = user.user
        const newUserData = {
            displayName,
            email,
            photoURL,
            uid,
            createAt: serverTimestamp(),
        }

        addDocument('users', newUserData, uid)
    }
}

export const handleLogout = () => {
    signOut(auth)
}

export const addDocument = async (collectionName, data, id) => {
    const docRef = await setDoc(doc(db, collectionName, id), data)
}

export const createRoom = async (collectionName = 'rooms', data) => {
    const docRef = await addDoc(collection(db, collectionName), data)
    console.log('Document written with ID: ', docRef.id)
    return docRef.id
}
