import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = false;

  return (
    <>
      <Router>
        <Switch>
          <Route index path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/register"
            element={user ? <Navigate to={"/"} /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to={"/"} /> : <Login />}
          />
          )
        </Switch>
      </Router>
    </>
  );
};

export default App;
