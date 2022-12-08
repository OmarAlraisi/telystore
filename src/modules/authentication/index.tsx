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
          {/* <span className="login--card--text">
            Monitor and manage <br />
            your inventory
          </span> */}
        </div>
        <div className="login--card--right">Login Info</div>
      </div>
    </div>
  );
};

export default Login;
