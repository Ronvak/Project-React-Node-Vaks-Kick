import React from "react";
import { useState } from "react";
import MyNavBar from "./components/Navbar";
import MyFooter from "./components/MyFooter";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//import pages
import Home from "./Pages/Home";
import Shoe from "./Pages/Shoe";
import CheckOut from "./Pages/CheckOut";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";

function App(props) {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "Gainsboro"
      }}
    >
      <Router>
        <MyNavBar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          countCartItems={cartItems.length}
        />

        <br></br>
        <br></br>
        <br></br>

        <Switch>
          <Route exact path="/">
            <Home
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              countCartItems={cartItems.length}
            />
          </Route>
          <Route exact path="/Home">
            <Home
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              countCartItems={cartItems.length}
            />
          </Route>
          <Route exact path="/CheckOut">
            <CheckOut
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              countCartItems={cartItems.length}
            />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Contact">
            <ContactUs />
          </Route>
          <Route
            exact
            path="/:id"
            children={
              <Shoe
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                countCartItems={cartItems.length}
              />
            }
          ></Route>

          <Route path="*">
            <Home />
          </Route>
        </Switch>
        <MyFooter />
      </Router>
    </div>
  );
}
export default App;
