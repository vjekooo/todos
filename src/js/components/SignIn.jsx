
import React from 'react'
import { auth, googleAuthProvider } from '../database'
import user from '../../assets/images/user-48.png'

const SignIn = () => {
  return (
    <button
      onClick={() => auth.signInWithPopup(googleAuthProvider)}
    >
      <img src={user} />
      Sign In
    </button>
  )
}

export default SignIn
