import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import {
    collection,
    query,
    orderBy,
    where,
    onSnapshot,
    QuerySnapshot,
} from 'firebase/firestore'

const useFirestore = (collectionName, condition) => {
    const [documents, setDocuments] = useState([])
    useEffect(() => {
        let collectionRef = collection(db, collectionName)

        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length)
                return
        }
        const q = query(
            collectionRef,
            where(
                condition.fieldName,
                condition.operator,
                condition.compareValue
            ),

            orderBy('createAt')
        )

        const unsubscibed = onSnapshot(q, QuerySnapshot => {
            const documents = []
            QuerySnapshot.forEach(doc => {
                documents.push({ ...doc.data(), id: doc.id })
            })
            setDocuments(documents)
        })

        return unsubscibed
    }, [collection, condition])

    return documents
}

export default useFirestore
