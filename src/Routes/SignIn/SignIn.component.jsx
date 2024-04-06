/* eslint-disable no-unused-vars */
import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from "../../utils/fireBase.uils";
import SignUpForm from "../../components/SignUp/SignUpForm.component";


const SignIn = () => {
  
  const logInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sign In page</h1>
      <button onClick={logInGoogleUser}>Google</button>
      <SignUpForm/>
    </>
  );
};

export default SignIn;
