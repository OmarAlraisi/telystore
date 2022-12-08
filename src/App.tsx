import "./index.css";
import Login from "./modules/authentication";
import Home from "./modules/home";

const App = () => {
  return <div className="App"> {true ? <Home /> : <Login />}</div>;
};

export default App;
