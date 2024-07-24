import React from 'react'
import { auth } from '../../../firebase/config'
import { signInWithPopup } from 'firebase/auth'
import { FacebookAuthProvider } from 'firebase/auth'
import { useNavigate, redirect } from 'react-router-dom'
import { getAdditionalUserInfo } from 'firebase/auth'
import { addDocument, generateKeywords } from '../../../firebase/services'
import useResponsiveObserver from 'antd/es/_util/responsiveObserver'
const Signin = () => {
    const navigate = useNavigate()
    const loginformData = {
        title: 'Signin',
        description: '',
    }

    const handleFacebookSignin = async event => {
        event.preventDefault()
        const provider = new FacebookAuthProvider()
        const data = await signInWithPopup(auth, provider)
        const user = data.user
        const { displayName, email, photoURL, uid } = user
        const additionalUserInfo = getAdditionalUserInfo(data)
        if (additionalUserInfo.isNewUser) {
            addDocument('users', {
                displayName,
                email,
                photoURL,
                uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
            })
        }
    }

    return (
        <div className='signin-page'>
            <div
                id='background'
                className='background'></div>
            <div className='signin-form-wrapper'>
                <form>
                    <div className='header'>
                        <h1 className='main-text'>{loginformData.title}</h1>
                    </div>
                    <div className='body'>
                        <div className='user-input-wrapper'>
                            <label></label>
                            <input autoComplete='false' />
                        </div>
                        <div className='user-input-wrapper'>
                            <label></label>
                            <input autoComplete='false' />
                        </div>
                    </div>
                    <div className='footer'>
                        <div className='signin-method'>
                            <button id='username'>Sign in</button>
                            <button
                                id='facebook'
                                onClick={handleFacebookSignin}>
                                Sign in with facebook
                            </button>
                            <button id='google'>Sign in with Google</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin
