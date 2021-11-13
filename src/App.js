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
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/more-products">
            <MoreProducts></MoreProducts>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <PrivateRoute exact path="/products/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
