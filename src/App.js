import "./assets/style/app.scss";
import Blog from "./components/Blog";
import Directory from "./components/Directory";
import EventsDetalisPages from "./components/EventsDetalisPages";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Job from "./components/Job";
import Matimonial from "./components/Matimonial";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import UpcomingPage from "./components/Sell_All_Pages/UpcomingPage";
import BlogDetails from "./components/DetailsPages/BlogDetails";
import JobDeatis from "./components/DetailsPages/JobDeatis";
import MatinonialDetail from "./components/DetailsPages/MatinonialDetail";
import "./assets/style/app.scss";
import RecrutierDashbord from "./components/Recrutier_Dashbord/RecrutierDashbord";
import Directory_Search from "./Directory_Search";
import Announcement from "./components/Announcement/Announcement.js";
import Profile_Page from "./components/Profile_Page/Profile_Page.js";
import Otp_Verification from "./components/Login/Otp_Verification.js";
import Login from "./components/Login/Login.js";
import Signup from "./components/Login/Signup.js";
import User_Details from "./components/Forms/User_Details.js";

// import EventsDetailsPages from "./components/Details_Pages/EventsDetalisPages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/jobpage" element={<Job />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/directory" element={<Directory />}></Route>
        <Route path="/matimonial" element={<Matimonial />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/upcomingPages" element={<UpcomingPage />}></Route>
        <Route
          path="/details/:eventId"
          element={<EventsDetalisPages />}
        ></Route>
        <Route path="/blogdetails/:blogId" element={<BlogDetails />}></Route>
        <Route path="/jobdetails/:jobsId" element={<JobDeatis />}></Route>
        <Route
          path="/matimonial-profile/:matimonialId"
          element={<MatinonialDetail />}
        ></Route>
        <Route path="/recrutierDasbord" element={<RecrutierDashbord />}></Route>
        <Route path="/directory_Search" element={<Directory_Search />}></Route>
        <Route path="/announcement" element={<Announcement />}></Route>
        <Route path="/profile" element={<Profile_Page />}></Route>
        <Route path="/otp" element={<Otp_Verification />}></Route>
        <Route path="/user_details" element={<User_Details />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
