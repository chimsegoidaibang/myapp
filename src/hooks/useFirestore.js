import {
    collection,
    onSnapshot,
    orderBy,
    query,
    querySnapshot,
    where,
} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'

export function useFirestore(collectionName, condition) {
    const [data, setData] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, collectionName)
        if (!condition.fieldName || !condition.value) return

        const q = query(
            collectionRef,
            where(condition.fieldName, condition.operator, condition.value),
            orderBy('createAt')
        )

        const unsubscribed = onSnapshot(q, querySnapshot => {
            const result = []
            querySnapshot.forEach(doc => {
                result.push({
                    ...doc.data(),
                    id: doc.id,
                })
            })
            setData(result)
        })

        return unsubscribed
    }, [collectionName, condition])

    return data
}
