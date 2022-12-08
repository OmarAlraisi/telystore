import { useSelector } from "react-redux";
import "./index.css";
import Login from "./modules/authentication";
import Home from "./modules/home";
import { isLoggedIn } from "./store/queries";

const App = () => {
  const isUserLoggedIn = useSelector(isLoggedIn);

  return (
    <div className="App">
      <Home />
      {!isUserLoggedIn && <Login />}
    </div>
  );
};

export default App;
