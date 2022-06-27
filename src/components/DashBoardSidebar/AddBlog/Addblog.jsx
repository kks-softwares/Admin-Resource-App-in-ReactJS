import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddTableofContent from "./AddTableofContent";
import img2 from "../../../assets/Web 1280 – 2/kaleidico-3V8xo5Gbusk-unsplash.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  height: "50vw",
  maxHeight: "50vw",
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  overflowY: "scroll",
  boxShadow: 24,
  p: 4,
};

export default function Addblog() {
  const [arrayofblogs, setArrayofblogs] = useState([1, 2]);
  const navigate = useNavigate();
  const [erroeshow, setErroeshow] = useState(false);
  const [title, setTitle] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div
        style={{
          width: "70vw",
          margin: "auto",
          height: "fit-content",
          marginTop: "2vw",
        }}
        className="home-postjob-container"
      >
        <div
          style={{
            overflowX: "hidden",
            paddingLeft: "4vw",
            width: "70vw",
            paddingTop: "2vw",
          }}
          className="homepostjob-right"
        >
          <div className="jobpostedformheading">Add Blogs</div>

          <div>
            <div className="jobpodtedfieldtitile"> Title</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <CloseIcon
                style={{
                  position: "relative",
                  right: "2vw",
                  top: "1.1vw",
                  fontSize: "1.5vw",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setTitle("");
                }}
              />
            </div>
            {arrayofblogs.length > 0 &&
              arrayofblogs?.map((data, index) => {
                return (
                  <AddTableofContent
                    setArrayofblogs={setArrayofblogs}
                    arrayofblogs={arrayofblogs}
                    index={index}
                  />
                );
              })}
            <div
              style={{ marginLeft: "1vw" }}
              className="addmoreservicecatalog"
              onClick={() => {
                setArrayofblogs([...arrayofblogs, arrayofblogs.length + 1]);
              }}
            >
              <span>
                <AddIcon style={{ fontSize: "1.3vw" }} />
              </span>{" "}
              Add More Milestones
            </div>
            {erroeshow ? (
              <div style={{ color: "red" }} className="jobpodtedfieldtitile">
                {" "}
                * Fill All the Fields
              </div>
            ) : (
              ""
            )}{" "}
            <div style={{ marginBottom: "4vw" }} className="homejobbuttons">
              <button
                style={{ background: "white" }}
                onClick={() => {
                  navigate("/dashbaord/blog");
                }}
              >
                Cancel
              </button>

              <button onClick={handleOpen} style={{ color: "white" }}>
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle">Preview Blogs</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose}
                  style={{ fontSize: "1.5vw" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#00000090" }} />
          <div className="jobpodtedfieldtitile"> Title</div>
        
          <div className="jobpostfieldinputbox">
            <input type="text" value={title} disabled />
            <CloseIcon
              style={{
                position: "relative",
                left: "1.2vw",
                top: "1.1vw",
                fontSize: "1.5vw",
                cursor: "pointer",
              }}
              onClick={() => {
                setTitle("");
              }}
            />
          </div>

          <div className="jobpodtedfieldtitile"> Table of Content</div>

          <div className="widthfullblofpreview">
          <div className="titileofblogcontnet1">
            Introduction to Business Plans
          </div>
          <div className="dataeofblogcontnet1">
            A business plan is a written description of your business's future.
            That's all there is to it--a document that desribes what you plan to
            do and how you plan to do it. If you jot down a paragraph on the
            back of an envelope describing your business strategy, you've
            written a plan, or at least the germ of a plan.{" "}
          </div>
          <div className="dataeofblogcontnet1">
            Business plans can help perform a number of tasks for those who
            write and read them. They're used by investment-seeking
            entrepreneurs to convey their vision to potential investors. They
            may also be used by firms that are trying to attract key employees,
            prospect for new business, deal with suppliers or simply to
            understand how to manage their companies better.
          </div>
          <div className="dataeofblogcontnet1">
            So what's included in a business plan, and how do you put one
            together? Simply stated, a business plan conveys your business
            goals, the strategies you'll use to meet them, potential problems
            that may confront your business and ways to solve them, the
            organizational structure of your business (including titles and
            responsibilities), and finally, the amount of capital required to
            finance your venture and keep it going until it breaks even.
          </div>

          <div style={{width:"63vw"}} className="Joinwithusblogbox">
            <div style={{ width: "70%", textAlign: "center" }}>
              <div className="Joinwithusblogboxtitle">
                Post a Work or Query For Marketing
              </div>
              <div className="Joinwithusblogboxdetail">
                Join our community of 300+ Resources of all sizes who use 44
                resources Latest Technology and Products make with our experts
                candidate and easy to delightful Customer and Employees
              </div>
            </div>
            <div style={{ width: "30%", textAlign: "center" }}>
              <button>Join with us</button>
            </div>
          </div>
          <div className="titileofblogcontnet1">
            What is a Business idea we use in current Marketing?
          </div>
          <div className="dataeofblogcontnet1">
            If you're starting a small business, a major factor in its success
            lies in how well you market it. Marketing attracts prospects,
            prospects become buyers, and buyers provide profit. But marketing is
            more than just putting your business name out into the world.
            According to the U.S. Small Business Administration, marketing must
            create a connection:
          </div>
          <div className="dataeofblogcontnet1">
            Be prepared with custom resources you can share both online and in
            person. You should always have something with you that represents
            your company's mission and image that you can hand to a lead. The
            same concepts apply in online forums; a digital presence is crucial
            to success.
          </div>

          <div  style={{width:"63vw"}}className="Joinwithusblogbox">
            <div style={{ width: "70%", textAlign: "center" }}>
              <div className="Joinwithusblogboxtitle">
                Post a Work or Query For Marketing
              </div>
              <div className="Joinwithusblogboxdetail">
                Join our community of 300+ Resources of all sizes who use 44
                resources Latest Technology and Products make with our experts
                candidate and easy to delightful Customer and Employees
              </div>
            </div>
            <div style={{ width: "30%", textAlign: "center" }}>
              <button>Join with us</button>
            </div>
          </div>
          <div className="titileofblogcontnet1">Scope of Business Plans</div>
          <div className="dataeofblogcontnet1">
            Even though businesses worldwide were increasingly adopting business
            analytics, artificial intelligence and agile delivery methods in
            their business practices before COVID-19 struck, the process has
            surprisingly accelerated post the pandemic.
          </div>

          <div className="dataeofblogcontnet1">
            Business Analytics is the iterative and systematic analysis of a
            company’s statistical data to gain insights into the past
            performance records, ongoing business operations, and industry
            trends to foster strategic planning and data-driven decision-making
            capabilities and drive the growth of a company.
          </div>
          <div className="dataeofblogcontnet1">
            As small to medium and large size businesses tap into the
            problem-solving prowess of business analytics, some business
            operations sections stand to benefit more than others. Forecasting
            demands, risk assessment, identifying potential disruptions in the
            supply chain, and providing support in crisis times are just a few
            scenarios where business analytics has proven to be a boon in India.
          </div>
          <div className="dataeofblogcontnet1">
            To that end, we estimate the scope of business analytics is poised
            to tremendously impact the following business scenarios:
          </div>
          <div className="dataeofblogcontnet1">
            <span>1. Customer Experience:</span> Quality consumer experience is
            key to ensuring smooth business operations. By gaining a deep
            understanding of what type of customers frequent your business and
            what their purchase habits are like and studying their behaviours,
            companies can tailor their services to achieve customer
            gratification and ensure their loyalty to the brand. Business
            analytics provides businesses with this possibility and allows them
            to personalise their products and services to cater to customers.{" "}
          </div>
          <div className="dataeofblogcontnet1">
            <span> 2. Inventory Management:</span> businesses can streamline
            supply chain processes and reduce overhead costs. Business analytics
            provides an understanding of the frequency and timing of orders,
            which products are in demand and how poised a company is to serve
            those demands, strategically planning their supply chain operations.
            It also provides businesses with the capability to scale their
            services sustainably.{" "}
          </div>
          <div className="dataeofblogcontnet1">
            <span>3. Sales and Marketing:</span> Companies can study customers’
            reactions towards their marketing campaigns and product offerings to
            create targeted campaigns and identify the most effective cross-sell
            and up-sell opportunities. It involves investigating the age
            demographic a consumer falls into, their average income, what
            motivates them to make purchases to predict patterns, and trends in
            their purchasing behaviour. This helps businesses focus their
            product messages and launch timings to suit their customers’
            requirements.
          </div>
          <div className="dataeofblogcontnet1">
            <span>4. Hiring and Recruitment:</span> Companies are keen on
            associating with HR officials with a background in data analytics
            and business intelligence. This ensures that HR specialists can
            analyse data to onboard skilled and professional employees who
            contribute to a company’s growth. It also helps save companies
            hiring and training costs.
          </div>

          <div style={{width:"63vw"}} className="Joinwithusblogbox">
            <div style={{ width: "70%", textAlign: "center" }}>
              <div className="Joinwithusblogboxtitle">
                Post a Work or Query For Marketing
              </div>
              <div className="Joinwithusblogboxdetail">
                Join our community of 300+ Resources of all sizes who use 44
                resources Latest Technology and Products make with our experts
                candidate and easy to delightful Customer and Employees
              </div>
            </div>
            <div style={{ width: "30%", textAlign: "center" }}>
              <button>Join with us</button>
            </div>
          </div>
          <div className="titileofblogcontnet1">
            Business Plan idea in india{" "}
          </div>
          <div className="dataeofblogcontnet1">
            Who does not want to own a business? No matter if it is commenced as
            a small scale or done through huge capital investment, it is still
            considered a business. Even if you do not want to invest ample
            amount into a business you can still run a profitable small scale
            business. We will brief you about all the best small business ideas
            in India for the upcoming year that is 2022.
          </div>
          <div className="dataeofblogcontnet1">
            We understand it could be hard for beginners to find the right
            business idea for opening any new business. One wrong decision could
            ruin all your investment and time. It is therefore always suggested,
            to explore as many options as you can and then depending upon your
            current financial status, demographics, local demand in the same
            field, expertise, and experience, choose the viable option that
            matches all your needs.
          </div>

          <div style={{width:"63vw"}} className="Joinwithusblogbox">
            <div style={{ width: "70%", textAlign: "center" }}>
              <div className="Joinwithusblogboxtitle">
                Post a Work or Query For Marketing
              </div>
              <div className="Joinwithusblogboxdetail">
                Join our community of 300+ Resources of all sizes who use 44
                resources Latest Technology and Products make with our experts
                candidate and easy to delightful Customer and Employees
              </div>
            </div>
            <div style={{ width: "30%", textAlign: "center" }}>
              <button>Join with us</button>
            </div>
          </div>
          <div className="titileofblogcontnet1">
            Business Plan idea in india
          </div>
          <div className="dataeofblogcontnet1">
            Who does not want to own a business? No matter if it is commenced as
            a small scale or done through huge capital investment, it is still
            considered a business. Even if you do not want to invest ample
            amount into a business you can still run a profitable small scale
            business. We will brief you about all the best small business ideas
            in India for the upcoming year that is 2022.
          </div>
          <div className="dataeofblogcontnet1">
            We understand it could be hard for beginners to find the right
            business idea for opening any new business. One wrong decision could
            ruin all your investment and time. It is therefore always suggested,
            to explore as many options as you can and then depending upon your
            current financial status, demographics, local demand in the same
            field, expertise, and experience, choose the viable option that
            matches all your needs.
          </div>
          <div className="blogcontentimagebanner">
              <img style={{width:"63vw"}} src={img2} alt="" />
          </div>
          <div style={{width:"63vw"}} className="Joinwithusblogbox">
            <div style={{ width: "60%", textAlign: "center" }}>
              <div className="Joinwithusblogboxtitle">
                Post a Work or Query For Marketing
              </div>
              <div className="Joinwithusblogboxdetail">
                Join our community of 300+ Resources of all sizes who use 44
                resources Latest Technology and Products make with our experts
                candidate and easy to delightful Customer and Employees
              </div>
            </div>
            <div style={{ width: "40%", textAlign: "center" }}>
              <button>Join with us</button>
            </div>
          </div>
         
          </div>
          <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
              <div
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                }}
                className="handlecirclieaboutsave"
                
              >
                Cancel
              </div>
              <div
                style={{ cursor: "pointer" }}
              
                className="handlecirclieaboutsave"
              >
                Submit
              </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
