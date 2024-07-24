import React, { useEffect, useMemo, useState } from 'react'
import { DataContext } from '../../Context/DataProvider'
import { useContext } from 'react'
import { debounce } from 'lodash'
import { Avatar, Select, Form, Spin } from 'antd'
import {
    collection,
    doc,
    getDocs,
    limit,
    orderBy,
    query,
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
    let result = []
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
    return querySnapshot.docs
        .map(doc => ({
            label: doc.data().displayName,
            value: doc.data().uid,
            photoURL: doc.data().photoURL,
        }))
        .filter(opt => !curMembers.includes(opt.value))
}

const InviteMembersModal = () => {
    const { isInviteVisible, currentRoom } = useContext(DataContext)
    const [value, setValue] = useState([])
    const [form] = Form.useForm()

    console.log(currentRoom)

    if (!isInviteVisible) return

    return (
        <div className='modals'>
            <div className='modal-wrapper'>
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
                <div className='footer'></div>
            </div>
        </div>
    )
}

export default InviteMembersModal
