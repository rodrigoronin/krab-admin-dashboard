import { Routes, Route } from "react-router";
import DashboardLayout from "@layouts/DashboardLayout";
import Overview from "@routes/Overview";
import Posts from "@routes/Posts";

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Overview />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
