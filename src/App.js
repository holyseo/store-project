import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { appRoutes } from "./routes";
import { Suspense, useRef, useState } from "react";
function App() {
  const cartInitialState = {
    totalAmount: 0,
    numberOfItems: 0,
    cartItems: [],
  };
  const categoryRef = useRef(null);
  const [cartItems, setCartItems] = useState(cartInitialState);
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      <Navbar
        categoryRef={categoryRef}
        cartItemsCount={cartItems.numberOfItems}
        isLogged={isLogged}
      />
      <Suspense fallback={() => <h1>Loading...</h1>}>
        <Routes>
          {appRoutes.map((route) => (
            <Route
              path={route.path}
              element={
                <route.component
                  categoryRef={categoryRef}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  setUser={setUser}
                  setIsLogged={setIsLogged}
                />
              }
            ></Route>
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
