import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <>
      <Register />
      <Login />
      <Home />
      <ProductList />
      <SingleProduct />
      <Cart />
    </>
  );
};

export default App;
