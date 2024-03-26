import React from "react";
import "./Sidbar.css";
import { Link } from "react-router-dom";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";

const Sidbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to={"/"}>
              <li className="sidebarListItem active">
                <LineStyle />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to={"users"}>
              <li className="sidebarListItem active">
                <PermIdentity />
                Users
              </li>
            </Link>
            <Link to={"products"} >
              <li className="sidebarListItem">
                <Storefront />
                Products
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifcations</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MailOutline />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <WorkOutline />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidbar;
