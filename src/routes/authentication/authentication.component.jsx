import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import './authentication.styles.scss';

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  userDocRef,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {

  return (
    <div className="authentication-container">     
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
