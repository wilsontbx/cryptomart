import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import TickerHeader from "./components/Ticker";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <TickerHeader />
      <Header />
      <Switch>
        <Route to="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
