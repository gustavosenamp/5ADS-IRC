import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import UserFormPage from "./pages/UserFormPage";
import EditUserPage from "./pages/EditUserPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserListPage />} />
          <Route path="/users/new" element={<UserFormPage />} />
          <Route path="/users/edit/:id" element={<EditUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
