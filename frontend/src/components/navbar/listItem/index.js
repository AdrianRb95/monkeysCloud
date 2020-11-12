import React from "react";
import { FaCode } from "react-icons/fa";

import "./style.scss";

const ListItem = ({ title, description, date, avatar }) => {
  return (
    <div className="list-item-search">
      <div
        className="item-img"
        style={{ background: "blue", borderRadius: avatar ? 5 : 0 }}
      >
        {!avatar ? (
          <FaCode />
        ) : (
          <img alt="avatar" src={avatar} className="item-avatar" />
        )}
      </div>
      <div className="item-info">
        <div className="item-top">
          <span className={description ? "item-title" : "item-description"}>
            {title}
          </span>
          <h3 className="item-description">{description}</h3>
        </div>
        <div className="item-bot">
          <h5 className="item-env">{date}</h5>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
