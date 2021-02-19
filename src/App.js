import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import TickerHeader from "./components/Ticker";
import Header from "./components/Header";
import CryptoInfo from "./components/CryptoInfo";

function App() {
  return (
    <Router>
      <TickerHeader />
      <Header />
      <Switch>
        <Route to="/">
          <MainPage />
        </Route>
        <Route to="/coin/:id">
          <CryptoInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
