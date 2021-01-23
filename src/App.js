import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import "./App.css";
import Nav from "./Nav";
import Shop from "./Shop";
import ItemDetail from "./itemDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </Router>
    </div>
  );
}
const Home = () => (
  <div>
    <h1>home page</h1>
  </div>
);

export default App;
