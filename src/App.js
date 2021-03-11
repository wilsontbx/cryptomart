import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Header from "./components/Header";
import CryptoInfo from "./components/CryptoInfo";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/coin/:symbol" component={CryptoInfo} />
        <Route path="/coin" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
