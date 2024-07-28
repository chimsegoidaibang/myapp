import React from 'react'
import { handleFacebookLogin } from '../../firebase/services'

const Signin = () => {
    return (
        <section className='signin-page'>
            <div className='container'>
                <div className='user-form half'>
                    <div className='header'>
                        <img
                            className='logo'
                            src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp'
                            alt='logo'></img>
                        <h1 className='title'>We are the lotus team</h1>
                    </div>
                    <div className='body'>
                        <form>
                            <div className='form-item'>
                                <input placeholder='username' />
                            </div>
                            <div className='form-item'>
                                <input placeholder='password' />
                            </div>
                            <div className='form-item'>
                                <button className='btn primary'>Sign In</button>
                            </div>
                        </form>
                    </div>
                    <div className='footer'>
                        <button
                            className='btn'
                            onClick={handleFacebookLogin}>
                            Sign in with Facebook
                        </button>
                        <button className='btn'>Sign in with Google</button>
                    </div>
                </div>
                <div className='background-gradient half'></div>
            </div>
        </section>
    )
}

export default Signin
