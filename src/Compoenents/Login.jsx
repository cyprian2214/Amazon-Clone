
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  return (
    <>
    <div className="login-header">
    <div className="image-section">
      <Link to="/">
        <img src="./image/amazonlog.png" alt="Login" />
      </Link>
     </div>
    <div className="login-container">
     <div className="form-section">
      <div className="login-titles">
      <p className='login-title'>Sign in or create account</p>
        <p className='login-subtitle'>Enter mobile number or email</p>
        </div>
        <form>
        <input type="email" placeholder="Email or Mobile number" />
        <button className="button" type="submit">Continue</button>
      </form>
      <p className='login-subtitle'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
      <p className='login-help'>Need help?</p>
      <hr />
      <p className='login-subtitle'>Buying for work?</p>
    </div>
    </div>
    </div>
    </>
  );
};

export default Login;