import React from "react";
import "./App.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import zIndex from "@mui/material/styles/zIndex";

function PageHome() {
  const navigate = useNavigate();

  const chuyenhuong = () => {
    navigate("/dongthoigian");
  };

  return (
    <div>
      {/* <button onClick={chuyenhuong}>Go to About Page</button> */}
      <div className="buttons">
        <Link to="/" className="btn btn-bir">
          Sinh nhật
        </Link>
        <Link to="/dongthoigian" className="btn btn-timeline">
          Dòng thời gian
        </Link>
        <Link to="/anhembe" className="btn btn-gallery">
          Ảnh em bé
        </Link>
      </div>
      <div
        style={{ position: "absolute", top: "0px", left: "0px", zIndex: -1 }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default PageHome;
