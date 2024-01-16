import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.SIGN_IN} element={<p>sign in pag</p>} />
      <Route path={ROUTES.SIGN_UP} element={<p>sign up page</p>} />
      <Route path={ROUTES.BROWSE} element={<p>browse page</p>} />
    </Routes>
  );
}

export default App;
