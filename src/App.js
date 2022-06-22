import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import ProtectedRoute from "./ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userActions } from "./store/userSlice";
import ProtectedRoute2 from "./ProtectedRoute2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function LayoutsWithNavbar() {
  return (
    <>
      <Outlet />
    </>
  );
}
// function LayoutsWithNavbar2({ user }) {
//   return (
//     <>

//       <Profilenav user={user} />
//       <Outlet />

//     </>
//   );
// }

function App() {
  const dispatch = useDispatch();
  const { user, loggedInStatus } = useSelector((state) => state.user);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
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
              <ProtectedRoute
                auth={localStorage.getItem("user") ? true : false}
              >
                <LayoutsWithNavbar />
              </ProtectedRoute>
            }
          >
            {/* <Route path="/login" element={<Home />} /> */}
          </Route>
          {/* <Route
            path="/dashbaord"
            element={
              <ProtectedRoute2
                auth={localStorage.getItem("user") ? true : false}
              >
                <Dashbaord />
              </ProtectedRoute2>
            }
          >
            <Route path="/dashbaord/browsework" element={<Browseworkmain />} />
            <Route path="/dashbaord/postwork" element={<PostworkMAin />} />
            <Route path="/dashbaord/createWork" element={<CreateWork />} />
            <Route path="/dashbaord/appliedjob" element={<AppliedJob />} />
            <Route path="/dashbaord/blog" element={<Blogs />} />
            <Route path="/dashbaord/messages" element={<Chatting />} />
            <Route path="/dashbaord/addblog" element={<Addblog />} />
            <Route path="/dashbaord/skill/:type" element={<SkillCenter />} />
            <Route path="/dashbaord/shop" element={<ShopRedeam />} />
            <Route path="/dashbaord/refrences" element={<Refrences />} />
            <Route path="/dashbaord/addrefrences" element={<Addrefrence />} />
            <Route path="/dashbaord/filemanager" element={<FileManager />} />
            <Route path="/dashbaord/setting" element={<Settings />} />
            <Route
              path="/dashbaord/jobdetail/:postid"
              element={<Jobdetils />}
            />
            <Route path="/dashbaord/faq" element={<Faq />} />
            <Route path="/dashbaord/wallet" element={<Wallet />} />
            <Route path="/dashbaord/addpost/:category" element={<AddPost />} />
            <Route
              path="/dashbaord/bidding/:postid"
              element={<BiddingFormDashboard />}
            />
            <Route
              path="/dashbaord/contractJob/:bidingId"
              element={<ContractJobdetail />}
            />
            <Route
              path="/dashbaord/completedJob/:bidingId"
              element={<EndContactdetailjob />}
            />
            <Route
              path="/dashbaord/jobdetailfornobid/:postid"
              element={<SimpleJobDetail />}
            />
            <Route
              path="/dashbaord/jobdetailforbid/:postid"
              element={<SimplewithBidLink />}
            />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
