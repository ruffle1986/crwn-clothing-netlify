import { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/user.actions';
import { useDispatch } from 'react-redux';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(emailSignInStart({ email, password }));
          setEmail('');
          setPassword('');
        }}
      >
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          handleChange={(e) => setEmail(e.target.value)}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          handleChange={(e) => setPassword(e.target.value)}
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={() => dispatch(googleSignInStart())}
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
