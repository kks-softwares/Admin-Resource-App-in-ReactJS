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
import Users1 from "./components/DashBoardSidebar/Category/Users";
import { useDispatch, useSelector } from "react-redux";
import UserFullDetails from "./components/DashBoardSidebar/UserFullDetail/UserFullDetails";
import Blogs from "./components/DashBoardSidebar/Blogs/Blogs";
import Addblog from "./components/DashBoardSidebar/AddBlog/Addblog";
import BlogDetail from "./components/DashBoardSidebar/BlogDetail/BlogDetail";
import Editblog from "./components/DashBoardSidebar/EditBlog/Editblog";
import SkillCenter from "./components/DashBoardSidebar/SkillCenter/SkillCenter";
import SkillPage from "./components/DashBoardSidebar/SkillCenter/SkillPage/SkillPage";
import SkillPreview from "./components/DashBoardSidebar/SkillCenter/SkillPreview/SkillPreview";
import AddSkill from "./components/DashBoardSidebar/SkillCenter/AddSkill/AddSkill";
import AddExam from "./components/DashBoardSidebar/SkillCenter/AddExam/AddExam";
import ExamPage from "./components/DashBoardSidebar/SkillCenter/ExamCPage/ExamPage";
import EditCondidateDetail from "./components/DashBoardSidebar/SkillCenter/EditConsidateDetail/EditCondidateDetail";
import Chat from "./components/DashBoardSidebar/UserFullDetail/Chat/Chat";
import { useEffect, useState } from "react";
import { userActions } from "./store/userSlice";
import AddUser from "./components/DashBoardSidebar/AddUser/AddUser";
import EditUser from "./components/DashBoardSidebar/EditUser/EditUser";
import Jobs from "./components/DashBoardSidebar/Jobs/Jobs";
import AddJob from "./components/DashBoardSidebar/AddJob/AddJob";
import Jobdetils from "./components/DashBoardSidebar/biddingproposallist/Jobdetils";
import ContractJobdetail from "./components/DashBoardSidebar/FullContractJobdetail/ContractJobdetail";
import CompletedJobPage from "./components/DashBoardSidebar/CompletedJobPage/CompletedJobPage";
import Employee from "./components/DashBoardSidebar/Employee/Employee";
import AddEmployee from "./components/DashBoardSidebar/AddEmployee/AddEmployee";
import EmployeeDetail from "./components/DashBoardSidebar/EmployeeDetail/EmployeeDetail";
import AddWork from "./components/DashBoardSidebar/AddEmployee/AddWork";
import WorkDetail from "./components/DashBoardSidebar/EmployeeDetail/WorkDetail/WorkDetail";
import AddCategory from "./components/DashBoardSidebar/AddCategory/AddCategory";
import AddSubCategory from "./components/DashBoardSidebar/AddCategory/AddSubCategory";
import AddSkill1 from "./components/DashBoardSidebar/AddCategory/AddSkill";
import Location from "./components/DashBoardSidebar/Location/Location";
import EditLocation from "./components/DashBoardSidebar/AddLocation/EditLocation";
import AddLocation from "./components/DashBoardSidebar/AddLocation/AddLocation";
import Pricing from "./components/DashBoardSidebar/Pricing/Pricing";
import EditPricing from "./components/DashBoardSidebar/AddPricing/EditPricing";
import AddPricing from "./components/DashBoardSidebar/AddPricing/AddPricing";
import Catalog from "./pages/Catalogs/Catalog";
import PortFolioDetail from "./components/PortfolioDetail/PortFolioDetail";
import Topbar from "./components/Topbar/Topbar";
import DashbaordNav from "./components/DashBaord/DashbaordNav";
import Dashboard from "./components/DashBoardSidebar/Dashbaord/Dashboard";
import AddRedeem from "./components/DashBoardSidebar/AddRedeem/AddRedeem";
import Redeem from "./components/DashBoardSidebar/Redeem/Redeem";
import Jobdetail from "./components/DashBoardSidebar/Jobdetail/Jobdetail";
import EditJob from "./components/DashBoardSidebar/AddJob/EditJob";
import ContactUs from "./components/DashBoardSidebar/ContactUs/ContactUs";

function LayoutsWithNavbar() {
  return (
    <>
      <Outlet />
    </>
  );
}
function LayoutsWithNavbar1() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <Topbar />
      <DashbaordNav user={user} />
      <Outlet />
    </>
  );
}

function App() {
  const dispatch = useDispatch();
  const { loggedInStatus } = useSelector((state) => state.user);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      dispatch(userActions.setUser({ user }));
    }
  }, [loggedInStatus]);

  const [width, setWidth] = useState(window.innerWidth);

  //FUNCTIONS
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                auth={
                  JSON.parse(localStorage.getItem("user"))?.fullName
                    ? true
                    : false
                }
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
                auth={
                  JSON.parse(localStorage.getItem("user"))?.fullName
                    ? true
                    : false
                }
              >
                <Dashbaord />
              </ProtectedRoute2>
            }
          >
            <Route path="/dashbaord" element={<Dashboard />} />
            <Route path="/dashbaord/contactUs" element={<ContactUs />} />
            <Route path="/dashbaord/users" element={<Users />} />
            <Route path="/dashbaord/blogs" element={<Blogs />} />
            <Route path="/dashbaord/" element={<Blogs />} />
            <Route path="/dashbaord/addBlog" element={<Addblog />} />
            <Route path="/dashbaord/adduser" element={<AddUser />} />
            <Route
              path="/dashbaord/edituser/:userName"
              element={<EditUser />}
            />
            <Route path="/dashbaord/editBlog/:Id" element={<Editblog />} />
            <Route path="/dashbaord/blog/:Id" element={<BlogDetail />} />

            <Route
              path="/dashbaord/:userName/:type"
              element={<UserFullDetails />}
            />
            <Route
              path="/dashbaord/employee/:employeeName/:type"
              element={<EmployeeDetail />}
            />

            <Route
              path="/dashbaord/skillCenter/:type"
              element={<SkillCenter />}
            />
            <Route path="/dashbaord/skill/:Id" element={<SkillPage />} />
            <Route path="/dashbaord/examConduct/:Id" element={<ExamPage />} />
            <Route
              path="/dashbaord/skillPreview/:Id"
              element={<SkillPreview />}
            />
            <Route path="/dashbaord/addSkill" element={<AddSkill />} />
            <Route path="/dashbaord/addExam" element={<AddExam />} />
            <Route path="/dashbaord/chat" element={<Chat />} />
            <Route
              path="/dashbaord/examCondidates/:id"
              element={<EditCondidateDetail />}
            />

            <Route path="/dashbaord/shop" element={<Dashbaord />} />
            <Route path="/dashbaord/jobs" element={<Jobs />} />
            <Route path="/dashbaord/jobdetail/:id" element={<Jobdetail />} />
            <Route path="/dashbaord/addJob" element={<AddJob />} />
            <Route path="/dashbaord/editJob/:id" element={<EditJob />} />
            <Route
              path="/dashbaord/jobdetail/:postid"
              element={<Jobdetils />}
            />
            <Route
              path="/dashbaord/contractJob/:bidingId"
              element={<ContractJobdetail />}
            />
            <Route
              path="/dashbaord/completedJob/:postid"
              element={<CompletedJobPage />}
            />
            <Route path="/dashbaord/employee" element={<Employee />} />
            <Route path="/dashbaord/addemployee" element={<AddEmployee />} />
            <Route path="/dashbaord/addwork" element={<AddWork />} />
            <Route path="/dashbaord/workdetail" element={<WorkDetail />} />
            <Route path="/dashbaord/category" element={<Users1 />} />
            <Route path="/dashbaord/catalogue" element={<Dashboard />} />
            <Route path="/dashbaord/addCatalogue" element={<Dashboard />} />
            <Route path="/dashbaord/addcategory" element={<AddCategory />} />
            <Route
              path="/dashbaord/addsubcategory"
              element={<AddSubCategory />}
            />
            <Route path="/dashbaord/addskill1" element={<AddSkill1 />} />
            <Route path="/dashbaord/addlocation" element={<AddLocation />} />
            <Route
              path="/dashbaord/editLocation/:id/:address/:landmark/:area/:city/:pinCode/:state/:country"
              element={<EditLocation />}
            />
            <Route path="/dashbaord/location" element={<Location />} />
            <Route path="/dashbaord/addpricing" element={<AddPricing />} />
            <Route
              path="/dashbaord/editpricing/:id/:min/:max"
              element={<EditPricing />}
            />
            <Route path="/dashbaord/pricing" element={<Pricing />} />
            <Route path="/dashbaord/addRedeem" element={<AddRedeem />} />
            <Route path="/dashbaord/redeem" element={<Redeem />} />
          </Route>

          <Route
            path="/"
            element={
              <ProtectedRoute2
                auth={
                  JSON.parse(localStorage.getItem("user"))?.fullName
                    ? true
                    : false
                }
              >
                <LayoutsWithNavbar1 />
              </ProtectedRoute2>
            }
          >
            <Route
              path="/catalogue/:catId"
              element={<Catalog width={width} />}
            />
            <Route
              path="/portfolio/:portId"
              element={<PortFolioDetail width={width} />}
            />
          
            
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
