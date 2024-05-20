import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { appRoutes } from "./routes";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {appRoutes.map((route) => (
          <Route path={route.path} element={<route.component />}></Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
