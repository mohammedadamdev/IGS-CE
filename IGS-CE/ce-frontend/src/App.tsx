import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/HeaderBar";
import { Admin } from "./pages/Admin";
import AddClient from "./pages/AddClient";
import PropertyForm from "./pages/PropertyForm";
import ClientForm from "./pages/ClientForm";
import PropertyData from "./pages/PropertyData";
import SuperAdmin from "./pages/SuperAdmin";
import AddUserForm from "./pages/AddUserForm";
import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword";

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/properties" element={<Admin />} />
        <Route
          path="/properties_data/:id/:propertyName"
          element={<PropertyData />}
        />
        <Route path="/home" element={<Admin />} />
        <Route path="/addclient" element={<AddClient />} />
        <Route path="/property_form" element={<PropertyForm />} />
        <Route
          path="/client_form/:property_id/:propertyName"
          element={<ClientForm />}
        />
        <Route path="/super_admin" element={<SuperAdmin />} />
        <Route path="/add_user" element={<AddUserForm />} />
        <Route path="/" element={<Login />} />
        <Route path="/change_password" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
