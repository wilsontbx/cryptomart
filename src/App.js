import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
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
