import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Widget from "./Widget";
import FeaturedChart from "./FeaturedChart";
import NormalChart from "./NormalChart";
import Table from "./Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <FeaturedChart />
          <NormalChart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
