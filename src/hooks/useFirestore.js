import React, { useEffect, useState } from 'react'

import { db } from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

const useFirestore = (collectionName, condition) => {
    const [documents, setDocuments] = useState([])
    useEffect(() => {
        const collectionRef = collection(db, collectionName)
        const q = query(
            collectionRef,
            where(
                condition.fieldName,
                condition.operator,
                condition.compareValue
            )
        )
        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                console.log('test')
                return
            }
        }

        const unsubscribed = onSnapshot(q, querySnapshot => {
            const documents = []
            querySnapshot.forEach(doc => {
                documents.push(doc.data())
            })
            setDocuments(documents)
        })

        return unsubscribed
    }, [collectionName, condition])

    return documents
}

export default useFirestore
