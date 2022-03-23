import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { Provider } from "react-redux";
import store from "./store";
import RequireAuth from "./HOC/RequireAuth";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />

          <Route path="account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
