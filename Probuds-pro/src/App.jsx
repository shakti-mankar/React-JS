import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layout/Mainlayout";
import Activity from "./Pages/Activities";
import Community from "./Pages/Community";
import Venues from "./Pages/Venue";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="activity" element={<Activity />} />
        <Route path="venues" element={<Venues />} />
        <Route path="community" element={<Community />} />
      </Route>
    </Routes>
  );
}

export default App;