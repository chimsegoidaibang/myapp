import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { DataContext } from '../../Context/DataProvider'
import { AuthContext } from '../../Context/AuthProvider'
import { addDocument } from '../../firebase/services'

const AddRoomModal = () => {
    const {
        register,
        resetField,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const { isVisible, setIsVisible } = useContext(DataContext)
    const { uid } = useContext(AuthContext)

    const onSubmit = data => {
        addDocument('rooms', {
            ...data,
            members: [uid],
        })
        // reset Value when submited
        resetField('name')
        resetField('description')
        setIsVisible(false)
    }

    const handleCancel = () => {
        resetField('name')
        resetField('description')
        setIsVisible(false)
    }

    if (!isVisible) return

    return (
        <div className='modals'>
            <div className='modal-wrapper'>
                <div className='header'>
                    <h4 className='title'>Create Room</h4>
                    <p className='description'></p>
                </div>
                <div className='body'>
                    <form>
                        <div className='user-input-wrapper'>
                            <label>Room Name</label>
                            <input
                                className=''
                                type='text'
                                {...register('name')}
                                autoComplete='off'
                            />
                        </div>
                        <div className='user-input-wrapper'>
                            <label>Room Name</label>
                            <input
                                className=''
                                type='textarea'
                                {...register('description')}
                                autoComplete='off'
                            />
                        </div>
                    </form>
                </div>
                <div className='footer'>
                    <button>Cancel</button>
                    <button
                        className='btn primary'
                        onClick={handleSubmit(onSubmit)}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddRoomModal
