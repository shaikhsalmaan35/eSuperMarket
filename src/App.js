import { Provider } from "react-redux";
import { ConfigStore } from "./State/Store/ConfigStore";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./Components/Home";

function App() {
  const localStore = ConfigStore();
  return (
    <div className="App">
      <Provider store={localStore}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
