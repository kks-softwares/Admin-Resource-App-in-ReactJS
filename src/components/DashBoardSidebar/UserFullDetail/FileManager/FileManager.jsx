import { KeyboardArrowDownOutlined, MoreVert } from "@mui/icons-material";
import React, { useState } from "react";
import "./filemanager.css";
import img1 from "../../../../assets/Webfiles/Group 8738.svg";
import img2 from "../../../../assets/Webfiles/Iconly-Bulk-Document.svg";
import img3 from "../../../../assets/Webfiles/Iconly-Bulk-Image 2.svg";
import img4 from "../../../../assets/Webfiles/Iconly-Bulk-Paper.svg";
import img5 from "../../../../assets/Webfiles/Iconly-Bulk-Play.svg";
import img6 from "../../../../assets/Webfiles/Iconly-Bulk-Work.svg";
import img7 from "../../../../assets/Webfiles/Icon.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import imgp1 from "../../../../assets/Webfiles/Web 1366 – 9/Add User.svg";
import imgp2 from "../../../../assets/Webfiles/Web 1366 – 9/Edit.svg";
import imgp3 from "../../../../assets/Webfiles/Web 1366 – 9/Iconly-Light-Delete.svg";
import imgp4 from "../../../../assets/Webfiles/Web 1366 – 9/Iconly-Light-Paper Download.svg";

import axios from "axios";
import API_HOST from "../../../../env";
import { useNavigate } from "react-router";
import img from '../../../../assets/walletimage/Iconly-Light-outline-Show.svg'
import img11 from '../../../../assets/walletimage/arrow_forward.svg'
import img12 from "../../../../assets/Jobs/Iconly-Light-Delete.svg";
export default function FileManager() {
  const [anchorElx, setAnchorElx] = React.useState(null);
  const handleClickx = (event) => {
    setAnchorElx(event.currentTarget);
  };
  const handleClosex = () => {
    setAnchorElx(null);
  };
  const openx = Boolean(anchorElx);
  const idx = openx ? "simple-popover" : undefined;
  const [openxx, setOpenxx] = React.useState(false);
  const [anchorElxx, setAnchorElxx] = React.useState(null);
  const canBeOpenxx = openxx && Boolean(anchorElx);
  const idxx = canBeOpenxx ? "transition-popper" : undefined;
  const handleSearchCategory = (e) => {
    axios
      .get(`${API_HOST}/category/viewCategory?categories=${e.target.value}`)
      .then((res) => {
        setAllcategory(res?.data?.success?.data?.docs);

        setOpenxx(true);
      });
  };
  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [setsubSelectedCategory, setsubSetSelectedCategory] = useState([]);
  const [allcategory, setAllcategory] = useState([0]);

  const navigate = useNavigate()
  return (
    <div className="files-main-container">
      <div className="files-leftcontainer">
        <div className="fles-container">
          <div className="myfoldertitile">My Folder</div>
          <div className="file-searchandcreate">
            <div className="folderbox-files">
              <div className="folderbox-nav">
                <div>
                  <img src={img1} alt="" />
                </div>
                <div>
                  <MoreVert />
                </div>
              </div>
              <div className="folderbox-title">Behance Post</div>
              <div className="folderbox-subtitle">35 files</div>
            </div>
            <div className="folderbox-files">
              <div className="folderbox-nav">
                <div>
                  <img src={img1} alt="" />
                </div>
                <div>
                  <MoreVert />
                </div>
              </div>
              <div className="folderbox-title">Behance Post</div>
              <div className="folderbox-subtitle">35 files</div>
            </div>
            <div className="folderbox-files">
              <div className="folderbox-nav">
                <div>
                  <img src={img1} alt="" />
                </div>
                <div>
                  <MoreVert />
                </div>
              </div>
              <div className="folderbox-title">Behance Post</div>
              <div className="folderbox-subtitle">35 files</div>
            </div>
            <div className="folderbox-files">
              <div className="folderbox-nav">
                <div>
                  <img src={img1} alt="" />
                </div>
                <div>
                  <MoreVert />
                </div>
              </div>
              <div className="folderbox-title">Behance Post</div>
              <div className="folderbox-subtitle">35 files</div>
            </div>
            <div className="folderbox-files">
              <div className="folderbox-nav">
                <div>
                  <img src={img1} alt="" />
                </div>
                <div onClick={handleClickx}>
                  <MoreVert />
                </div>
                <Popover
                  id={idx}
                  open={openx}
                  anchorEl={anchorElx}
                  onClose={handleClosex}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Typography sx={{ p: 1, width: "12vw" }}>
                    <span className="createfilenew-img">
                      <img
                        style={{
                          width: "1.5vw",
                          objectFit: "contain",
                          marginLeft: "0.2vw",
                        }}
                        src={imgp1}
                        alt=""
                      />
                    </span>
                    <span className="createfilenew-typex">Share</span>
                  </Typography>
                  <Typography sx={{ p: 1, width: "12vw" }}>
                    <span className="createfilenew-img">
                      <img
                        style={{
                          width: "1.3vw",
                          objectFit: "contain",
                          marginLeft: "0.2vw",
                        }}
                        src={imgp2}
                        alt=""
                      />
                    </span>
                    <span className="createfilenew-typex">Rename</span>
                  </Typography>
                  <Typography sx={{ p: 1, width: "12vw" }}>
                    <span className="createfilenew-img">
                      <img
                        style={{ width: "1.6vw", objectFit: "contain" }}
                        src={imgp4}
                        alt=""
                      />
                    </span>
                    <span className="createfilenew-typex">Download</span>
                  </Typography>
                  <Typography sx={{ p: 1, width: "12vw" }}>
                    <span
                      style={{ width: "2vw" }}
                      className="createfilenew-img"
                    >
                      <img
                        style={{ width: "1.7vw", objectFit: "contain" }}
                        src={imgp3}
                        alt=""
                      />
                    </span>
                    <span className="createfilenew-typex">Delete</span>
                  </Typography>
                </Popover>
              </div>
              <div className="folderbox-title">Behance Post</div>
              <div className="folderbox-subtitle">35 files</div>
            </div>
          </div>
          <div className="myfoldertitile">My Files</div>
          <div className="navoffilestable">
            <div style={{ width: "35%" }} className="tablehaedtitile-name">
              <span>Name</span>
              <span>
                <img src={img11} style={{width:"1vw",objectFit:"contain",marginLeft:"0.51vw"}}/>
              </span>
            </div>
            <div style={{ width: "15%" }} className="tablehaedtitile-name">
              <span>Format</span>
             
            </div>
            <div style={{ width: "12%" }} className="tablehaedtitile-name">
              <span>Size</span>
              <span>
              <img src={img11} style={{width:"1vw",objectFit:"contain",marginLeft:"0.51vw"}}/>
              </span>
            </div>
            <div style={{ width: "19%" }} className="tablehaedtitile-name">
              <span>Upload on</span>
              <span>
                  <img src={img11} style={{width:"1vw",objectFit:"contain",marginLeft:"0.51vw"}}/>    </span>
            </div>

            <div style={{ width: "15%" }} className="tablehaedtitile-name">
              <span>Owner</span>
              <span>
              <img src={img11} style={{width:"1vw",objectFit:"contain",marginLeft:"0.51vw"}}/>
              </span>
            </div>
            <div style={{ width: "5%" }} className="tablehaedtitile-name"></div>
            <div style={{ width: "5%" }} className="tablehaedtitile-name"></div>
          </div>

          <div className="table-box-main">
            <div className="navoffilestable">
              <div style={{ width: "35%" }} className="tablehaedtitile-name">
                <span>
                  <img
                    style={{
                      width: "2vw",
                      marginRight: "1.52vw",
                      objectFit: "contain",
                    }}
                    src={img3}
                    alt=""
                  />
                </span>
                <span>E-Commerce.jpg</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Image</span>
              </div>
              <div style={{ width: "12%" }} className="tablehaedtitile-name">
                <span>3.6 MB</span>
              </div>
              <div style={{ width: "19%" }} className="tablehaedtitile-name">
                <span>Sep 24, 2021</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Me</span>
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
                <img src={img} style={{ width: "1.5vw" }} />
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
              <img src={img12} style={{ width: "1.5vw" }} />
              </div>
            </div>
      
            <div className="navoffilestable">
              <div style={{ width: "35%" }} className="tablehaedtitile-name">
                <span>
                  <img
                    style={{
                      width: "2vw",
                      marginRight: "1.52vw",
                      objectFit: "contain",
                    }}
                    src={img3}
                    alt=""
                  />
                </span>
                <span>E-Commerce.jpg</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Image</span>
              </div>
              <div style={{ width: "12%" }} className="tablehaedtitile-name">
                <span>3.6 MB</span>
              </div>
              <div style={{ width: "19%" }} className="tablehaedtitile-name">
                <span>Sep 24, 2021</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Me</span>
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
                <img src={img} style={{ width: "1.5vw" }} />
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
              <img src={img12} style={{ width: "1.5vw" }} />
              </div>
            </div>
      
            <div className="navoffilestable">
              <div style={{ width: "35%" }} className="tablehaedtitile-name">
                <span>
                  <img
                    style={{
                      width: "2vw",
                      marginRight: "1.52vw",
                      objectFit: "contain",
                    }}
                    src={img3}
                    alt=""
                  />
                </span>
                <span>E-Commerce.jpg</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Image</span>
              </div>
              <div style={{ width: "12%" }} className="tablehaedtitile-name">
                <span>3.6 MB</span>
              </div>
              <div style={{ width: "19%" }} className="tablehaedtitile-name">
                <span>Sep 24, 2021</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Me</span>
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
                <img src={img} style={{ width: "1.5vw" }} />
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
              <img src={img12} style={{ width: "1.5vw" }} />
              </div>
            </div>
      
            <div className="navoffilestable">
              <div style={{ width: "35%" }} className="tablehaedtitile-name">
                <span>
                  <img
                    style={{
                      width: "2vw",
                      marginRight: "1.52vw",
                      objectFit: "contain",
                    }}
                    src={img3}
                    alt=""
                  />
                </span>
                <span>E-Commerce.jpg</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Image</span>
              </div>
              <div style={{ width: "12%" }} className="tablehaedtitile-name">
                <span>3.6 MB</span>
              </div>
              <div style={{ width: "19%" }} className="tablehaedtitile-name">
                <span>Sep 24, 2021</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Me</span>
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
                <img src={img} style={{ width: "1.5vw" }} />
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
              <img src={img12} style={{ width: "1.5vw" }} />
              </div>
            </div>
      
            <div className="navoffilestable">
              <div style={{ width: "35%" }} className="tablehaedtitile-name">
                <span>
                  <img
                    style={{
                      width: "2vw",
                      marginRight: "1.52vw",
                      objectFit: "contain",
                    }}
                    src={img3}
                    alt=""
                  />
                </span>
                <span>E-Commerce.jpg</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Image</span>
              </div>
              <div style={{ width: "12%" }} className="tablehaedtitile-name">
                <span>3.6 MB</span>
              </div>
              <div style={{ width: "19%" }} className="tablehaedtitile-name">
                <span>Sep 24, 2021</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Me</span>
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
                <img src={img} style={{ width: "1.5vw" }} />
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
              <img src={img12} style={{ width: "1.5vw" }} />
              </div>
            </div>
      
            <div className="navoffilestable">
              <div style={{ width: "35%" }} className="tablehaedtitile-name">
                <span>
                  <img
                    style={{
                      width: "2vw",
                      marginRight: "1.52vw",
                      objectFit: "contain",
                    }}
                    src={img3}
                    alt=""
                  />
                </span>
                <span>E-Commerce.jpg</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Image</span>
              </div>
              <div style={{ width: "12%" }} className="tablehaedtitile-name">
                <span>3.6 MB</span>
              </div>
              <div style={{ width: "19%" }} className="tablehaedtitile-name">
                <span>Sep 24, 2021</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Me</span>
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
                <img src={img} style={{ width: "1.5vw" }} />
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
              <img src={img12} style={{ width: "1.5vw" }} />
              </div>
            </div>
      
            <div className="navoffilestable">
              <div style={{ width: "35%" }} className="tablehaedtitile-name">
                <span>
                  <img
                    style={{
                      width: "2vw",
                      marginRight: "1.52vw",
                      objectFit: "contain",
                    }}
                    src={img3}
                    alt=""
                  />
                </span>
                <span>E-Commerce.jpg</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Image</span>
              </div>
              <div style={{ width: "12%" }} className="tablehaedtitile-name">
                <span>3.6 MB</span>
              </div>
              <div style={{ width: "19%" }} className="tablehaedtitile-name">
                <span>Sep 24, 2021</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Me</span>
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
                <img src={img} style={{ width: "1.5vw" }} />
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
              <img src={img12} style={{ width: "1.5vw" }} />
              </div>
            </div>
      
            <div className="navoffilestable">
              <div style={{ width: "35%" }} className="tablehaedtitile-name">
                <span>
                  <img
                    style={{
                      width: "2vw",
                      marginRight: "1.52vw",
                      objectFit: "contain",
                    }}
                    src={img3}
                    alt=""
                  />
                </span>
                <span>E-Commerce.jpg</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Image</span>
              </div>
              <div style={{ width: "12%" }} className="tablehaedtitile-name">
                <span>3.6 MB</span>
              </div>
              <div style={{ width: "19%" }} className="tablehaedtitile-name">
                <span>Sep 24, 2021</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Me</span>
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
                <img src={img} style={{ width: "1.5vw" }} />
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
              <img src={img12} style={{ width: "1.5vw" }} />
              </div>
            </div>
      
            <div className="navoffilestable">
              <div style={{ width: "35%" }} className="tablehaedtitile-name">
                <span>
                  <img
                    style={{
                      width: "2vw",
                      marginRight: "1.52vw",
                      objectFit: "contain",
                    }}
                    src={img3}
                    alt=""
                  />
                </span>
                <span>E-Commerce.jpg</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Image</span>
              </div>
              <div style={{ width: "12%" }} className="tablehaedtitile-name">
                <span>3.6 MB</span>
              </div>
              <div style={{ width: "19%" }} className="tablehaedtitile-name">
                <span>Sep 24, 2021</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Me</span>
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
                <img src={img} style={{ width: "1.5vw" }} />
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
              <img src={img12} style={{ width: "1.5vw" }} />
              </div>
            </div>
      
            <div className="navoffilestable">
              <div style={{ width: "35%" }} className="tablehaedtitile-name">
                <span>
                  <img
                    style={{
                      width: "2vw",
                      marginRight: "1.52vw",
                      objectFit: "contain",
                    }}
                    src={img3}
                    alt=""
                  />
                </span>
                <span>E-Commerce.jpg</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Image</span>
              </div>
              <div style={{ width: "12%" }} className="tablehaedtitile-name">
                <span>3.6 MB</span>
              </div>
              <div style={{ width: "19%" }} className="tablehaedtitile-name">
                <span>Sep 24, 2021</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Me</span>
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
                <img src={img} style={{ width: "1.5vw" }} />
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
              <img src={img12} style={{ width: "1.5vw" }} />
              </div>
            </div>
      
            <div className="navoffilestable">
              <div style={{ width: "35%" }} className="tablehaedtitile-name">
                <span>
                  <img
                    style={{
                      width: "2vw",
                      marginRight: "1.52vw",
                      objectFit: "contain",
                    }}
                    src={img3}
                    alt=""
                  />
                </span>
                <span>E-Commerce.jpg</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Image</span>
              </div>
              <div style={{ width: "12%" }} className="tablehaedtitile-name">
                <span>3.6 MB</span>
              </div>
              <div style={{ width: "19%" }} className="tablehaedtitile-name">
                <span>Sep 24, 2021</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Me</span>
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
                <img src={img} style={{ width: "1.5vw" }} />
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
              <img src={img12} style={{ width: "1.5vw" }} />
              </div>
            </div>
      
            <div className="navoffilestable">
              <div style={{ width: "35%" }} className="tablehaedtitile-name">
                <span>
                  <img
                    style={{
                      width: "2vw",
                      marginRight: "1.52vw",
                      objectFit: "contain",
                    }}
                    src={img3}
                    alt=""
                  />
                </span>
                <span>E-Commerce.jpg</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Image</span>
              </div>
              <div style={{ width: "12%" }} className="tablehaedtitile-name">
                <span>3.6 MB</span>
              </div>
              <div style={{ width: "19%" }} className="tablehaedtitile-name">
                <span>Sep 24, 2021</span>
              </div>
              <div style={{ width: "15%" }} className="tablehaedtitile-name">
                <span>Me</span>
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
                <img src={img} style={{ width: "1.5vw" }} />
              </div>
              <div style={{ width: "5%" }} className="tablehaedtitile-name">
              <img src={img12} style={{ width: "1.5vw" }} />
              </div>
            </div>
      
       </div>
        </div>
      </div>
      <div className="files-rightcontainer">
      <div className="fileinputbox">
          <div className="centerred-ficon">
            <label htmlFor="ok">
              <span>
                <img style={{ cursor: "pointer" }} src={img7} alt="" />
              </span>
              <div className="importfiletxt">Import Files</div>
              <input type="file" name="" id="ok" hidden />
            </label>
          </div>
        </div>

        <div className="capacitytitile" style={{textAlign:"center",cursor:"pointer",fontSize:"1.3vw"}}>
        Click here to Upgrade Storage
        </div>
        <hr />
        <div className="capacitytitile" style={{textAlign:"center"}}>Storage</div>
        <div className="circle-files" style={{ width: "10vw", height: "10vw" }}>
          <CircularProgressbar
            value={4}
            text={`1.8GB`}
            maxValue={10}
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "1.5vw",
              pathTransitionDuration: 0.5,
              pathColor: `#0052CC`,
              textColor: "#000000",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <div style={{marginTop:"3vw"}} className="filesttyprmainboxxstorage">

          <div className="filestypestorage">
            <div className="files-detailst">
              <div className="files-detailstimg">
                <img src={img3} alt="" />
              </div>
              <div className="files-detailst-name">
                <div className="files-detailst-title">Photos</div>
                <div className="files-detailst-no">210 files</div>
              </div>
            </div>
            <div className="files-detailstst">0.4GB</div>
          </div>
          <div className="filestypestorage">
            <div className="files-detailst">
              <div className="files-detailstimg">
                <img src={img5} alt="" />
              </div>
              <div className="files-detailst-name">
                <div className="files-detailst-title">Videos</div>
                <div className="files-detailst-no">210 files</div>
              </div>
            </div>
            <div className="files-detailstst">0.4GB</div>
          </div>
          <div className="filestypestorage">
            <div className="files-detailst">
              <div className="files-detailstimg">
                <img src={img6} alt="" />
              </div>
              <div className="files-detailst-name">
                <div className="files-detailst-title">Zip</div>
                <div className="files-detailst-no">210 files</div>
              </div>
            </div>
            <div className="files-detailstst">0.4GB</div>
          </div>
          <div className="filestypestorage">
            <div className="files-detailst">
              <div className="files-detailstimg">
                <img src={img2} alt="" />
              </div>
              <div className="files-detailst-name">
                <div className="files-detailst-title">Pdf</div>
                <div className="files-detailst-no">210 files</div>
              </div>
            </div>
            <div className="files-detailstst">0.4GB</div>
          </div>
          <div className="filestypestorage">
            <div className="files-detailst">
              <div className="files-detailstimg">
                <img src={img4} alt="" />
              </div>
              <div className="files-detailst-name">
                <div className="files-detailst-title">Documents</div>
                <div className="files-detailst-no">210 files</div>
              </div>
            </div>
            <div className="files-detailstst">0.4GB</div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
