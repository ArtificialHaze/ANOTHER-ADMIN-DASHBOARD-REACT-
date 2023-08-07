import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import NormalChart from "./NormalChart";
import List from "./Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="" alt="Image" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jonathan Dickens</h1>
                <div className="detailItem">
                  <span className="itemValue">example@email.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemValue">+995 555 55 55 55</span>
                </div>
                <div className="detailItem">
                  <span className="itemValue">Georgia, Tbilisi</span>
                </div>
                <div className="detailItem">
                  <span className="itemValue">Georgia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <NormalChart
              aspect={3 / 1}
              title={"User spending (Last 6 Months)"}
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
