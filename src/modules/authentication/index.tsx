import "./index.css";
import Image from "../common/image";
import { useState } from "react";
import { getProductsService, loginService } from "../../services";
import { useDispatch } from "react-redux";
import { fetchProducts, logIn } from "../../store/actions";
import classNames from "classnames";
import { Product } from "../../interfaces";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailBlank, setIsEmailBlank] = useState(false);
  const [isPasswordBlank, setIsPasswordBlank] = useState(false);
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    if (email === "") {
      setIsEmailBlank(true);
      setIncorrectCredentials(false);
    } else setIsEmailBlank(false);

    if (password === "") {
      setIsPasswordBlank(true);
      setIncorrectCredentials(false);
    } else setIsPasswordBlank(false);

    if (email !== "" && password !== "") {
      loginService(
        email,
        password,
        () => {
          dispatch(logIn(true));
          getProductsService((products: Product[]) => {
            dispatch(fetchProducts(products));
          });
        },
        () => {
          setIncorrectCredentials(true);
        },
      );
    }
    event.preventDefault();
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      if (email !== "") setIsEmailBlank(false);
    } else {
      setPassword(value);
      if (password !== "") setIsPasswordBlank(false);
    }
  };
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
          <form onSubmit={handleSubmit} className="login--form">
            <div className="login--field">
              <label className="login--input-label" htmlFor="email">
                Email Address
              </label>
              <input
                type="text"
                name="email"
                className="login--input-field"
                placeholder="email@example.com"
                value={email}
                onChange={handleInputChange}
              />
              <span
                className={classNames("login--input-field--required warning", {
                  hide: !isEmailBlank,
                })}
              >
                * Please enter your email
              </span>
            </div>
            <div className="login--field">
              <label className="login--input-label" htmlFor="email">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="login--input-field"
                placeholder="********"
                value={password}
                onChange={handleInputChange}
              />
              <span
                className={classNames("login--input-field--required warning", {
                  hide: !isPasswordBlank,
                })}
              >
                * Please enter your password
              </span>
            </div>
            <input type="submit" value="Login" className="login--form-submit" />
            <span
              className={classNames("login--form--credentials warning", {
                hide: !incorrectCredentials,
              })}
            >
              Incorrect email or password
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
