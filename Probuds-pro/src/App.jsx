import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layout/Mainlayout";
import Book from "./Pages/Book";
import Community from "./Pages/Community";
import Train from "./Pages/Train";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import VenueCard from "./components/VenueCard";
import GameCard from "./components/GameCard";
import SportCard from "./components/SportCard";
import BookingForm from "./Pages/Bookingform";


function App() {
  return (




    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="Book" element={<Book />} />
        <Route path="Train" element={<Train />} />
        <Route path="/BookingForm/:id" element={<BookingForm />} />
        {/* <Route path="community" element={<Community />} /> */}


        {/* for login and sign up  */}



        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


    




      </Route>
    </Routes>
  );
}

export default App;