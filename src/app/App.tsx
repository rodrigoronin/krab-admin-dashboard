import { Routes, Route } from "react-router";
import DashboardLayout from "@layouts/DashboardLayout";
import Overview from "@routes/Overview";
import Products from "@routes/Products";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Overview />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
