import { BrowserRouter, Switch, Route } from "react-router-dom";
import VideoUpload from "./Pages/VideoUpload";
import Main from "./Pages/Main";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Main {...routerProps} />}
          />
          <Route path="/videoUpload" component={VideoUpload} />
          <Route
            path="/videos/:id"
            render={(routerProps) => <Main {...routerProps} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
