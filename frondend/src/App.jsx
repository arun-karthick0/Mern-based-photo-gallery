import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Button from "./component/button/Button";
import Home from "./component/Home/Home";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5550";

const App = () => {


  return (
    <div>
      <Navbar />
      <Home />
      <Button />
    </div>
  );
};

export default App;
