import React from 'react'
import { signInWithGooglePopup } from '../../utils/fireBase.uils'

const SignIn = () => {

    const logInGoogleUser = async ()=>{
        const response = await signInWithGooglePopup();
        console.log(response)
    }

  return (
    <>
        <h1>Sign In page</h1>
        <button onClick={logInGoogleUser} >Google</button>
    </>
  )
}

export default SignIn
