import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "./shared";
import { Layout } from "./shared/";
import { Welcome } from "./pages/";
import { Main } from "./pages/";
import { Login } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
