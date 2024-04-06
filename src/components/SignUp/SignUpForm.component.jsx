/* eslint-disable react/no-unescaped-entities */
import {
  createAuthUserWithEmailAndPassword,
  creatUserDocumentFromAuth,  
} from "../../utils/fireBase.uils";
import { useState } from "react";
import FormInput from '../formInput/FormInput.component';
import './SignUpForm.styles.scss'
import Button from '../button/Button.component';

const SignUpForm = () => {
  const defaultForm = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFieled, setformFieled] = useState(defaultForm);
  const { displayName, email, password, confirmPassword } = formFieled;

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("password doesn't match");
      return;
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );

        await creatUserDocumentFromAuth(user, { displayName });
        resetFormField();
      } catch (error) {
        if (error.message == "EMAIL_EXISTS") {
          alert("user already exists");
        } else {
          console.log(error.message);
        }
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>  Don't have an account?</h2>
      <span>Sign Up with you Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
       <Button type="submit">Sign Up</Button>

      </form>
    </div>
  );
};

export default SignUpForm;
