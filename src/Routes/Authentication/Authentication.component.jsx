/* eslint-disable no-unused-vars */
import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from "../../utils/fireBase.uils";
import SignUpForm from "../../components/SignUp/SignUpForm.component";
import SignInForm from "../../components/SignIn/SignInForm.component";
import './Authentication.styles.scss'


const Authentication = () => {
  
  return (
    <>
      <h1>Sign In page</h1>
      <div className="authentication-container">
      <SignInForm/>
      <SignUpForm/>
      </div>
    </>
  );
};

export default Authentication;
