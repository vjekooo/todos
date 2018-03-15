
import React from 'react'
import { auth, googleAuthProvider } from '../database'

const SignIn = () => {
  return (
    <button
      onClick={() => auth.signInWithPopup(googleAuthProvider)}
    >
      Sign In
    </button>
  )
}

export default SignIn
