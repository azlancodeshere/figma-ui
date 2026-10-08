import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import  Dashboard from "./pages/Dashboard";
import  FilterCheckbox from "./pages/ContactPage"

const Contacts = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Contacts
      </h1>
    </div>
  );
};

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contacts" element={< FilterCheckbox />} />
      </Routes>
    </>
  );
}

export default App;