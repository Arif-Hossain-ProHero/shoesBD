import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import MoreProducts from "./pages/MoreProducts/MoreProducts";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Purchase from "./pages/Purchase/Purchase";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/more-products">
            <MoreProducts></MoreProducts>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/products/:id">
            <Purchase></Purchase>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
