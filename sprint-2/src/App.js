import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import VideoUpload from "./Pages/VideoUpload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/VideoUpload" component={VideoUpload} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
