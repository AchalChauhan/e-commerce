/* eslint-disable no-unused-vars */
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  creatUserDocumentFromAuth,
} from "../../utils/fireBase.uils";

const SignIn = () => {
  const logInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user);
  };
  const logGoogleRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
    // const userDocRef = await creatUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sign In page</h1>
      <button onClick={logInGoogleUser}>Google</button>
      <button onClick={logGoogleRedirect}>Google Redirect</button>
    </>
  );
};

export default SignIn;
