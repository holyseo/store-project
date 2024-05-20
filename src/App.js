import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { appRoutes } from "./routes";
import { Suspense } from "react";
function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={() => <h1>Loading...</h1>}>
        <Routes>
          {appRoutes.map((route) => (
            <Route path={route.path} element={<route.component />}></Route>
          ))}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
