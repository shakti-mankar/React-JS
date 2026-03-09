import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layout/Mainlayout";
import Activity from "./Pages/Activities";
import Community from "./Pages/Community";
import Venues from "./Pages/Venue";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="activity" element={<Activity />} />
        <Route path="venues" element={<Venues />} />
        <Route path="community" element={<Community />} />


        {/* for login and sign up  */}



        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


    




      </Route>
    </Routes>
  );
}

export default App;