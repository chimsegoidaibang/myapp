import React, { useEffect, useMemo, useState } from 'react'
import { DataContext } from '../../Context/DataProvider'
import { useContext } from 'react'
import { debounce } from 'lodash'
import { Avatar, Select, Form, Spin, Button } from 'antd'
import {
    collection,
    doc,
    getDocs,
    limit,
    orderBy,
    query,
    updateDoc,
    where,
} from 'firebase/firestore'
import { db } from '../../firebase/config'

function DebounceSelect({
    fetchOptions,
    debounceTimeout = 300,
    curMembers,
    ...props
}) {
    const [fetching, setFetching] = useState(false)
    const [options, setOptions] = useState([])

    const debounceFetcher = useMemo(() => {
        const loadOptions = value => {
            setOptions([])
            setFetching(true)
            fetchOptions(value, curMembers).then(newOptions => {
                setOptions(newOptions)
                setFetching(false)
            })
        }

        return debounce(loadOptions, debounceTimeout)
    }, [debounceTimeout, fetchOptions, curMembers])

    useEffect(() => {
        // clear when unmount
        return () => {
            setOptions([])
        }
    }, [])

    return (
        <Select
            labelInValue
            filterOption={false}
            onSearch={debounceFetcher}
            notFoundContent={fetching ? <Spin size='small' /> : null}
            {...props}
            options={options}
        />
    )
}

const fetchUserList = async (username, curMembers) => {
    console.log('fetching user', username)
    const collectionRef = collection(db, 'users')
    const compare = where('keywords', 'array-contains', username?.toLowerCase())
    const litmit = 20

    const q = query(
        collectionRef,
        compare,
        orderBy('displayName'),
        limit(litmit)
    )

    const querySnapshot = await getDocs(q)

    const result = querySnapshot.docs.map(doc => ({
        label: doc.data().displayName,
        value: doc.data().uid,
        photoURL: doc.data().photoURL,
    }))

    console.log(result)
}

const InviteMembersModal = () => {
    const { isInviteVisible, setIsInviteVisible, currentRoom, seletedRoom } =
        useContext(DataContext)
    const [value, setValue] = useState([])
    const handleCancel = () => {
        setIsInviteVisible(false)
    }
    const handleInvite = async () => {
        const newMembersUpdate = [
            ...currentRoom.members,
            ...value.map(val => val.value),
        ]
    }
    if (!isInviteVisible) return

    return (
        <div className='modals'>
            <div className='modal-wrapper top'>
                <div className='header'>
                    <h4 className='title'>Add new member to room</h4>
                </div>
                <div className='body'>
                    <DebounceSelect
                        mode='multiple'
                        value={value}
                        placeholder='Select users'
                        fetchOptions={fetchUserList}
                        onChange={newValue => {
                            setValue(newValue)
                        }}
                        style={{
                            width: '100%',
                        }}
                        curMembers={currentRoom.members}
                    />
                </div>
                <div className='footer'>
                    <Button
                        type='default'
                        onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button
                        type='primary'
                        onClick={handleInvite}>
                        Invite
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default InviteMembersModal
