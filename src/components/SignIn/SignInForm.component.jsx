import { useState } from "react";
import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
  SignInAuthUserWithEmailAndPassWord,
} from "../../utils/fireBase.uils";
import FormInput from "../formInput/FormInput.component";
import Button from "../button/Button.component";
import "./SignInForm.styles.scss";
const SignInForm = () => {
  const defaultForm = {
    email: "",
    password: "",
  };

  const [formFieled, setformFieled] = useState(defaultForm);
  const { email, password } = formFieled;

  const resetFormField = () => {
    setformFieled(defaultForm);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFieled({
      ...formFieled,
      [name]: value,
    });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await creatUserDocumentFromAuth(user);
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await SignInAuthUserWithEmailAndPassWord(email, password);
        console.log(response)
        resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorret password");
          break;
        case "auth/invalid-credential":
          alert("No user with this email");
          break;
      
        default:
          break;
      }
      console.log(error);
    }
    resetFormField();
  };
  return (
    <div className="sign-up-container">
      <h2>Aleady have an account!</h2>
      <span>Sign In with you email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button  buttonType="google" onClick={signInWithGoogle}>
            Google signIn
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
