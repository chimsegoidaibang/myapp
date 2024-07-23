import React from 'react'
import { auth } from '../../../firebase/config'
import { signInWithPopup } from 'firebase/auth'
import { FacebookAuthProvider } from 'firebase/auth'
import { useNavigate, redirect } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()
    const loginformData = {
        title: 'Signin',
        description: '',
    }

    const handleFacebookSignin = event => {
        event.preventDefault()
        const provider = new FacebookAuthProvider()
        signInWithPopup(auth, provider)
            .then(result => {
                // const user = result.user
                // console.log(user)
            })
            .catch(error => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error.customData.email
                // The AuthCredential type that was used.
                const credential =
                    FacebookAuthProvider.credentialFromError(error)

                // ...
            })
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
