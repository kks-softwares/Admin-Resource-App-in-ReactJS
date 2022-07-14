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
import { useEffect } from "react";
import { userActions } from "./store/userSlice";

function LayoutsWithNavbar() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
    const dispatch = useDispatch();
    const { user, loggedInStatus } = useSelector((state) => state.user);
  
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
      if (user) {
        dispatch(userActions.setUser({ user }));
      }
    }, [loggedInStatus]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute auth={ JSON.parse(localStorage.getItem("user"))?.fullName ? true : false}>
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
              <ProtectedRoute2 auth={JSON.parse(localStorage.getItem("user"))?.fullName ? true : false}>
                <Dashbaord />
              </ProtectedRoute2>
            }
          >
            <Route path="/dashbaord/users" element={<Users />} />
            <Route path="/dashbaord/blogs" element={<Blogs />} />
            <Route path="/dashbaord/addBlog" element={<Addblog />} />
            <Route path="/dashbaord/editBlog/:Id" element={<Editblog />} />
            <Route path="/dashbaord/blog/:Id" element={<BlogDetail />} />

            <Route
              path="/dashbaord/:userName/:type"
              element={<UserFullDetails />}
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
            <Route path="/dashbaord/examCondidates/:id" element={<EditCondidateDetail />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
