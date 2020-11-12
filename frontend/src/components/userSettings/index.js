import React from "react";
import "./style.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

function UserSettings() {
  return (
    <nav className="menu">
      <ul className="monkeys-menu-container">
        <li className="monkeys-p-2 pointer">Jira</li>
        <li className="monkeys-p-2 pointer">Personal Settings</li>
        <li className="monkeys-p-2 pointer">Profile</li>
        <li className="monkeys-p-2 pointer d-flex align-items-center">
          <span>Account Settings</span>
          <div className="monkeys-ml-2">
            <FaExternalLinkAlt />
          </div>
        </li>
        <li className="monkeys-p-2 pointer">
          <hr />
        </li>
        <li className="monkeys-p-2 pointer">Logout</li>
      </ul>
    </nav>
  );
}

export default UserSettings;
