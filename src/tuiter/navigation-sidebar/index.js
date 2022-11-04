import React from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  House,
  Hash,
  Asterisk,
  Bell,
  Mailbox,
  Bookmark,
  List,
  Person,
  ThreeDots,
} from "react-bootstrap-icons";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <Link to="/tuiter" className="list-group-item">
        <Twitter className="d-none d-xl-inline" />
        Tuiter
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
        ${active === "home" ? "active" : ""}`}
      >
        <House className="d-none d-xl-inline" />
        Home
      </Link>
      <Link
        to="/tuiter/explore"
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
      >
        <Hash className="d-none d-xl-inline" />
        Explore
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
      >
        <Asterisk className="d-none d-xl-inline" />
        Labs
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
      >
        <Bell className="d-none d-xl-inline" />
        Notifications
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
      >
        <Mailbox className="d-none d-xl-inline" />
        Messages
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
      >
        <Bookmark className="d-none d-xl-inline" />
        Bookmarks
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
      >
        <List className="d-none d-xl-inline" />
        Lists
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
      >
        <Person className="d-none d-xl-inline" />
        Profile
      </Link>
      <Link
        to="/tuiter"
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
      >
        <ThreeDots className="d-none d-xl-inline" />
        More
      </Link>
    </div>
  );
};
export default NavigationSidebar;

