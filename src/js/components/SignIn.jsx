
import React from 'react'
import { auth, googleAuthProvider } from '../database'

const SignIn = () => {
  return (
    <div className="sign-in">
      <button
        onClick={() => auth.signInWithPopup(googleAuthProvider)}
      >
        Sign In
      </button>
    </div>
  )
}

export default SignIn
