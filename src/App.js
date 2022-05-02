import "./App.css";
import Index from "./pages/index.js";
import Repository from "./pages/repository.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Index />} />
          <Route path="/" element={<Repository />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
