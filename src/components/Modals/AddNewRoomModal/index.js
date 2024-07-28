import React, { useContext } from 'react'
import { Modal, Form, Input } from 'antd'
import { DataContext } from '../../../context/DataContext'
import { AuthContext } from '../../../context/AuthContext'
import { serverTimestamp } from 'firebase/firestore'
import { createRoom } from '../../../firebase/services'
//
const AddNewRoomModal = () => {
    const {
        user: { uid },
    } = useContext(AuthContext)
    const { isOpenAddNewRoom, setIsOpenAddNewRoom } = useContext(DataContext)
    const [form] = Form.useForm()
    //
    const handleOK = () => {
        const formData = form.getFieldValue()
        const data = {
            ...formData,
            members: [uid],
            createAt: serverTimestamp(),
        }

        createRoom('rooms', data)
            .then(result => {
                if (result) {
                    setIsOpenAddNewRoom(false)
                }
            })
            .catch(error => {
                console.log('error', error)
            })
    }
    //
    const handleCancel = () => {
        setIsOpenAddNewRoom(false)
    }
    return (
        <Modal
            title='Add New Room'
            style={{
                top: 20,
            }}
            open={isOpenAddNewRoom}
            onOk={handleOK}
            onCancel={handleCancel}>
            <Form
                layout='vertical'
                form={form}>
                <Form.Item
                    label='Room Name'
                    name='roomname'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter room name!',
                        },
                    ]}>
                    <Input autoComplete='off' />
                </Form.Item>
                <Form.Item
                    label='Description'
                    name='description'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter room description!',
                        },
                    ]}>
                    <Input autoComplete='off' />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddNewRoomModal
