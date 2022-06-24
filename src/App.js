import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedRoute2 from "./ProtectedRoute2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashbaord from "./pages/Dashbaord/Dashbaord";
import Users from "./components/DashBoardSidebar/Users/Users";
import { useSelector } from "react-redux";
import UserFullDetails from "./components/DashBoardSidebar/UserFullDetail/UserFullDetails";

function LayoutsWithNavbar() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
 

 const { user } = useSelector((state) => state.user);
 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                auth={ user?.fullName ? true : false}
              >
                <LayoutsWithNavbar />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route
            path="/dashbaord"
            element={
              <ProtectedRoute2
                auth={  user?.fullName ? true : false}
              >
                <Dashbaord />
              </ProtectedRoute2>
            }
          >
        
            <Route path="/dashbaord/users" element={<Users />} />
            <Route path="/dashbaord/:userName/:type" element={<UserFullDetails />} />
           
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
