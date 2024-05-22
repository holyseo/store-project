import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { appRoutes } from "./routes";
import { Suspense, useRef, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

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
  const location = useLocation();

  return (
    <div>
      <Navbar
        categoryRef={categoryRef}
        cartItemsCount={cartItems.numberOfItems}
        isLogged={isLogged}
      />
      <SwitchTransition component={null}>
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}
          unmountOnExit
        >
          <Suspense fallback={() => <h1>Loading...</h1>}>
            <Routes location={location}>
              {appRoutes.map((route) =>
                route.requiresAuth && !isLogged ? (
                  <Route
                    key={route.path}
                    exact
                    path={route.path}
                    element={<Navigate replace to={"/login"} />}
                  />
                ) : (
                  <Route
                    key={route.path}
                    exact
                    path={route.path}
                    element={
                      <route.component
                        categoryRef={categoryRef}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        setUser={setUser}
                        setIsLogged={setIsLogged}
                        user={user}
                      />
                    }
                  ></Route>
                )
              )}
            </Routes>
          </Suspense>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
