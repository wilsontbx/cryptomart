import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
