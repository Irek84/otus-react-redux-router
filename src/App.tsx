import { MainPage, LoginPage, RegisterPage, NotFound404 } from "./pages";
import { Routes, Route } from "react-router-dom";
import NavHeader from "./components/nav-header/nav-header";

function App() {
  return (
    <div>
      <header className="mb-5">
        <NavHeader />
      </header>
      <div className="ms-5">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
