import React from "react";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import Chart from "../../components/chart/Chart";
import { data } from "../../dummyData";
import "./Home.css";
import Widgetla from "../../components/widgetla/Widgetla";
import Widgetsm from "../../components/widgetsm/Widgetsm";

const Home = () => {
  return (
    <div className="home">
      <Featuredinfo />
      <Chart data={data} title="User Analytics" grid dataKey="active User" />
      <div className="homeWidgets">
        <Widgetsm/>
        <Widgetla />
      </div>
    </div>
  );
};

export default Home;
