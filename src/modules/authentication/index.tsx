import "./index.css";
import Image from "../common/image";
const Login = () => {
  return (
    <div className="login-root">
      <div className="login--background"></div>
      <div className="login--card">
        <div className="login--card--left">
          <Image fileName="logo.png" className="logo--image" />
          <Image fileName="telystore.png" className="telystore--image" />
          <Image fileName="inventory.png" className="inventory--image" />
        </div>
        <div className="login--card--right">
          <span className="login--card--text">Welcome to TelyStore</span>
          <form onSubmit={() => {}} className="login--form">
            <div className="login--field">
              <label className="login--input-label" htmlFor="email">
                Email Address
              </label>
              <input
                type="text"
                name="email"
                className="login--input-field"
                placeholder="email@example.com"
              />
            </div>
            <div className="login--field">
              <label className="login--input-label" htmlFor="email">
                Password
              </label>
              <input
                type="password"
                className="login--input-field"
                placeholder="********"
              />
            </div>
            <input type="submit" value="Login" className="login--form-submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
