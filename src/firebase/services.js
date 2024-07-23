import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from './config'

export const addDocument = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), {
            ...data,
            createAt: serverTimestamp(),
        })
        console.log('Document written with ID: ', docRef.id)
    } catch (error) {
        console.error('Error adding document: ', error)
    }
}
