import { Routes, Route } from "react-router";
import DashboardLayout from "@layout/DashboardLayout";
import Overview from "@components/ui/Overview";

function App() {
  return (
    <Routes>
      <DashboardLayout>
        <Route path="/" element={<Overview />}></Route>
      </DashboardLayout>
    </Routes>
  );
}

export default App;
